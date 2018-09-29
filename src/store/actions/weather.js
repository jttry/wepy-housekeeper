import {GET_WEATHER} from '../types/weather';
import {createAction} from 'redux-actions';
import wepy from 'wepy';

export const getWeather = createAction(GET_WEATHER, async city => {
    const url = "https://free-api.heweather.com/v5/weather";
    return await wepy.request(`${url}?city=${city}&key=4a555d4d1adc451d8ceeaa73869c9519`);
});