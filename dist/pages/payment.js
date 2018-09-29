'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Payment = (_dec = (0, _wepyRedux.connect)({
    openid: function openid(state) {
        return state.user.openid;
    }
}), _dec(_class = function (_wepy$page) {
    _inherits(Payment, _wepy$page);

    function Payment() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Payment);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Payment.__proto__ || Object.getPrototypeOf(Payment)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '支付'
        }, _this.data = {
            loading: false
        }, _this.methods = {
            requestPayment: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var host, paymentUrl, res, payargs;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    host = '14592619.qcloud.la';
                                    paymentUrl = 'https://' + host + '/payment';


                                    this.loading = true;
                                    _context.next = 5;
                                    return _wepy2.default.request({
                                        url: paymentUrl,
                                        data: {
                                            openid: this.openid
                                        },
                                        method: 'POST'
                                    });

                                case 5:
                                    res = _context.sent;

                                    console.log('unified order success, response is:', res);
                                    payargs = res.data.payargs;

                                    _wepy2.default.requestPayment({
                                        timeStamp: payargs.timeStamp,
                                        nonceStr: payargs.nonceStr,
                                        package: payargs.package,
                                        signType: payargs.signType,
                                        paySign: payargs.paySign
                                    });
                                    this.loading = false;

                                case 10:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function requestPayment() {
                    return _ref2.apply(this, arguments);
                }

                return requestPayment;
            }()
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // 可用于页面模板绑定的数据


    // 事件处理函数(集中保存在methods对象中)


    return Payment;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Payment , 'pages/payment'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQuanMiXSwibmFtZXMiOlsiUGF5bWVudCIsIm9wZW5pZCIsInN0YXRlIiwidXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibG9hZGluZyIsIm1ldGhvZHMiLCJyZXF1ZXN0UGF5bWVudCIsImhvc3QiLCJwYXltZW50VXJsIiwid2VweSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicGF5YXJncyIsInRpbWVTdGFtcCIsIm5vbmNlU3RyIiwicGFja2FnZSIsInNpZ25UeXBlIiwicGF5U2lnbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQVFxQkEsTyxXQU5wQix3QkFBUTtBQUNMQyxVQURLLGtCQUNFQyxLQURGLEVBQ1M7QUFDVixlQUFPQSxNQUFNQyxJQUFOLENBQVdGLE1BQWxCO0FBQ0g7QUFISSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7OzRMQVFHRyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFLVEMsSSxHQUFPO0FBQ0hDLHFCQUFTO0FBRE4sUyxRQUtQQyxPLEdBQVU7QUFFQUMsMEJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHSUMsd0NBSEosR0FHVyxvQkFIWDtBQUlJQyw4Q0FKSixnQkFJNEJELElBSjVCOzs7QUFNRix5Q0FBS0gsT0FBTCxHQUFlLElBQWY7QUFORTtBQUFBLDJDQU9nQkssZUFBS0MsT0FBTCxDQUFhO0FBQzNCQyw2Q0FBS0gsVUFEc0I7QUFFM0JMLDhDQUFNO0FBQ0ZMLG9EQUFRLEtBQUtBO0FBRFgseUNBRnFCO0FBSzNCYyxnREFBUTtBQUxtQixxQ0FBYixDQVBoQjs7QUFBQTtBQU9JQyx1Q0FQSjs7QUFjRkMsNENBQVFDLEdBQVIsQ0FBWSxxQ0FBWixFQUFtREYsR0FBbkQ7QUFDTUcsMkNBZkosR0FlY0gsSUFBSVYsSUFBSixDQUFTYSxPQWZ2Qjs7QUFnQkZQLG1EQUFLSCxjQUFMLENBQW9CO0FBQ2hCVyxtREFBV0QsUUFBUUMsU0FESDtBQUVoQkMsa0RBQVVGLFFBQVFFLFFBRkY7QUFHaEJDLGlEQUFTSCxRQUFRRyxPQUhEO0FBSWhCQyxrREFBVUosUUFBUUksUUFKRjtBQUtoQkMsaURBQVNMLFFBQVFLO0FBTEQscUNBQXBCO0FBT0EseUNBQUtqQixPQUFMLEdBQWUsS0FBZjs7QUF2QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxTOzs7QUFOVjs7O0FBS0E7Ozs7RUFYaUNLLGVBQUthLEk7a0JBQXJCekIsTyIsImZpbGUiOiJwYXltZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnO1xuXG4gICAgQGNvbm5lY3Qoe1xuICAgICAgICBvcGVuaWQoc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS51c2VyLm9wZW5pZDtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXltZW50IGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pSv5LuYJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOWPr+eUqOS6jumhtemdouaooeadv+e7keWumueahOaVsOaNrlxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDkuovku7blpITnkIblh73mlbAo6ZuG5Lit5L+d5a2Y5ZyobWV0aG9kc+WvueixoeS4rSlcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYXN5bmMgcmVxdWVzdFBheW1lbnQoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaG9zdCA9ICcxNDU5MjYxOS5xY2xvdWQubGEnO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRVcmwgPSBgaHR0cHM6Ly8ke2hvc3R9L3BheW1lbnRgO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHBheW1lbnRVcmwsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pZDogdGhpcy5vcGVuaWRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5pZmllZCBvcmRlciBzdWNjZXNzLCByZXNwb25zZSBpczonLCByZXMpXG4gICAgICAgICAgICAgICAgY29uc3QgcGF5YXJncyA9IHJlcy5kYXRhLnBheWFyZ3M7XG4gICAgICAgICAgICAgICAgd2VweS5yZXF1ZXN0UGF5bWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVTdGFtcDogcGF5YXJncy50aW1lU3RhbXAsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlU3RyOiBwYXlhcmdzLm5vbmNlU3RyLFxuICAgICAgICAgICAgICAgICAgICBwYWNrYWdlOiBwYXlhcmdzLnBhY2thZ2UsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25UeXBlOiBwYXlhcmdzLnNpZ25UeXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXlTaWduOiBwYXlhcmdzLnBheVNpZ25cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH1cblxuXG4iXX0=