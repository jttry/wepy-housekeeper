// 云函数入口文件
const cloud = require('wx-server-sdk');
const fs = require('fs');

cloud.init();
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
    try {
        return await db.collection('diary').add({
            // data 字段表示需新增的 JSON 数据
            data: {
                userid: event.userid,
                content: event.content,
                date: event.date,
                loc: new db.Geo.Point(event.longitude, event.latitude),
                address: event.address,
                weather: event.weather,
                tmp: event.tmp,
                imgs: event.imgs
            }
        })
    }
    catch(e) {
        console.error(e)
    }
}