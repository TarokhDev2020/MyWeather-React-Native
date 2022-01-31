import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {View, StyleSheet, Text} from 'react-native';

const Info = ({weather}) => {
    return (
        weather && (<View style = {styles.container}>
            <View style = {styles.box}>
                <View style = {{justifyContent: "space-between", alignItems: "center", flex: 1, marginTop: 5, marginBottom: 5}}>
                    <Icon name = "weather-sunset-up" color = "#E5583D" size = {35} />
                    <Text style = {styles.infoText}>Sunrise</Text>
                    <Text style = {styles.hourText}>{`${moment.unix(weather.sys.sunrise).format("hh:mma")}`}</Text>
                </View>
            </View>
            <View style = {styles.box}>
                <View style = {{justifyContent: "space-between", alignItems: "center", flex: 1, marginTop: 5, marginBottom: 5}}>
                    <Icon name = "weather-sunset-down" color = "#E5583D" size = {35} />
                    <Text style = {styles.infoText}>Sunset</Text>
                    <Text style = {styles.hourText}>{`${moment.unix(weather.sys.sunset).format("hh:mma")}`}</Text>
                </View>
            </View>
            <View style = {styles.box}>
                <View style = {{justifyContent: "space-between", alignItems: "center", flex: 1, marginTop: 5, marginBottom: 5}}>
                    <Icon name = "weather-windy" color = "#E5583D" size = {35} />
                    <Text style = {styles.infoText}>Wind</Text>
                    <Text style = {styles.hourText}>{`${weather.wind.speed}m/s`}</Text>
                </View>
            </View>
            <View style = {styles.box}>
                <View style = {{justifyContent: "space-between", alignItems: "center", flex: 1, marginTop: 5, marginBottom: 5}}>
                    <Icon name = "water-outline" color = "#E5583D" size = {35} />
                    <Text style = {styles.infoText}>Humidity</Text>
                    <Text style = {styles.hourText}>{`${weather.main.humidity}%`}</Text>
                </View>
            </View>
        </View>)
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 10
    },
    box: {
        width: 90,
        height: 90,
        borderRadius: 8,
        backgroundColor: "white",
        marginRight: 10
    },
    infoText: {
        fontWeight: "bold"
    },
    hourText: {
        color: "gray"
    }
})

export default Info;