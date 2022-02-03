import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';
import History from './Screens/History';
import {Provider} from 'react-redux';
import {store} from './store/Store';

const Stack = createNativeStackNavigator();

function App() {
  return (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WeatherApp">
        <Stack.Screen name="WeatherApp" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );

}


export default App;
