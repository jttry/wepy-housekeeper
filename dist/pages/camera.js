'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Camera = function (_wepy$page) {
    _inherits(Camera, _wepy$page);

    function Camera() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Camera);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Camera.__proto__ || Object.getPrototypeOf(Camera)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '直播'
        }, _this.data = {
            src: '',
            videoSrc: '',
            position: 'front',
            mode: 'scanCode',
            result: {}
        }, _this.methods = {
            takePhoto: function takePhoto() {
                var _this2 = this;

                this.ctx.takePhoto({
                    quality: 'high',
                    success: function success(res) {
                        _this2.src = res.tempImagePath;
                        _this2.$apply();
                    }
                });
            },
            startRecord: function startRecord() {
                this.ctx.startRecord();
            },
            stopRecord: function stopRecord() {
                var _this3 = this;

                this.ctx.stopRecord({
                    success: function success(res) {
                        _this3.src = res.tempThumbPath;
                        _this3.videoSrc = res.tempVideoPath;
                        _this3.$apply();
                    }
                });
            },
            togglePosition: function togglePosition() {
                this.position === 'front' ? 'back' : 'front';
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // 可用于页面模板绑定的数据


    // 事件处理函数(集中保存在methods对象中)


    _createClass(Camera, [{
        key: 'onLoad',
        value: function onLoad() {
            this.ctx = wx.createCameraContext();
        }
    }, {
        key: 'error',
        value: function error(e) {
            console.log(e.detail);
        }
    }]);

    return Camera;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Camera , 'pages/camera'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS5qcyJdLCJuYW1lcyI6WyJDYW1lcmEiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsInZpZGVvU3JjIiwicG9zaXRpb24iLCJtb2RlIiwicmVzdWx0IiwibWV0aG9kcyIsInRha2VQaG90byIsImN0eCIsInF1YWxpdHkiLCJzdWNjZXNzIiwicmVzIiwidGVtcEltYWdlUGF0aCIsIiRhcHBseSIsInN0YXJ0UmVjb3JkIiwic3RvcFJlY29yZCIsInRlbXBUaHVtYlBhdGgiLCJ0ZW1wVmlkZW9QYXRoIiwidG9nZ2xlUG9zaXRpb24iLCJ3eCIsImNyZWF0ZUNhbWVyYUNvbnRleHQiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OzswTEFFakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUtUQyxJLEdBQU87QUFDSEMsaUJBQUssRUFERjtBQUVIQyxzQkFBVSxFQUZQO0FBR0hDLHNCQUFVLE9BSFA7QUFJSEMsa0JBQU0sVUFKSDtBQUtIQyxvQkFBUTtBQUxMLFMsUUFTUEMsTyxHQUFVO0FBQ05DLHFCQURNLHVCQUNNO0FBQUE7O0FBQ1IscUJBQUtDLEdBQUwsQ0FBU0QsU0FBVCxDQUFtQjtBQUNmRSw2QkFBUyxNQURNO0FBRWZDLDZCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDZCwrQkFBS1YsR0FBTCxHQUFXVSxJQUFJQyxhQUFmO0FBQ0EsK0JBQUtDLE1BQUw7QUFDSDtBQUxjLGlCQUFuQjtBQU9ILGFBVEs7QUFVTkMsdUJBVk0seUJBVVE7QUFDVixxQkFBS04sR0FBTCxDQUFTTSxXQUFUO0FBQ0gsYUFaSztBQWFOQyxzQkFiTSx3QkFhTztBQUFBOztBQUNULHFCQUFLUCxHQUFMLENBQVNPLFVBQVQsQ0FBb0I7QUFDaEJMLDZCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDZCwrQkFBS1YsR0FBTCxHQUFXVSxJQUFJSyxhQUFmO0FBQ0EsK0JBQUtkLFFBQUwsR0FBZ0JTLElBQUlNLGFBQXBCO0FBQ0EsK0JBQUtKLE1BQUw7QUFDSDtBQUxlLGlCQUFwQjtBQU9ILGFBckJLO0FBc0JOSywwQkF0Qk0sNEJBc0JXO0FBQ2IscUJBQUtmLFFBQUwsS0FBa0IsT0FBbEIsR0FBNEIsTUFBNUIsR0FBcUMsT0FBckM7QUFDQSxxQkFBS1UsTUFBTDtBQUVIO0FBMUJLLFM7OztBQVZWOzs7QUFTQTs7Ozs7aUNBOEJTO0FBQ0wsaUJBQUtMLEdBQUwsR0FBV1csR0FBR0MsbUJBQUgsRUFBWDtBQUNIOzs7OEJBRUtDLEMsRUFBRztBQUNMQyxvQkFBUUMsR0FBUixDQUFZRixFQUFFRyxNQUFkO0FBQ0g7Ozs7RUFuRCtCQyxlQUFLQyxJOztrQkFBcEI3QixNIiwiZmlsZSI6ImNhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55u05pKtJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOWPr+eUqOS6jumhtemdouaooeadv+e7keWumueahOaVsOaNrlxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc3JjOiAnJyxcbiAgICAgICAgICAgIHZpZGVvU3JjOiAnJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxuICAgICAgICAgICAgbW9kZTogJ3NjYW5Db2RlJyxcbiAgICAgICAgICAgIHJlc3VsdDoge31cbiAgICAgICAgfTtcblxuICAgICAgICAvLyDkuovku7blpITnkIblh73mlbAo6ZuG5Lit5L+d5a2Y5ZyobWV0aG9kc+WvueixoeS4rSlcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRha2VQaG90bygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC50YWtlUGhvdG8oe1xuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gcmVzLnRlbXBJbWFnZVBhdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhcnRSZWNvcmQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3RhcnRSZWNvcmQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdG9wUmVjb3JkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0b3BSZWNvcmQoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNyYyA9IHJlcy50ZW1wVGh1bWJQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb1NyYyA9IHJlcy50ZW1wVmlkZW9QYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZVBvc2l0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPT09ICdmcm9udCcgPyAnYmFjaycgOiAnZnJvbnQnO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHd4LmNyZWF0ZUNhbWVyYUNvbnRleHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVycm9yKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsKVxuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG5cbiJdfQ==