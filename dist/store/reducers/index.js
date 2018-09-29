'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('./../../npm/redux/lib/index.js');

var _counter = require('./counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _weather = require('./weather.js');

var _weather2 = _interopRequireDefault(_weather);

var _user = require('./user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  counter: _counter2.default,
  weather: _weather2.default,
  user: _user2.default
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvdW50ZXIiLCJ3ZWF0aGVyIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBR2UsNEJBQWdCO0FBQzdCQSw0QkFENkI7QUFFN0JDLDRCQUY2QjtBQUc3QkM7QUFINkIsQ0FBaEIsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBjb3VudGVyIGZyb20gJy4vY291bnRlcic7XG5pbXBvcnQgd2VhdGhlciBmcm9tICcuL3dlYXRoZXInO1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBjb3VudGVyLFxuICB3ZWF0aGVyLFxuICB1c2VyXG59KSJdfQ==