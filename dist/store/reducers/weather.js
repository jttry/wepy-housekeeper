'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _weather = require('./../types/weather.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, _weather.GET_WEATHER, function (state, action) {
    var data = action.payload.data.HeWeather5[0];
    var weather = data.now;
    var weatherQuality = data.aqi;
    return _extends({}, state, {
        weather: weather,
        weatherQuality: weatherQuality
    });
}), {
    weather: {},
    weatherQuality: {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIuanMiXSwibmFtZXMiOlsiR0VUX1dFQVRIRVIiLCJzdGF0ZSIsImFjdGlvbiIsImRhdGEiLCJwYXlsb2FkIiwiSGVXZWF0aGVyNSIsIndlYXRoZXIiLCJub3ciLCJ3ZWF0aGVyUXVhbGl0eSIsImFxaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztrQkFFZSxxREFDVkEsb0JBRFUsWUFDSUMsS0FESixFQUNXQyxNQURYLEVBQ21CO0FBQzFCLFFBQU1DLE9BQU9ELE9BQU9FLE9BQVAsQ0FBZUQsSUFBZixDQUFvQkUsVUFBcEIsQ0FBK0IsQ0FBL0IsQ0FBYjtBQUNBLFFBQU1DLFVBQVVILEtBQUtJLEdBQXJCO0FBQ0EsUUFBTUMsaUJBQWlCTCxLQUFLTSxHQUE1QjtBQUNBLHdCQUNPUixLQURQO0FBRUlLLHdCQUZKO0FBR0lFO0FBSEo7QUFLSCxDQVZVLEdBV1o7QUFDQ0YsYUFBUyxFQURWO0FBRUNFLG9CQUFnQjtBQUZqQixDQVhZLEMiLCJmaWxlIjoid2VhdGhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aGFuZGxlQWN0aW9uc30gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQge0dFVF9XRUFUSEVSfSBmcm9tICcuLi90eXBlcy93ZWF0aGVyJztcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XG4gICAgW0dFVF9XRUFUSEVSXSAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YS5IZVdlYXRoZXI1WzBdO1xuICAgICAgICBjb25zdCB3ZWF0aGVyID0gZGF0YS5ub3c7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJRdWFsaXR5ID0gZGF0YS5hcWk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHdlYXRoZXIsXG4gICAgICAgICAgICB3ZWF0aGVyUXVhbGl0eVxuICAgICAgICB9XG4gICAgfVxufSwge1xuICAgIHdlYXRoZXI6IHt9LFxuICAgIHdlYXRoZXJRdWFsaXR5OiB7fVxufSk7Il19