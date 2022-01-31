import React, {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import * as Permission from 'expo-permissions';
import Temperature from '../Weather/Temperature';
import Info from '../Weather/Info';
import Today from '../Weather/Today';
import Week from '../Weather/Week';
import {View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getTemperature, getTodayWeather, getWeekendWeather} from '../../store/actions/weatherAction';

const Home = ({getTemperature, getTodayWeather, getWeekendWeather, weather: {weather, todayWeather, weekendWeather}}) => {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [day, setDay] = useState("Today");

    const getLocation = async () => {
        let {status} = await Permission.askAsync(Permission.LOCATION);
        if (status !== "granted") {
            setErrorMessage("Permission to access location was denied");
        }
        let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest});
        const {latitude, longitude} = location.coords
        setLatitude(latitude);
        setLongitude(longitude);
    }

    useEffect(() => {
        getLocation();
        if (latitude !== null && longitude !== null) {
            getTemperature(latitude, longitude);
            getTodayWeather(latitude, longitude);
            getWeekendWeather(latitude, longitude);
        }
    }, [weather])

    return (
        weather && (
            <View style = {styles.container}>
            <ImageBackground source = {require("../../assets/full-background.jpg")} style = {styles.backgroundImage}>
                {latitude !== null && longitude !== null && (
                    <View style = {styles.weatherView}>
                        <View style = {{marginTop: 20}}>
                            {weather && (
                                <Temperature weather = {weather} />
                            )}
                        </View>
                        <View>
                            {weather && (
                                <Info weather = {weather} />
                            )}
                        </View>
                        <View style = {{justifyContent: "center", alignItems: "center"}}>
                            <View style = {{flexDirection: "row", paddingBottom: 30}}>
                                <TouchableOpacity onPress = {() => setDay("Today")}>
                                    <View style = {{flexDirection: "column", alignItems: "center"}}>
                                        <Text style = {[day === "Today" && {fontWeight: "bold"}, {fontSize: 17}]}>Today</Text>
                                        {day === "Today" && (<View style = {styles.circle} />)}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress = {() => setDay("Week")}>
                                    <View style = {{flexDirection: "column", alignItems: "center", marginLeft: 50}}>
                                        <Text style = {[day === "Week" && {fontWeight: "bold"}, {fontSize: 17}]}>Next 7 days</Text>
                                        {day === "Week" && (<View style = {styles.circle} />)}
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {day === "Today" ? (
                                todayWeather && (
                                    <Today todayWeather = {todayWeather} />
                                )
                            ) : (
                                weekendWeather && (
                                    <Week weekendWeather = {weekendWeather} />
                                )
                            )}
                        </View>
                    </View>
                )}
            </ImageBackground>
        </View>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        height: "100%",
        width: "100%",
        resizeMode: "cover",
    },
    weatherView: {
        flex: 1,
        justifyContent: "space-around"
    },
    circle: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: "#E5583D",
        marginTop: 5
    },
})

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps, {getTemperature, getTodayWeather, getWeekendWeather})(Home);