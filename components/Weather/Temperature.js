import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { SFSymbol, SFSymbolWeight, SFSymbolScale } from 'react-native-sfsymbols';
import {View, StyleSheet, Button, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {getTemperature} from '../../store/actions/weatherAction';

const Temperature = ({weather}) => {

    useEffect(() => {
        //getTemperature(lat, lon);
    }, [])

    return (
        <View style = {styles.container}>
            {weather !== null && (
                <View style = {styles.temperatureView}>
                    <Image source = {{uri: `http://openweathermap.org/img/wn/${weather.weather.map((res) => (
                        res.icon
                    ))}@2x.png`}} style = {{width: 150, height: 150}} />
                    <Text style = {styles.cityName}>{`${weather.name}`}</Text>
                    <Text style = {styles.weatherType}>{
                        weather.weather.map((res) => (
                            `${res.main} / ${res.description}`
                        ))
                    }</Text>
                    <Text style = {styles.temperature}>{`${parseInt(weather.main.temp, 10)}°`}</Text>
                </View>
            )}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    temperatureView: {
        justifyContent: "center",
        alignItems: "center"
    },
    cityName: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
        //alignSelf: "center"
    },
    weatherType: {
        marginTop: 5,
        fontSize: 18,
        color: "gray"
    },
    temperature: {
        marginTop: 10,
        fontSize: 75,
        fontWeight: "bold",
        alignSelf: "center",
        paddingLeft: 5
    }
});

export default Temperature;