'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _user = require('./../types/user.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, _user.GET_OPENID, function (state, action) {
    var openid = action.payload;
    return _extends({}, state, {
        openid: openid
    });
}), {
    openid: ''
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiR0VUX09QRU5JRCIsInN0YXRlIiwiYWN0aW9uIiwib3BlbmlkIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztrQkFFZSxxREFDVkEsZ0JBRFUsWUFDR0MsS0FESCxFQUNVQyxNQURWLEVBQ2tCO0FBQ3pCLFFBQU1DLFNBQVNELE9BQU9FLE9BQXRCO0FBQ0Esd0JBQ09ILEtBRFA7QUFFSUU7QUFGSjtBQUlILENBUFUsR0FRWjtBQUNDQSxZQUFRO0FBRFQsQ0FSWSxDIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2hhbmRsZUFjdGlvbnN9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0IHtHRVRfT1BFTklEfSBmcm9tICcuLi90eXBlcy91c2VyJztcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XG4gICAgW0dFVF9PUEVOSURdIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IG9wZW5pZCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBvcGVuaWRcbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICBvcGVuaWQ6ICcnXG59KTsiXX0=