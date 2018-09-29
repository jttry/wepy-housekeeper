'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getWeather = undefined;

var _weather = require('./../types/weather.js');

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getWeather = exports.getWeather = (0, _reduxActions.createAction)(_weather.GET_WEATHER, function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(city) {
        var url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        url = "https://free-api.heweather.com/v5/weather";
                        _context.next = 3;
                        return _wepy2.default.request(url + '?city=' + city + '&key=4a555d4d1adc451d8ceeaa73869c9519');

                    case 3:
                        return _context.abrupt('return', _context.sent);

                    case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIuanMiXSwibmFtZXMiOlsiZ2V0V2VhdGhlciIsIkdFVF9XRUFUSEVSIiwiY2l0eSIsInVybCIsIndlcHkiLCJyZXF1ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRU8sSUFBTUEsa0NBQWEsZ0NBQWFDLG9CQUFiO0FBQUEsdUVBQTBCLGlCQUFNQyxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQ0MsMkJBRDBDLEdBQ3BDLDJDQURvQztBQUFBO0FBQUEsK0JBRW5DQyxlQUFLQyxPQUFMLENBQWdCRixHQUFoQixjQUE0QkQsSUFBNUIsMkNBRm1DOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbkIiLCJmaWxlIjoid2VhdGhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R0VUX1dFQVRIRVJ9IGZyb20gJy4uL3R5cGVzL3dlYXRoZXInO1xuaW1wb3J0IHtjcmVhdGVBY3Rpb259IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBjb25zdCBnZXRXZWF0aGVyID0gY3JlYXRlQWN0aW9uKEdFVF9XRUFUSEVSLCBhc3luYyBjaXR5ID0+IHtcbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vZnJlZS1hcGkuaGV3ZWF0aGVyLmNvbS92NS93ZWF0aGVyXCI7XG4gICAgcmV0dXJuIGF3YWl0IHdlcHkucmVxdWVzdChgJHt1cmx9P2NpdHk9JHtjaXR5fSZrZXk9NGE1NTVkNGQxYWRjNDUxZDhjZWVhYTczODY5Yzk1MTlgKTtcbn0pOyJdfQ==