import {GET_WEATHER, GET_WEATHER_BY_CITY, GET_TEMPERATURE, GET_WEATHER_INFO, GET_TODAY_WEATHER, GET_WEEKEND_WEATHER, GET_TEMPERATURE_BY_CITY, SET_LOADING, SET_ALERT, REMOVE_ALERT, WEATHER_ERROR} from '../actions/types';

const initialState = {
    weather: null,
    coordinate: {
        lat: '',
        lon: ''
    },
    todayWeather: null,
    weekendWeather: null,
    currentWeather: null,
    alert: false,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_TEMPERATURE:
            return {
                ...state,
                weather: action.payload,
                loading: false,
                error: null
            }

        case GET_WEATHER_BY_CITY:
            return {
                ...state,
                coord: action.payload,
                loading: false,
                error: null
            }    

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
            
        case WEATHER_ERROR:
            console.log(`The error is: ${action.payload}`)
            return {
                ...state,
                error: action.payload,
                loading: false
            }
            
        case GET_TEMPERATURE_BY_CITY:
            return {
                ...state,
                weather: action.payload,
                loading: false,
                error: null
            }
            
        case GET_TODAY_WEATHER:
            return {
                ...state,
                todayWeather: action.payload,
                loading: false,
                error: null
            }
            
        case GET_WEEKEND_WEATHER:
            return {
                ...state,
                weekendWeather: action.payload,
                loading: false,
                error: null
            }
            
        case SET_ALERT:
            return {
                ...state,
                alert: true
            }
            
        case REMOVE_ALERT:
            return {
                ...state,
                alert: false
            }    

        default:
            return state
    }
}