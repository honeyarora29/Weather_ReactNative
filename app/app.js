import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import History from './components/weather-component/History';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import WeatherContainer from './containers/weather-container/weather-container';

const Stack = createNativeStackNavigator();
const store = configureStore({});

function App() {
  return (
  <Provider store={store}>
  <NavigationContainer>
        <Stack.Navigator initialRouteName="WeatherApp">
          <Stack.Screen name="WeatherApp" component={WeatherContainer} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

}


export default App;
