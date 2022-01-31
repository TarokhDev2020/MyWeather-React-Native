import React, {useState} from 'react';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import {Alert} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {setAlert, getTemperatureByCity, getWeatherByCity} from '../../store/actions/weatherAction';

const Stack = createStackNavigator();

const HomeStackNavigator = ({getTemperatureByCity, getWeatherByCity, weather: {weather, coordinate}}) => {

    const {lat, lon} = coordinate;

    return (
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {Home} options = {{
                title: "My Weather",
                headerStyle: {
                    borderBottomWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: "transparent",
                },
            }} />
        </Stack.Navigator>
    )
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps, {setAlert, getTemperatureByCity, getWeatherByCity})(HomeStackNavigator);