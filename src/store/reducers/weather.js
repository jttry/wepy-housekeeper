import {handleActions} from 'redux-actions';
import {GET_WEATHER} from '../types/weather';

export default handleActions({
    [GET_WEATHER] (state, action) {
        const data = action.payload.data.HeWeather5[0];
        const weather = data.now;
        const weatherQuality = data.aqi;
        return {
            ...state,
            weather,
            weatherQuality
        }
    }
}, {
    weather: {},
    weatherQuality: {}
});