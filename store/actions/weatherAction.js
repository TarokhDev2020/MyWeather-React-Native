import {GET_WEATHER, GET_TEMPERATURE, GET_WEATHER_INFO, GET_WEATHER_BY_CITY, GET_TODAY_WEATHER, GET_WEEKEND_WEATHER, GET_TEMPERATURE_BY_CITY, GET_TODAY_WEATHER_BY_CITY, SET_LOADING, SET_ALERT, REMOVE_ALERT, WEATHER_ERROR} from './types';
import axios from 'axios';

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};

export const getTemperature = (lat, lon) => async dispatch => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=[YOUR_APP_ID_HERE]&units=metric`);
        const data = await response.data
        dispatch({
            type: GET_TEMPERATURE,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: WEATHER_ERROR,
            payload: error
        })
    }
};

export const getWeatherByCity = (cityName) => async dispatch => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=[YOUR_APP_ID_HERE]`);
        const data = await response.data;
        const coord = data.coord;
        dispatch({
            type: GET_WEATHER_BY_CITY,
            payload: coord
        })
    }
    catch (error) {

    }
}

export const getTemperatureByCity = (q) => async dispatch => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=[YOUR_APP_ID_HERE]&units=metric`);
        const data = await response.data
        dispatch({
            type: GET_TEMPERATURE_BY_CITY,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: WEATHER_ERROR,
            payload: error
        })
    }
};

export const getTodayWeather = (lat, lon) => async dispatch => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=[YOUR_APP_ID_HERE]&units=metric`);
        const data = await response.data;
        const hourly = data.hourly;
        dispatch({
            type: GET_TODAY_WEATHER,
            payload: hourly
        })
    }
    catch (error) {
        dispatch({
            type: WEATHER_ERROR,
            payload: error
        })
    }
};

export const getTodayWeatherByCity = (lat, lon) => async dispatch => {

}

export const getWeekendWeather = (lat, lon) => async dispatch => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=[YOUR_APP_ID_HERE]&units=metric`);
        const data = await response.data;
        const daily = data.daily;
        dispatch({
            type: GET_WEEKEND_WEATHER,
            payload: daily
        })
    }
    catch (error) {
        dispatch({
            type: GET_WEEKEND_WEATHER,
            payload: error
        })
    }
};

export const setAlert = () => {
    return {
        type: SET_ALERT
    }
};

export const removeAlert = () => {
    return {
        type: REMOVE_ALERT
    }
}