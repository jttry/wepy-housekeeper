'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; // alias example
// alias example
// aliasFields example
// aliasFields ignore module example


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _actions = require('./../store/actions/index.js');

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _list = require('./../components/wepy-list.js');

var _list2 = _interopRequireDefault(_list);

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppId = 'wxf6c91f679a67b89c';
var AppSecret = 'a107443e768b171ae894d0a774daea32';

// redux

// 使用state   xxx
// 使用action  this.methods.xxx()

var Index = (_dec = (0, _wepyRedux.connect)({
    weather: function weather(state) {
        return state.weather.weather;
    },
    weatherQuality: function weatherQuality(state) {
        return state.weather.weatherQuality;
    }
}, {
    getWeather: _actions.getWeather,
    getOpenId: _actions.getOpenId
}), _dec(_class = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '个人生活管家'
        }, _this.data = {
            autoplay: true,
            interval: 3000,
            duration: 1000,
            swiperCurrent: 0,

            banners: [],
            tools: [{
                id: '1',
                link: './diary',
                img: './images/happy.png',
                text: '日记本'
            }, {
                id: '2',
                link: '',
                img: './images/run.png',
                text: 'Todo'
            }, {
                id: '3',
                link: './camera',
                img: './images/knl.png',
                text: '直播'
            }, {
                id: '4',
                link: '',
                img: './images/word.png',
                text: '纪念日'
            }, {
                id: '5',
                link: '',
                img: './images/knl.png',
                text: '手账'
            }],

            lastDayStep: 0,
            city: '',
            district: '',
            street: ''
        }, _this.methods = {
            swiperchange: function swiperchange(e) {
                this.swiperCurrent = e.detail.current;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // 可用于页面模板绑定的数据


    // 事件处理函数(集中保存在methods对象中)


    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            wx.cloud.init();
            this.getBanner();
            this.getRunData();
            this.getLocation();
        }
    }, {
        key: 'getBanner',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var result, urls;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _wepy2.default.request(this.$parent.globalData.apiHost + '/banner/list');

                            case 2:
                                result = _context.sent;
                                _context.next = 5;
                                return wx.cloud.getTempFileURL({
                                    fileList: result.data.data
                                });

                            case 5:
                                urls = _context.sent;

                                this.banners = urls.fileList;
                                // 在异步函数中更新数据的时候，必须手动调用$apply方法，才会触发脏数据检查流程的运行
                                this.$apply();

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getBanner() {
                return _ref2.apply(this, arguments);
            }

            return getBanner;
        }()

        /**
         * 获取微信运动步数
        */

    }, {
        key: 'getRunData',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var result;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _wepy2.default.getWeRunData();

                            case 2:
                                result = _context2.sent;

                                this.decodeUserInfo(result);

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getRunData() {
                return _ref3.apply(this, arguments);
            }

            return getRunData;
        }()
    }, {
        key: 'decodeUserInfo',
        value: function decodeUserInfo(data) {
            var _this2 = this;

            // 发起网络请求
            var userInfo = this.$parent.globalData.userInfo;
            _wepy2.default.request({
                url: 'https://api.weixin.qq.com/sns/jscode2session',
                data: {
                    appid: AppId,
                    secret: AppSecret,
                    js_code: userInfo && userInfo.code,
                    grant_type: 'authorization_code'
                },
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: 'GET'
            }).then(function (res) {
                _this2.methods.getOpenId(res.data.openid);
                return wx.cloud.callFunction({
                    // 云函数名称
                    name: 'getRunData',
                    // 传给云函数的参数
                    data: {
                        encryptedData: data.encryptedData,
                        iv: data.iv,
                        session_key: res.data.session_key
                    }
                });
            }).then(function (res) {
                var stepList = res.result.stepInfoList;
                var last = stepList[stepList.length - 1];
                _this2.lastDayStep = last.step;
                _this2.$apply();
            }).catch(console.error);
        }

        // 获取位置

    }, {
        key: 'getLocation',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var res, latitude, longitude;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _wepy2.default.getLocation();

                            case 2:
                                res = _context3.sent;
                                latitude = res.latitude; //纬度

                                longitude = res.longitude; //经度

                                console.log(latitude + "----" + longitude);
                                this.getCity(latitude, longitude); //调用自己写的函数获得城市

                            case 7:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getLocation() {
                return _ref4.apply(this, arguments);
            }

            return getLocation;
        }()
        //获得城市的函数定义

    }, {
        key: 'getCity',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(lat, lng) {
                var url, res, address, city;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                url = "https://api.map.baidu.com/geocoder/v2/";
                                //发出请求获取数据

                                _context4.next = 3;
                                return _wepy2.default.request(url + '?location=' + (lat + "," + lng) + '&output=json&ak=MKABLw7PZssnQPy0BmnV2e6vcUyKWZxf');

                            case 3:
                                res = _context4.sent;

                                console.log(res);
                                address = res.data.result.addressComponent;


                                this.city = address.city;
                                this.district = address.district;
                                this.street = address.street;

                                //调用自定义的函数获取天气信息
                                city = address.city;

                                city = city.substring(0, city.length - 1); //截掉最后一个字"市"
                                this.methods.getWeather(city);

                            case 12:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getCity(_x, _x2) {
                return _ref5.apply(this, arguments);
            }

            return getCity;
        }()
    }]);

    return Index;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkFwcElkIiwiQXBwU2VjcmV0IiwiSW5kZXgiLCJ3ZWF0aGVyIiwic3RhdGUiLCJ3ZWF0aGVyUXVhbGl0eSIsImdldFdlYXRoZXIiLCJnZXRPcGVuSWQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInN3aXBlckN1cnJlbnQiLCJiYW5uZXJzIiwidG9vbHMiLCJpZCIsImxpbmsiLCJpbWciLCJ0ZXh0IiwibGFzdERheVN0ZXAiLCJjaXR5IiwiZGlzdHJpY3QiLCJzdHJlZXQiLCJtZXRob2RzIiwic3dpcGVyY2hhbmdlIiwiZSIsImRldGFpbCIsImN1cnJlbnQiLCIkYXBwbHkiLCJ3eCIsImNsb3VkIiwiaW5pdCIsImdldEJhbm5lciIsImdldFJ1bkRhdGEiLCJnZXRMb2NhdGlvbiIsIndlcHkiLCJyZXF1ZXN0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJhcGlIb3N0IiwicmVzdWx0IiwiZ2V0VGVtcEZpbGVVUkwiLCJmaWxlTGlzdCIsInVybHMiLCJnZXRXZVJ1bkRhdGEiLCJkZWNvZGVVc2VySW5mbyIsInVzZXJJbmZvIiwidXJsIiwiYXBwaWQiLCJzZWNyZXQiLCJqc19jb2RlIiwiY29kZSIsImdyYW50X3R5cGUiLCJoZWFkZXIiLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwib3BlbmlkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsImVuY3J5cHRlZERhdGEiLCJpdiIsInNlc3Npb25fa2V5Iiwic3RlcExpc3QiLCJzdGVwSW5mb0xpc3QiLCJsYXN0IiwibGVuZ3RoIiwic3RlcCIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJsb2ciLCJnZXRDaXR5IiwibGF0IiwibG5nIiwiYWRkcmVzcyIsImFkZHJlc3NDb21wb25lbnQiLCJzdWJzdHJpbmciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7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Q1o7Ozt1Q0FDa0JaLGVBQUtDLE9BQUwsQ0FBZ0JXLEdBQWhCLG1CQUFnQzRCLE1BQU0sR0FBTixHQUFZQyxHQUE1Qyx1RDs7O0FBQVpwQixtQzs7QUFDTmEsd0NBQVFJLEdBQVIsQ0FBWWpCLEdBQVo7QUFDTXFCLHVDLEdBQVVyQixJQUFJaEQsSUFBSixDQUFTZ0MsTUFBVCxDQUFnQnNDLGdCOzs7QUFFaEMscUNBQUsxRCxJQUFMLEdBQVl5RCxRQUFRekQsSUFBcEI7QUFDQSxxQ0FBS0MsUUFBTCxHQUFnQndELFFBQVF4RCxRQUF4QjtBQUNBLHFDQUFLQyxNQUFMLEdBQWN1RCxRQUFRdkQsTUFBdEI7O0FBRUE7QUFDSUYsb0MsR0FBT3lELFFBQVF6RCxJOztBQUNuQkEsdUNBQU9BLEtBQUsyRCxTQUFMLENBQWUsQ0FBZixFQUFrQjNELEtBQUs4QyxNQUFMLEdBQWMsQ0FBaEMsQ0FBUCxDLENBQTBDO0FBQzFDLHFDQUFLM0MsT0FBTCxDQUFhbkIsVUFBYixDQUF3QmdCLElBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakoyQmUsZUFBSzZDLEk7a0JBQW5CaEYsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4JztcbiAgICBpbXBvcnQge2dldFdlYXRoZXIsIGdldE9wZW5JZH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucyc7XG4gICAgaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgLy8gYWxpYXMgZXhhbXBsZVxuICAgIGltcG9ydCBDb3VudGVyIGZyb20gJ2NvdW50ZXInIC8vIGFsaWFzIGV4YW1wbGVcbiAgICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnIC8vIGFsaWFzRmllbGRzIGV4YW1wbGVcbiAgICBpbXBvcnQgbW9kdWxlQSBmcm9tICdtb2R1bGUtYScgLy8gYWxpYXNGaWVsZHMgaWdub3JlIG1vZHVsZSBleGFtcGxlXG4gICAgaW1wb3J0IEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAnXG4gICAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICAgIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG4gICAgY29uc3QgQXBwSWQgPSAnd3hmNmM5MWY2NzlhNjdiODljJztcbiAgICBjb25zdCBBcHBTZWNyZXQgPSAnYTEwNzQ0M2U3NjhiMTcxYWU4OTRkMGE3NzRkYWVhMzInO1xuXG4gICAgLy8gcmVkdXhcbiAgICBAY29ubmVjdCh7XG4gICAgICAgIHdlYXRoZXIoc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS53ZWF0aGVyLndlYXRoZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdlYXRoZXJRdWFsaXR5KHN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUud2VhdGhlci53ZWF0aGVyUXVhbGl0eTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBnZXRXZWF0aGVyLFxuICAgICAgICBnZXRPcGVuSWRcbiAgICB9KVxuICAgIC8vIOS9v+eUqHN0YXRlICAgeHh4XG4gICAgLy8g5L2/55SoYWN0aW9uICB0aGlzLm1ldGhvZHMueHh4KClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uueUn+a0u+euoeWutidcbiAgICB9O1xuXG4gICAgLy8g5Y+v55So5LqO6aG16Z2i5qih5p2/57uR5a6a55qE5pWw5o2uXG4gICAgZGF0YSA9IHtcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGludGVydmFsOiAzMDAwLFxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgc3dpcGVyQ3VycmVudDogMCxcblxuICAgICAgICBiYW5uZXJzOiBbXSxcbiAgICAgICAgdG9vbHM6IFt7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgbGluazogJy4vZGlhcnknLFxuICAgICAgICAgICAgaW1nOiAnLi9pbWFnZXMvaGFwcHkucG5nJyxcbiAgICAgICAgICAgIHRleHQ6ICfml6XorrDmnKwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBsaW5rOiAnJyxcbiAgICAgICAgICAgIGltZzogJy4vaW1hZ2VzL3J1bi5wbmcnLFxuICAgICAgICAgICAgdGV4dDogJ1RvZG8nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBsaW5rOiAnLi9jYW1lcmEnLFxuICAgICAgICAgICAgaW1nOiAnLi9pbWFnZXMva25sLnBuZycsXG4gICAgICAgICAgICB0ZXh0OiAn55u05pKtJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzQnLFxuICAgICAgICAgICAgbGluazogJycsXG4gICAgICAgICAgICBpbWc6ICcuL2ltYWdlcy93b3JkLnBuZycsXG4gICAgICAgICAgICB0ZXh0OiAn57qq5b+15pelJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzUnLFxuICAgICAgICAgICAgbGluazogJycsXG4gICAgICAgICAgICBpbWc6ICcuL2ltYWdlcy9rbmwucG5nJyxcbiAgICAgICAgICAgIHRleHQ6ICfmiYvotKYnIFxuICAgICAgICB9XSxcblxuICAgICAgICBsYXN0RGF5U3RlcDogMCxcbiAgICAgICAgY2l0eTogJycsXG4gICAgICAgIGRpc3RyaWN0OiAnJyxcbiAgICAgICAgc3RyZWV0OiAnJ1xuICAgIH07XG5cbiAgICAvLyDkuovku7blpITnkIblh73mlbAo6ZuG5Lit5L+d5a2Y5ZyobWV0aG9kc+WvueixoeS4rSlcbiAgICBtZXRob2RzID0ge1xuICAgICAgICBzd2lwZXJjaGFuZ2UoZSkge1xuICAgICAgICAgICAgdGhpcy5zd2lwZXJDdXJyZW50ID0gZS5kZXRhaWwuY3VycmVudDtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB3eC5jbG91ZC5pbml0KCk7XG4gICAgICAgIHRoaXMuZ2V0QmFubmVyKCk7XG4gICAgICAgIHRoaXMuZ2V0UnVuRGF0YSgpO1xuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QmFubmVyKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmFwaUhvc3QgKyAnL2Jhbm5lci9saXN0Jyk7XG4gICAgICAgIGxldCB1cmxzID0gIGF3YWl0IHd4LmNsb3VkLmdldFRlbXBGaWxlVVJMKHtcbiAgICAgICAgICAgIGZpbGVMaXN0OiByZXN1bHQuZGF0YS5kYXRhXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJhbm5lcnMgPSB1cmxzLmZpbGVMaXN0O1xuICAgICAgICAvLyDlnKjlvILmraXlh73mlbDkuK3mm7TmlrDmlbDmja7nmoTml7blgJnvvIzlv4XpobvmiYvliqjosIPnlKgkYXBwbHnmlrnms5XvvIzmiY3kvJrop6blj5HohI/mlbDmja7mo4Dmn6XmtYHnqIvnmoTov5DooYxcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5blvq7kv6Hov5DliqjmraXmlbBcbiAgICAqL1xuICAgIGFzeW5jIGdldFJ1bkRhdGEoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB3ZXB5LmdldFdlUnVuRGF0YSgpO1xuICAgICAgICB0aGlzLmRlY29kZVVzZXJJbmZvKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgZGVjb2RlVXNlckluZm8oZGF0YSkge1xuICAgICAgICAvLyDlj5HotbfnvZHnu5zor7fmsYJcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbztcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uJyxcbiAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgIGFwcGlkOiBBcHBJZCxcbiAgICAgICAgICAgICAgICBzZWNyZXQ6IEFwcFNlY3JldCxcbiAgICAgICAgICAgICAgICBqc19jb2RlOiB1c2VySW5mbyAmJiB1c2VySW5mby5jb2RlLFxuICAgICAgICAgICAgICAgIGdyYW50X3R5cGU6ICdhdXRob3JpemF0aW9uX2NvZGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVhZGVyOiB7ICBcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRPcGVuSWQocmVzLmRhdGEub3BlbmlkKTtcbiAgICAgICAgICAgIHJldHVybiB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICAgICAgICAgIC8vIOS6keWHveaVsOWQjeensFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnZXRSdW5EYXRhJyxcbiAgICAgICAgICAgICAgICAvLyDkvKDnu5nkupHlh73mlbDnmoTlj4LmlbBcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZERhdGE6IGRhdGEuZW5jcnlwdGVkRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgaXY6IGRhdGEuaXYsXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25fa2V5OiByZXMuZGF0YS5zZXNzaW9uX2tleVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RlcExpc3QgPSByZXMucmVzdWx0LnN0ZXBJbmZvTGlzdDtcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBzdGVwTGlzdFtzdGVwTGlzdC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHRoaXMubGFzdERheVN0ZXAgPSBsYXN0LnN0ZXA7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5L2N572uXG4gICAgYXN5bmMgZ2V0TG9jYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSByZXMubGF0aXR1ZGU7Ly/nuqzluqZcbiAgICAgICAgY29uc3QgbG9uZ2l0dWRlID0gcmVzLmxvbmdpdHVkZTsvL+e7j+W6plxuICAgICAgICBjb25zb2xlLmxvZyhsYXRpdHVkZSArIFwiLS0tLVwiICsgbG9uZ2l0dWRlKTtcbiAgICAgICAgdGhpcy5nZXRDaXR5KGxhdGl0dWRlLCBsb25naXR1ZGUpOy8v6LCD55So6Ieq5bex5YaZ55qE5Ye95pWw6I635b6X5Z+O5biCXG4gICAgfVxuICAgIC8v6I635b6X5Z+O5biC55qE5Ye95pWw5a6a5LmJXG4gICAgYXN5bmMgZ2V0Q2l0eShsYXQsIGxuZykge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLm1hcC5iYWlkdS5jb20vZ2VvY29kZXIvdjIvXCI7XG4gICAgICAgIC8v5Y+R5Ye66K+35rGC6I635Y+W5pWw5o2uXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdChgJHt1cmx9P2xvY2F0aW9uPSR7bGF0ICsgXCIsXCIgKyBsbmd9Jm91dHB1dD1qc29uJmFrPU1LQUJMdzdQWnNzblFQeTBCbW5WMmU2dmNVeUtXWnhmYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSByZXMuZGF0YS5yZXN1bHQuYWRkcmVzc0NvbXBvbmVudDtcblxuICAgICAgICB0aGlzLmNpdHkgPSBhZGRyZXNzLmNpdHk7XG4gICAgICAgIHRoaXMuZGlzdHJpY3QgPSBhZGRyZXNzLmRpc3RyaWN0O1xuICAgICAgICB0aGlzLnN0cmVldCA9IGFkZHJlc3Muc3RyZWV0O1xuXG4gICAgICAgIC8v6LCD55So6Ieq5a6a5LmJ55qE5Ye95pWw6I635Y+W5aSp5rCU5L+h5oGvXG4gICAgICAgIGxldCBjaXR5ID0gYWRkcmVzcy5jaXR5O1xuICAgICAgICBjaXR5ID0gY2l0eS5zdWJzdHJpbmcoMCwgY2l0eS5sZW5ndGggLSAxKTsvL+aIquaOieacgOWQjuS4gOS4quWtl1wi5biCXCJcbiAgICAgICAgdGhpcy5tZXRob2RzLmdldFdlYXRoZXIoY2l0eSk7XG5cbiAgICB9XG5cblxuXG59XG5cblxuIl19