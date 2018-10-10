# wepy-housekeeper
微信小程序--你的个人生活管家



 > 本项目基于wepy框架搭建了用于记录生活的微信小程序，使用了微信运动、天气、图片轮播、redux数据管理、云函数云数据库及云存储等特性。首先简要介绍原生微信语法及wepy框架，然后依次对以上使用到的技术进行说明。

#### 一、微信原生语法

##### 1、应用结构
```
project
├── pages
|   ├── index
|   |   ├── index.js    index 页面逻辑
|   |   ├── index.json  index 页面配置
|   |   ├── index.wxml  index 页面结构
|   |   └── index.wxss  index 页面样式
|   └── log
|       ├── log.js      log 页面逻辑
|       ├── log.json    log 页面配置
|       ├── log.wxml    log 页面结构
|       └── log.wxss    log 页面样式
├── app.js              小程序逻辑
├── app.json            小程序公共配置
└── app.wxss            小程序公共样式
```

##### 2、循环列表
```
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName"
wx:key="unique">
  {{idx}}: {{itemName.message}}
</view>
```

wx:for-item 可以指定数组当前元素的变量名，默认值：item

wx:for-index 可以指定数组当前下标的变量名，默认值：index

wx:key 代表唯一值的属性，如果item是数字，使用 wx:key="*this"

##### 3、条件渲染

```
<view wx:if="{{length > 5}}"> 1 </view>
<view wx:elif="{{length > 2}}"> 2 </view>
<view wx:else> 3 </view>
```

##### 4、事件
```
 <view id="inner" bind:touchstart="handleTap3" capture-bind:touchstart="handleTap4"></view>
```

bind:（冒泡阶段）   
catch:（冒泡阶段）将取消冒泡阶段；    
capture-bind:（捕获阶段）   
capture-catch:（捕获阶段）将中断捕获阶段和取消冒泡阶段。

##### 5、引用

```
<import src="item.wxml"/>
<include src="header.wxml"/>
```
import:只会 import 目标文件中定义的 template
include:将目标文件代码拷贝到include位置


##### 6、数据绑定
this.setData({title: 'this is title'});


#### 二、wepy框架简介
##### 1、应用结构
```
project
└── src
    ├── pages
    |   ├── index.wpy    index 页面逻辑、配置、结构、样式
    |   └── log.wpy      log 页面逻辑、配置、结构、样式
    └──app.wpy           小程序逻辑、公共配置、公共样式
```

##### 2、app.wpy
```
<script>
import wepy from 'wepy';
export default class extends wepy.app {
    config = {
        "pages":[
            "pages/index/index"
        ],
        "window":{
            "backgroundTextStyle": "light",
            "navigationBarBackgroundColor": "#fff",
            "navigationBarTitleText": "WeChat",
            "navigationBarTextStyle": "black"
        },
        "tabBar": { 
            "list": []   //导航栏
        }
    };
    onLaunch() {
        console.log(this);
    }
    globalData = {}  //全局数据
}
</script>

<style lang="less">
/** less **/
</style>
```

##### 3、page.wpy
```
<script>
import wepy from 'wepy';
import Counter from '../components/counter'; //自定义组件

export default class Page extends wepy.page {
    config = {};  // 页面的配置项
    components = {counter1: Counter};

    data = {};   // 用于渲染的数据，template中直接使用，script中this.xx
    computed = {};  // 声明计算属性
    watch = {};  // 声明数据watcher
    methods = {};// wxml事件处理函数对象

    events = {}; // 用于监听组件之间的通信与交互事件的事件处理函数
    onLoad() {}; // 生命周期函数
    // Other properties / 普通自定义方法 / 自定义数据
}
</script>

<template lang="wxml">
    <view>
    </view>
    <counter1></counter1>
</template>

<style lang="less">
/** less **/
</style>
```

```
注意点：
1、this.$parent来访问App实例
2、循环
    <!-- 注意，使用for属性，而不是使用wx:for属性 -->
    <repeat for="{{list}}" key="index" index="index" item="item">
    </repeat>
   
3、事件绑定语法
   bindtap="click"           =>    @tap="click"
   catchtap="click"          =>    @tap.stop="click"
   capture-bind:tap="click"  =>    @tap.capture="click"
   capture-catch:tap="click" =>    @tap.capture.stop="click"
   
4、数据绑定
   this.title = 'this is title';
   this.$apply();
```


