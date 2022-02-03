import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import CircleButton from '../Components/CircleButton';
import SmallCard from '../Components/SmallCard';
import type {Node} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import config from '../config.js';
import axios from 'axios';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {Searchbar} from 'react-native-paper';

const fetchApiCall = searchQuery => {
  const [weather, setWeather] = useState('');
  axios({
    method: 'GET',
    url:
      config.API_URL +
      '/current.json?key=' +
      config.API_KEY +
      '&q=' +
      searchQuery +
      '&aqi=yes',
  })
    .then(response => {
      const details = {
        conditiontext: response.data.current.condition.text,
        name: response.data.location.name,
        temp_c: response.data.current.temp_c,
        localtime: response.data.location.localtime,
        temp_f: response.data.current.temp_f,
        wind_mph: response.data.current.wind_mph,
        wind_kph: response.data.current.wind_kph,
        pressure_mb: response.data.current.pressure_mb,
        pressure_in: response.data.current.pressure_in,
        precip_mm: response.data.current.precip_mm,
        precip_in: response.data.current.precip_in,
        humidity: response.data.current.humidity,
      };
      setWeather(details);
    })
    .catch(error => {
      console.log(error);
    });
  return weather;
};

async function storeUserSession() {
  try {
    await EncryptedStorage.setItem(
      'user_session',
      JSON.stringify({
        age: 29,
        token: 'ACCESS_TOKEN',
        username: 'emeraldsanto',
        languages: ['fr', 'en', 'de'],
      }),
    );

    // Congrats! You've just stored your first value!
  } catch (error) {
    // There was an error on the native side
  }
}

const day = () => {
  const [dayOfMonth, setDayOfMonth] = useState('');
  useEffect(() => {
    async function retrieveUserSession() {
      try {
        const session = await EncryptedStorage.getItem('user_session');

        if (session !== undefined) {
          // Congrats! You've just retrieved your first value!
          setDayOfMonth(JSON.parse(session).age);
        }
      } catch (error) {
        // There was an error on the native side
      }
    }
    retrieveUserSession();
  }, [dayOfMonth]);

  return dayOfMonth;
};

export default function HomeScreen({navigation}) {
  const showMessage = () => Alert.alert('Button clicked !');
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const value = fetchApiCall(searchQuery);

  return (
    <View>
      <Searchbar
        placeholder="Enter the name of the city"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Button title="History" onPress={showMessage} />
      <View style={styles.container}>
        <CircleButton text={value.temp_c} buttonHeading={value.conditiontext} />
      </View>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 30,
        }}>
        {value.name}
      </Text>
      <Text
        style={{
          fontSize: 15,
          textAlign: 'center',
          fontWeight: '400',
          fontSize: 20,
        }}>
        {value.localtime}
      </Text>

      <ScrollView horizontal={true}>
        <SmallCard text={value.wind_mph} cardHeading="Wind (mph)" />
        <SmallCard text={value.wind_kph} cardHeading="Wind (kph)" />
        <SmallCard text={value.pressure_mb} cardHeading="Pressure (mb)" />
        <SmallCard text={value.pressure_in} cardHeading="Pressure (in)" />
        <SmallCard text={value.precip_mm} cardHeading="Precipitation (mm)" />
        <SmallCard text={value.precip_in} cardHeading="Precipitation (in)" />
        <SmallCard text={value.humidity} cardHeading="Humidity" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    marginBottom: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
