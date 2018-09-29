'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOpenId = undefined;

var _user = require('./../types/user.js');

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getOpenId = exports.getOpenId = (0, _reduxActions.createAction)(_user.GET_OPENID, function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(openid) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt('return', openid);

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiZ2V0T3BlbklkIiwiR0VUX09QRU5JRCIsIm9wZW5pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVPLElBQU1BLGdDQUFZLGdDQUFhQyxnQkFBYjtBQUFBLHVFQUF5QixpQkFBTUMsTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBQ3ZDQSxNQUR1Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFsQiIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHRVRfT1BFTklEfSBmcm9tICcuLi90eXBlcy91c2VyJztcbmltcG9ydCB7Y3JlYXRlQWN0aW9ufSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgY29uc3QgZ2V0T3BlbklkID0gY3JlYXRlQWN0aW9uKEdFVF9PUEVOSUQsIGFzeW5jIG9wZW5pZCA9PiB7XG4gICAgcmV0dXJuIG9wZW5pZDtcbn0pOyJdfQ==