#### 三、项目解析
![image](https://636c-cloud-demo-1110d2-1257658184.tcb.qcloud.la/app.png?sign=95927e838e6eecd74265f6972b0221d2&t=1539077533)


##### 1、微信运动
```
1. 登录
  async getUserInfo(cb) {
    if (this.globalData.userInfo) {
      return this.globalData.userInfo;
    }
    const login = await wepy.login();
    const res = await wepy.getUserInfo();
    const userInfo = {...login, ...res.userInfo};
    this.globalData.userInfo = userInfo;
    cb && cb(userInfo);
  }

2. 获取微信运动数据（加密数据）
    let result = await wepy.getWeRunData();
3. 解密数据
   3.1 调用https://api.weixin.qq.com/sns/jscode2session    接口获取openid及session_key
   3.2 调用云函数获取到解密后的微信步数
    wx.cloud.callFunction({
        name: 'getRunData', // 云函数名称
        data: {  // 传给云函数的参数
            encryptedData: data.encryptedData,
            iv: data.iv,
            session_key: res.data.session_key
        }
    });
   3.3 云函数
    const cloud = require('wx-server-sdk')
    const WXBizDataCrypt = require('WXBizDataCrypt.js');
    const AppId = 'wxf6c91f679a67b89c';
    cloud.init();
    // 云函数入口函数
    exports.main = async (event, context) => {
        var pc = new WXBizDataCrypt(AppId, event.session_key);
        return pc.decryptData(event.encryptedData, event.iv);
    };
4. 获取最后一天的步数
    const stepList = res.result.stepInfoList;
    const last = stepList[stepList.length - 1];
    this.lastDayStep = last.step;

```
    
##### 2、定位及地理编码
```
1、定位，得到经纬度
    const res = await wepy.getLocation();
    const latitude = res.latitude;//纬度
    const longitude = res.longitude;//经度
2、调用百度地图API进行地理编码
    https://api.map.baidu.com/geocoder/v2/
```

##### 3、图片轮播
```
1、图片上传到云存储管理
2、将图片地址列表放到easyMock里
3、请求数据
    let result = await wepy.request(this.$parent.globalData.apiHost + '/banner/list');
    let urls =  await wx.cloud.getTempFileURL({
        fileList: result.data.data
    });
    this.banners = urls.fileList;
4、加载图片
    <swiper
        class="swiper_box" 
        autoplay="{{autoplay}}"
        interval="{{interval}}"
        duration="{{duration}}"
        @change="swiperchange"
    >
        <repeat for="{{banners}}" key="fileID">
            <swiper-item>
                <image
                    src="{{item.tempFileURL}}"
                    class="slide-image"
                    width="750rpx"
                    height="400rpx"
                />
            </swiper-item>
        </repeat>
    </swiper>
```
##### 4、天气、redux--组建间数据共享
```
1、reducer

    export default handleActions({
        [GET_WEATHER] (state, action) {
            const data = action.payload.data.HeWeather5[0];
            const weather = data.now;
            const weatherQuality = data.aqi;
            return {
                ...state,
                weather,
                weatherQuality
            }
        }
    }, {
        weather: {},
        weatherQuality: {}
    });

2、action

    export const getWeather = createAction(GET_WEATHER, async city => {
        const url = "https://free-api.heweather.com/v5/weather";
        return await wepy.request(`${url}?city=${city}&key=4a555d4d1adc451d8ceeaa73869c9519`);
    });

3、组件内使用
    import { connect } from 'wepy-redux';

    @connect({
        weather(state) {
            return state.weather.weather;
        },
        weatherQuality(state) {
            return state.weather.weatherQuality;
        }
    },
    {
        getWeather,
        getOpenId
    })
    // 使用state   xxx
    // 使用action  this.methods.xxx()
```
##### 5、写日记（云函数云数据库及云存储）
```
1、选择位置
    const res = await wepy.chooseLocation();
    this.address = res.address;
    this.longitude = res.longitude;
    this.latitude = res.latitude;
2、日期选择器
    <picker class="item-content" mode="date" value="{{date}}" @change="bindDateChange">
        <view class="weui-input">{{date}}</view>
    </picker>
3、使用redux获取天气数据
4、图片选择及预览
    async chooseImage() {
        const res = await wepy.chooseImage({
            sourceType: ['camera', 'album'],
            sizeType: ['compressed', 'original'],
            count: 9
        });
        this.imageList = res.tempFilePaths;
    },
    previewImage(e) {
        const current = e.target.dataset.src;
        wx.previewImage({
            current,
            urls: this.imageList
        });
    }
5、提交数据（云存数、云函数、云数据库）
    const requsets = this.imageList.map(tempFilePath => wepy.saveFile({tempFilePath})); // 云存储
    Promise.all(requsets).then(res => {
        const imgs = u.pluck(res, 'savedFilePath');
        const data = {...};
        wx.cloud.callFunction({ // 云函数
            name: 'addDiary',
            data
        }).then(() => this.resetFormData());
    });
    
    // 云函数中的内容
    cloud.init();
    const db = cloud.database();
    exports.main = async (event, context) => {
        try {
            return await db.collection('diary').add({
                data: {// data 字段表示需新增的 JSON 数据}
            })
        }
        catch(e) {
            console.error(e)
        }
    }

```
![image](https://636c-cloud-demo-1110d2-1257658184.tcb.qcloud.la/add.png?sign=31096efdc765e188dd51f3272a2d327e&t=1539138862)

##### 6、查看日记（云函数云数据库及云存储）
```
1、分页加载数据
    onReachBottom() { // 拉到页面最低端触发，请求下一页数据
        this.curPage += 1;
        this.getDiaryList(true);
    }

    onPullDownRefresh() { // 拉到页面最上面触发，刷新数据
        this.curPage = 1;
        this.getDiaryList();
    }
2、获取数据列表（通过云函数）
    cloud.init();
    const db = cloud.database()
    exports.main = async (event, context) => {
        const skipNum = parseInt((event.page - 1) * event.pageSize);
        const limitNum = parseInt(event.pageSize);
        return await db.collection('diary')
            .where({
                userid: event.userid
            })
            .skip(skipNum)
            .limit(limitNum)
            .get();
    };

```

![image](https://636c-cloud-demo-1110d2-1257658184.tcb.qcloud.la/diary1.png?sign=bb7a5d53fb94afc53c4c3787716b6c22&t=1539079231/w/240)