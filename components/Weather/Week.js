import React, {useEffect} from 'react';
import moment from 'moment';
import {View, StyleSheet, Button, ScrollView, Text, Image} from 'react-native';

const Week = ({weekendWeather}) => {

    // http://openweathermap.org/img/wn/10d@2x.png

    return (
        <View style = {styles.container}>
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
                {weekendWeather.map((item) => (
                    <View style = {styles.box}>
                        <Text style = {styles.infoText}>{`${moment.unix(item.dt).format("ddd")}`}</Text>
                        <Image source = {{uri: `http://openweathermap.org/img/wn/${item.weather.map((weatherRes) => (
                            weatherRes.icon
                        ))}@2x.png`}} style = {{width: 35, height: 35, alignSelf: "center", justifyContent: "center"}} />
                        <View style = {{flexDirection: "row", justifyContent: "center"}}>
                            <Text style = {{color: "gray"}}>{`${parseInt(item.temp.min)}°`}</Text>
                            <Text style = {{color: "gray", marginLeft: 5}}>{`${parseInt(item.temp.max)}°`}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginLeft: 10,
        marginRight: 10,
    },
    box: {
        width: 90,
        height: 90,
        borderRadius: 8,
        backgroundColor: "white",
        marginRight: 10,
        justifyContent: "space-evenly"
    },
    infoText: {
        textAlign: "center",
        justifyContent: "center"
    },
    hourText: {
        color: "gray"
    }
})

export default Week;