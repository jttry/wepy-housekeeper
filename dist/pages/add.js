'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _underscore = require('./../npm/underscore/underscore.js');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// redux
var Add = (_dec = (0, _wepyRedux.connect)({
    weather: function weather(state) {
        return state.weather.weather;
    }
}), _dec(_class = function (_wepy$page) {
    _inherits(Add, _wepy$page);

    function Add() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Add);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Add.__proto__ || Object.getPrototypeOf(Add)).call.apply(_ref, [this].concat(args))), _this), _this.db = null, _this.config = {
            navigationBarTitleText: '写日记'
        }, _this.data = {
            imageList: [],
            address: '',
            longitude: 0,
            latitude: 0,
            date: '',
            time: ''
        }, _this.methods = {
            chooseImage: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var res;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return _wepy2.default.chooseImage({
                                        sourceType: ['camera', 'album'],
                                        sizeType: ['compressed', 'original'],
                                        count: 9
                                    });

                                case 2:
                                    res = _context.sent;

                                    console.log(res);
                                    this.imageList = res.tempFilePaths;
                                    // this.imageList = [].concat(this.imageList, res.tempFilePaths).splice(0, 9);
                                    this.$apply();

                                case 6:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function chooseImage() {
                    return _ref2.apply(this, arguments);
                }

                return chooseImage;
            }(),
            previewImage: function previewImage(e) {
                var current = e.target.dataset.src;
                wx.previewImage({
                    current: current,
                    urls: this.imageList
                });
            },
            chooseLocation: function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var res;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return _wepy2.default.chooseLocation();

                                case 2:
                                    res = _context2.sent;

                                    this.address = res.address;
                                    this.longitude = res.longitude;
                                    this.latitude = res.latitude;
                                    this.$apply();

                                case 7:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function chooseLocation() {
                    return _ref3.apply(this, arguments);
                }

                return chooseLocation;
            }(),
            bindDateChange: function bindDateChange(e) {
                this.date = e.detail.value;
                this.$apply();
            },
            bindTimeChange: function bindTimeChange(e) {
                this.time = e.detail.value;
                this.$apply();
            },
            formSubmit: function formSubmit(e) {
                var _this2 = this;

                var userInfo = this.$parent.globalData.userInfo;
                var requsets = this.imageList.map(function (tempFilePath) {
                    return _wepy2.default.saveFile({ tempFilePath: tempFilePath });
                });
                Promise.all(requsets).then(function (res) {
                    var imgs = _underscore2.default.pluck(res, 'savedFilePath');
                    var data = {
                        userid: userInfo && userInfo.nickName,
                        content: e.detail.value.content,
                        date: +new Date(_this2.date + ' ' + _this2.time),
                        longitude: _this2.longitude,
                        latitude: _this2.latitude,
                        address: _this2.address,
                        weather: _this2.weather.cond.txt,
                        tmp: _this2.weather.tmp,
                        imgs: imgs
                    };
                    wx.cloud.callFunction({
                        name: 'addDiary',
                        data: data
                    }).then(function () {
                        return _this2.resetFormData();
                    });
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // 可用于页面模板绑定的数据


    // 事件处理函数(集中保存在methods对象中)


    _createClass(Add, [{
        key: 'onLoad',
        value: function onLoad() {
            this.updateTime();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.updateTime();
        }
    }, {
        key: 'updateTime',
        value: function updateTime() {
            var dateTime = (0, _moment2.default)();
            this.date = dateTime.format('YYYY-MM-DD');
            this.time = dateTime.format('HH:mm:ss');
            this.$apply();
        }
    }, {
        key: 'onPageScroll',
        value: function onPageScroll(e) {
            // this.scrollTop = e.scrollTop;
        }
    }, {
        key: 'onShareAppMessage',
        value: function onShareAppMessage() {
            return {
                title: wx.getStorageSync('mallName') + '——' + app.globalData.shareProfile,
                path: '/pages/index/index',
                success: function success(res) {
                    // 转发成功
                },
                fail: function fail(res) {
                    // 转发失败
                }
            };
        }
    }, {
        key: 'resetFormData',
        value: function resetFormData() {
            this.imageList = [];
            this.address = '';
            this.longitude = 0;
            this.latitude = 0;
            this.$apply();
        }
    }]);

    return Add;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Add , 'pages/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJBZGQiLCJ3ZWF0aGVyIiwic3RhdGUiLCJkYiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1hZ2VMaXN0IiwiYWRkcmVzcyIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiZGF0ZSIsInRpbWUiLCJtZXRob2RzIiwiY2hvb3NlSW1hZ2UiLCJ3ZXB5Iiwic291cmNlVHlwZSIsInNpemVUeXBlIiwiY291bnQiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwidGVtcEZpbGVQYXRocyIsIiRhcHBseSIsInByZXZpZXdJbWFnZSIsImUiLCJjdXJyZW50IiwidGFyZ2V0IiwiZGF0YXNldCIsInNyYyIsInd4IiwidXJscyIsImNob29zZUxvY2F0aW9uIiwiYmluZERhdGVDaGFuZ2UiLCJkZXRhaWwiLCJ2YWx1ZSIsImJpbmRUaW1lQ2hhbmdlIiwiZm9ybVN1Ym1pdCIsInVzZXJJbmZvIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJyZXF1c2V0cyIsIm1hcCIsInNhdmVGaWxlIiwidGVtcEZpbGVQYXRoIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJpbWdzIiwidSIsInBsdWNrIiwidXNlcmlkIiwibmlja05hbWUiLCJjb250ZW50IiwiRGF0ZSIsImNvbmQiLCJ0eHQiLCJ0bXAiLCJjbG91ZCIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJyZXNldEZvcm1EYXRhIiwidXBkYXRlVGltZSIsImRhdGVUaW1lIiwiZm9ybWF0IiwidGl0bGUiLCJnZXRTdG9yYWdlU3luYyIsImFwcCIsInNoYXJlUHJvZmlsZSIsInBhdGgiLCJzdWNjZXNzIiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0lBT3FCQSxHLFdBTnBCLHdCQUFRO0FBQ0xDLFdBREssbUJBQ0dDLEtBREgsRUFDVTtBQUNYLGVBQU9BLE1BQU1ELE9BQU4s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TDtBQUNIOzs7O0VBeEg0QlIsZUFBS3lELEk7a0JBQWpCeEUsRyIsImZpbGUiOiJhZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3dlcHktcmVkdXgnO1xuICAgIGltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbiAgICBpbXBvcnQgdSBmcm9tICd1bmRlcnNjb3JlJztcblxuICAgIC8vIHJlZHV4XG4gICAgQGNvbm5lY3Qoe1xuICAgICAgICB3ZWF0aGVyKHN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUud2VhdGhlci53ZWF0aGVyO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZCBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICAgICAgZGIgPSBudWxsO1xuXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflhpnml6XorrAnXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g5Y+v55So5LqO6aG16Z2i5qih5p2/57uR5a6a55qE5pWw5o2uXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpbWFnZUxpc3Q6IFtdLFxuICAgICAgICAgICAgYWRkcmVzczogJycsXG4gICAgICAgICAgICBsb25naXR1ZGU6IDAsXG4gICAgICAgICAgICBsYXRpdHVkZTogMCxcbiAgICAgICAgICAgIGRhdGU6ICcnLFxuICAgICAgICAgICAgdGltZTogJydcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDkuovku7blpITnkIblh73mlbAo6ZuG5Lit5L+d5a2Y5ZyobWV0aG9kc+WvueixoeS4rSlcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGFzeW5jIGNob29zZUltYWdlKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2NhbWVyYScsICdhbGJ1bSddLFxuICAgICAgICAgICAgICAgICAgICBzaXplVHlwZTogWydjb21wcmVzc2VkJywgJ29yaWdpbmFsJ10sXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiA5XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlTGlzdCA9IHJlcy50ZW1wRmlsZVBhdGhzO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuaW1hZ2VMaXN0ID0gW10uY29uY2F0KHRoaXMuaW1hZ2VMaXN0LCByZXMudGVtcEZpbGVQYXRocykuc3BsaWNlKDAsIDkpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBwcmV2aWV3SW1hZ2UoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBlLnRhcmdldC5kYXRhc2V0LnNyYztcbiAgICAgICAgICAgICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLmltYWdlTGlzdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYXN5bmMgY2hvb3NlTG9jYXRpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5jaG9vc2VMb2NhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IHJlcy5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIHRoaXMubG9uZ2l0dWRlID0gcmVzLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gcmVzLmxhdGl0dWRlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBiaW5kRGF0ZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGJpbmRUaW1lQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZm9ybVN1Ym1pdChlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbztcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1c2V0cyA9IHRoaXMuaW1hZ2VMaXN0Lm1hcCh0ZW1wRmlsZVBhdGggPT4gd2VweS5zYXZlRmlsZSh7dGVtcEZpbGVQYXRofSkpO1xuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHJlcXVzZXRzKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ3MgPSB1LnBsdWNrKHJlcywgJ3NhdmVkRmlsZVBhdGgnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpZDogdXNlckluZm8gJiYgdXNlckluZm8ubmlja05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBlLmRldGFpbC52YWx1ZS5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogK25ldyBEYXRlKHRoaXMuZGF0ZSArICcgJyArIHRoaXMudGltZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IHRoaXMubG9uZ2l0dWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IHRoaXMubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyOiB0aGlzLndlYXRoZXIuY29uZC50eHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXA6IHRoaXMud2VhdGhlci50bXAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdzXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkRGlhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHRoaXMucmVzZXRGb3JtRGF0YSgpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVGltZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbW9tZW50KCk7XG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBkYXRlVGltZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IGRhdGVUaW1lLmZvcm1hdCgnSEg6bW06c3MnKTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBvblBhZ2VTY3JvbGwoZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5zY3JvbGxUb3AgPSBlLnNjcm9sbFRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogd3guZ2V0U3RvcmFnZVN5bmMoJ21hbGxOYW1lJykgKyAn4oCU4oCUJyArIGFwcC5nbG9iYWxEYXRhLnNoYXJlUHJvZmlsZSxcbiAgICAgICAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4L2luZGV4JyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOi9rOWPkeaIkOWKn1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAvLyDovazlj5HlpLHotKVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXNldEZvcm1EYXRhKCkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZUxpc3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9ICcnO1xuICAgICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXRpdHVkZSA9IDA7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG5cbiAgICB9XG4iXX0=