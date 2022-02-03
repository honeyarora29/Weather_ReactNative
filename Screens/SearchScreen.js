import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {Searchbar} from 'react-native-paper';
import EncryptedStorage from 'react-native-encrypted-storage';
import config from '../config.js';
import axios from 'axios';
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

function SearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const res = fetchApiCall(searchQuery);
  return (
    <View>
      <Searchbar
        placeholder="Enter the name of the city"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 30,
        }}>
        {res.name}
      </Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 30,
        }}>
        {res.temp_c}
      </Text>
    </View>
  );
}

export default SearchScreen;
