'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/add', 'pages/diary', 'pages/payment', 'pages/camera', 'pages/index-bak'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        "color": "#6e6d6b",
        "selectedColor": "#e64340",
        "borderStyle": "white",
        "backgroundColor": "#fff",
        "box-shadow": "0 0 6px 0",
        "list": [{
          "pagePath": "pages/index",
          "iconPath": "images/nav/home-off.png",
          "selectedIconPath": "images/nav/home-on.png",
          "text": "首页"
        }, {
          "pagePath": "pages/add",
          "iconPath": "images/nav/add-off.png",
          "selectedIconPath": "images/nav/add-on.png",
          "text": "新增"
        }, {
          "pagePath": "pages/index",
          "iconPath": "images/nav/my-off.png",
          "selectedIconPath": "images/nav/my-on.png",
          "text": "我的"
        }]
      }
    };
    _this.globalData = {
      userInfo: null,
      apiHost: "https://www.easy-mock.com/mock/5ba456cf1c36477dbaa3cccb",
      version: "1.0.0",
      shareProfile: '你的个人生活管家'
    };

    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.getUserInfo();
    }
  }, {
    key: 'getUserInfo',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cb) {
        var login, res, userInfo;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.globalData.userInfo) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', this.globalData.userInfo);

              case 2:
                _context.next = 4;
                return _wepy2.default.login();

              case 4:
                login = _context.sent;
                _context.next = 7;
                return _wepy2.default.getUserInfo();

              case 7:
                res = _context.sent;
                userInfo = _extends({}, login, res.userInfo);

                this.globalData.userInfo = userInfo;
                cb && cb(userInfo);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserInfo(_x) {
        return _ref.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInRhYkJhciIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImFwaUhvc3QiLCJ2ZXJzaW9uIiwic2hhcmVQcm9maWxlIiwidXNlIiwiZ2V0VXNlckluZm8iLCJjYiIsIndlcHkiLCJsb2dpbiIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsc0JBQWQ7QUFDQSx5QkFBU0EsS0FBVDs7Ozs7QUFtREUsc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQWhEZkMsTUFnRGUsR0FoRE47QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxXQUZLLEVBR0wsYUFISyxFQUlMLGVBSkssRUFLTCxjQUxLLEVBTUwsaUJBTkssQ0FEQTtBQVNQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BVEQ7QUFlUEMsY0FBUTtBQUNOLGlCQUFTLFNBREg7QUFFTix5QkFBaUIsU0FGWDtBQUdOLHVCQUFlLE9BSFQ7QUFJTiwyQkFBbUIsTUFKYjtBQUtOLHNCQUFhLFdBTFA7QUFNTixnQkFBUSxDQUFDO0FBQ1Qsc0JBQVksYUFESDtBQUVQLHNCQUFZLHlCQUZMO0FBR1AsOEJBQW9CLHdCQUhiO0FBSVAsa0JBQVE7QUFKRCxTQUFELEVBS0w7QUFDRCxzQkFBWSxXQURYO0FBRUQsc0JBQVksd0JBRlg7QUFHRCw4QkFBb0IsdUJBSG5CO0FBSUQsa0JBQVE7QUFKUCxTQUxLLEVBV1I7QUFDRSxzQkFBWSxhQURkO0FBRUUsc0JBQVksdUJBRmQ7QUFHRSw4QkFBb0Isc0JBSHRCO0FBSUUsa0JBQVE7QUFKVixTQVhRO0FBTkY7QUFmRCxLQWdETTtBQUFBLFVBUGZDLFVBT2UsR0FQRjtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGVBQVMseURBRkU7QUFHWEMsZUFBUyxPQUhFO0FBSVhDLG9CQUFjO0FBSkgsS0FPRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsV0FBVDtBQUZhO0FBR2Q7Ozs7K0JBRVU7QUFDVCxXQUFLQyxXQUFMO0FBQ0Q7Ozs7MEZBRWlCQyxFOzs7Ozs7cUJBQ1osS0FBS1AsVUFBTCxDQUFnQkMsUTs7Ozs7aURBQ1gsS0FBS0QsVUFBTCxDQUFnQkMsUTs7Ozt1QkFFTE8sZUFBS0MsS0FBTCxFOzs7QUFBZEEscUI7O3VCQUNZRCxlQUFLRixXQUFMLEU7OztBQUFaSSxtQjtBQUNBVCx3QixnQkFBZVEsSyxFQUFVQyxJQUFJVCxROztBQUNuQyxxQkFBS0QsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJBLFFBQTNCO0FBQ0FNLHNCQUFNQSxHQUFHTixRQUFILENBQU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFsRXlCTyxlQUFLRyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuaW1wb3J0IHsgc2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0IGNvbmZpZ1N0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmNvbnN0IHN0b3JlID0gY29uZmlnU3RvcmUoKVxuc2V0U3RvcmUoc3RvcmUpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAncGFnZXMvYWRkJyxcbiAgICAgICdwYWdlcy9kaWFyeScsXG4gICAgICAncGFnZXMvcGF5bWVudCcsXG4gICAgICAncGFnZXMvY2FtZXJhJyxcbiAgICAgICdwYWdlcy9pbmRleC1iYWsnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9LFxuICAgIHRhYkJhcjoge1xuICAgICAgXCJjb2xvclwiOiBcIiM2ZTZkNmJcIixcbiAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiNlNjQzNDBcIixcbiAgICAgIFwiYm9yZGVyU3R5bGVcIjogXCJ3aGl0ZVwiLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmXCIsXG4gICAgICBcImJveC1zaGFkb3dcIjpcIjAgMCA2cHggMFwiLFxuICAgICAgXCJsaXN0XCI6IFt7XG4gICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvaW5kZXhcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlcy9uYXYvaG9tZS1vZmYucG5nXCIsXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9uYXYvaG9tZS1vbi5wbmdcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi6aaW6aG1XCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2FkZFwiLFxuICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL25hdi9hZGQtb2ZmLnBuZ1wiLFxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvbmF2L2FkZC1vbi5wbmdcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5paw5aKeXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9pbmRleFwiLFxuICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL25hdi9teS1vZmYucG5nXCIsXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9uYXYvbXktb24ucG5nXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIuaIkeeahFwiXG4gICAgICB9XVxuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGwsXG4gICAgYXBpSG9zdDogXCJodHRwczovL3d3dy5lYXN5LW1vY2suY29tL21vY2svNWJhNDU2Y2YxYzM2NDc3ZGJhYTNjY2NiXCIsXG4gICAgdmVyc2lvbjogXCIxLjAuMFwiLFxuICAgIHNoYXJlUHJvZmlsZTogJ+S9oOeahOS4quS6uueUn+a0u+euoeWutidcbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXG4gIH1cblxuICBvbkxhdW5jaCgpIHtcbiAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gIH1cblxuICBhc3luYyBnZXRVc2VySW5mbyhjYikge1xuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm87XG4gICAgfVxuICAgIGNvbnN0IGxvZ2luID0gYXdhaXQgd2VweS5sb2dpbigpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKTtcbiAgICBjb25zdCB1c2VySW5mbyA9IHsuLi5sb2dpbiwgLi4ucmVzLnVzZXJJbmZvfTtcbiAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSB1c2VySW5mbztcbiAgICBjYiAmJiBjYih1c2VySW5mbyk7XG4gIH1cbn1cbiJdfQ==