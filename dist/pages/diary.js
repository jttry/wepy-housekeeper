'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Diary = function (_wepy$page) {
    _inherits(Diary, _wepy$page);

    function Diary() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Diary);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Diary.__proto__ || Object.getPrototypeOf(Diary)).call.apply(_ref, [this].concat(args))), _this), _this.curPage = 1, _this.pageSize = 10, _this.config = {
            navigationBarTitleText: '日记本'
        }, _this.data = {
            loadingMoreHidden: true,
            diary: []
        }, _this.computed = {
            diaryList: function diaryList() {
                return this.diary.map(function (item) {
                    item.date = (0, _moment2.default)(item.date).format('YYYY-MM-DD HH:mm:ss');
                    return item;
                });
            }
        }, _this.methods = {
            toDetailsTap: function toDetailsTap(e) {
                wx.navigateTo({
                    url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // 可用于页面模板绑定的数据


    // 事件处理函数(集中保存在methods对象中)


    _createClass(Diary, [{
        key: 'onLoad',
        value: function onLoad() {
            this.getDiaryList();
        }
    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            this.curPage += 1;
            this.getDiaryList(true);
        }
    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            this.curPage = 1;
            this.getDiaryList();
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
        key: 'getDiaryList',
        value: function getDiaryList(append) {
            var _this2 = this;

            var userInfo = this.$parent.globalData.userInfo;
            wx.showLoading({ mask: true });
            wx.cloud.callFunction({
                name: 'getDiaryList',
                data: {
                    userid: userInfo && userInfo.nickName,
                    page: this.curPage,
                    pageSize: this.pageSize
                }
            }).then(function (res) {
                wx.hideLoading();
                var data = res.result.data;
                if (data.code === 404 || data.code === 700) {
                    _this2.loadingMoreHidden = false;
                    if (!append) {
                        _this2.diary = [];
                    }
                } else {
                    var diary = [];
                    if (append) {
                        diary = _this2.diary;
                    }
                    for (var i = 0; i < data.length; i++) {
                        diary.push(data[i]);
                    }
                    _this2.loadingMoreHidden = true;
                    _this2.diary = diary;
                }
                _this2.$apply();
            });
        }
    }]);

    return Diary;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Diary , 'pages/diary'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYXJ5LmpzIl0sIm5hbWVzIjpbIkRpYXJ5IiwiY3VyUGFnZSIsInBhZ2VTaXplIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsb2FkaW5nTW9yZUhpZGRlbiIsImRpYXJ5IiwiY29tcHV0ZWQiLCJkaWFyeUxpc3QiLCJtYXAiLCJpdGVtIiwiZGF0ZSIsImZvcm1hdCIsIm1ldGhvZHMiLCJ0b0RldGFpbHNUYXAiLCJlIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpZCIsImdldERpYXJ5TGlzdCIsInRpdGxlIiwiZ2V0U3RvcmFnZVN5bmMiLCJhcHAiLCJnbG9iYWxEYXRhIiwic2hhcmVQcm9maWxlIiwicGF0aCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiYXBwZW5kIiwidXNlckluZm8iLCIkcGFyZW50Iiwic2hvd0xvYWRpbmciLCJtYXNrIiwiY2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwidXNlcmlkIiwibmlja05hbWUiLCJwYWdlIiwidGhlbiIsImhpZGVMb2FkaW5nIiwicmVzdWx0IiwiY29kZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwiJGFwcGx5Iiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFFakJDLE8sR0FBVSxDLFFBQ1ZDLFEsR0FBVyxFLFFBRVhDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUtUQyxJLEdBQU87QUFDSEMsK0JBQW1CLElBRGhCO0FBRUhDLG1CQUFPO0FBRkosUyxRQUtQQyxRLEdBQVc7QUFDUEMscUJBRE8sdUJBQ0s7QUFDUix1QkFBTyxLQUFLRixLQUFMLENBQVdHLEdBQVgsQ0FBZSxnQkFBUTtBQUMxQkMseUJBQUtDLElBQUwsR0FBWSxzQkFBT0QsS0FBS0MsSUFBWixFQUFrQkMsTUFBbEIsQ0FBeUIscUJBQXpCLENBQVo7QUFDQSwyQkFBT0YsSUFBUDtBQUNILGlCQUhNLENBQVA7QUFJSDtBQU5NLFMsUUFVWEcsTyxHQUFVO0FBQ05DLHdCQURNLHdCQUNPQyxDQURQLEVBQ1U7QUFDWkMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSyxtQ0FBbUNILEVBQUVJLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQztBQUR0RCxpQkFBZDtBQUdIO0FBTEssUzs7O0FBaEJWOzs7QUFlQTs7Ozs7aUNBU1M7QUFDTCxpQkFBS0MsWUFBTDtBQUNIOzs7d0NBRWU7QUFDWixpQkFBS3RCLE9BQUwsSUFBZ0IsQ0FBaEI7QUFDQSxpQkFBS3NCLFlBQUwsQ0FBa0IsSUFBbEI7QUFDSDs7OzRDQUVtQjtBQUNoQixpQkFBS3RCLE9BQUwsR0FBZSxDQUFmO0FBQ0EsaUJBQUtzQixZQUFMO0FBQ0g7Ozs0Q0FFbUI7QUFDaEIsbUJBQU87QUFDSEMsdUJBQU9QLEdBQUdRLGNBQUgsQ0FBa0IsVUFBbEIsSUFBZ0MsSUFBaEMsR0FBdUNDLElBQUlDLFVBQUosQ0FBZUMsWUFEMUQ7QUFFSEMsc0JBQU0sb0JBRkg7QUFHSEMseUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUNwQjtBQUNILGlCQUxFO0FBTUhDLHNCQUFNLGNBQVVELEdBQVYsRUFBZTtBQUNqQjtBQUNIO0FBUkUsYUFBUDtBQVVIOzs7cUNBRVlFLE0sRUFBUTtBQUFBOztBQUNqQixnQkFBTUMsV0FBVyxLQUFLQyxPQUFMLENBQWFSLFVBQWIsQ0FBd0JPLFFBQXpDO0FBQ0FqQixlQUFHbUIsV0FBSCxDQUFlLEVBQUNDLE1BQU0sSUFBUCxFQUFmO0FBQ0FwQixlQUFHcUIsS0FBSCxDQUFTQyxZQUFULENBQXNCO0FBQ2xCQyxzQkFBTSxjQURZO0FBRWxCbkMsc0JBQU07QUFDRm9DLDRCQUFRUCxZQUFZQSxTQUFTUSxRQUQzQjtBQUVGQywwQkFBTSxLQUFLMUMsT0FGVDtBQUdGQyw4QkFBVSxLQUFLQTtBQUhiO0FBRlksYUFBdEIsRUFRQzBDLElBUkQsQ0FRTSxlQUFPO0FBQ1QzQixtQkFBRzRCLFdBQUg7QUFDQSxvQkFBTXhDLE9BQU8wQixJQUFJZSxNQUFKLENBQVd6QyxJQUF4QjtBQUNBLG9CQUFJQSxLQUFLMEMsSUFBTCxLQUFjLEdBQWQsSUFBcUIxQyxLQUFLMEMsSUFBTCxLQUFjLEdBQXZDLEVBQTRDO0FBQ3hDLDJCQUFLekMsaUJBQUwsR0FBeUIsS0FBekI7QUFDQSx3QkFBSSxDQUFDMkIsTUFBTCxFQUFhO0FBQ1QsK0JBQUsxQixLQUFMLEdBQWEsRUFBYjtBQUNIO0FBQ0osaUJBTEQsTUFNSztBQUNELHdCQUFJQSxRQUFRLEVBQVo7QUFDQSx3QkFBSTBCLE1BQUosRUFBWTtBQUNSMUIsZ0NBQVEsT0FBS0EsS0FBYjtBQUNIO0FBQ0QseUJBQUksSUFBSXlDLElBQUksQ0FBWixFQUFlQSxJQUFJM0MsS0FBSzRDLE1BQXhCLEVBQWdDRCxHQUFoQyxFQUFvQztBQUNoQ3pDLDhCQUFNMkMsSUFBTixDQUFXN0MsS0FBSzJDLENBQUwsQ0FBWDtBQUNIO0FBQ0QsMkJBQUsxQyxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLDJCQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDSDtBQUNELHVCQUFLNEMsTUFBTDtBQUNILGFBN0JEO0FBOEJIOzs7O0VBN0Y4QkMsZUFBS1QsSTs7a0JBQW5CM0MsSyIsImZpbGUiOiJkaWFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhcnkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgICAgIGN1clBhZ2UgPSAxO1xuICAgICAgICBwYWdlU2l6ZSA9IDEwO1xuXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfml6XorrDmnKwnXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g5Y+v55So5LqO6aG16Z2i5qih5p2/57uR5a6a55qE5pWw5o2uXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBsb2FkaW5nTW9yZUhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgIGRpYXJ5OiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgZGlhcnlMaXN0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpYXJ5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kYXRlID0gbW9tZW50KGl0ZW0uZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g5LqL5Lu25aSE55CG5Ye95pWwKOmbhuS4reS/neWtmOWcqG1ldGhvZHPlr7nosaHkuK0pXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b0RldGFpbHNUYXAoZSkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL2dvb2RzLWRldGFpbHMvaW5kZXg/aWQ9XCIgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RGlhcnlMaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBvblJlYWNoQm90dG9tKCkge1xuICAgICAgICAgICAgdGhpcy5jdXJQYWdlICs9IDE7XG4gICAgICAgICAgICB0aGlzLmdldERpYXJ5TGlzdCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgICAgICAgdGhpcy5jdXJQYWdlID0gMTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RGlhcnlMaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHd4LmdldFN0b3JhZ2VTeW5jKCdtYWxsTmFtZScpICsgJ+KAlOKAlCcgKyBhcHAuZ2xvYmFsRGF0YS5zaGFyZVByb2ZpbGUsXG4gICAgICAgICAgICAgICAgcGF0aDogJy9wYWdlcy9pbmRleC9pbmRleCcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0RGlhcnlMaXN0KGFwcGVuZCkge1xuICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbztcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHttYXNrOiB0cnVlfSk7XG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdnZXREaWFyeUxpc3QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcmlkOiB1c2VySW5mbyAmJiB1c2VySW5mby5uaWNrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogdGhpcy5jdXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTsgXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5yZXN1bHQuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb2RlID09PSA0MDQgfHwgZGF0YS5jb2RlID09PSA3MDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTW9yZUhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFwcGVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFyeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGlhcnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwcGVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlhcnkgPSB0aGlzLmRpYXJ5O1xuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlhcnkucHVzaChkYXRhW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdNb3JlSGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFyeSA9IGRpYXJ5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cbiJdfQ==