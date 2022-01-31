import React from 'react';
import store from './store/store';
import HomeStackNavigator from './components/routes/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';


const App = () => {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <View style = {{flex: 1}}>
          <HomeStackNavigator />
        </View>
      </NavigationContainer>
    </Provider>
  )
};

export default App;