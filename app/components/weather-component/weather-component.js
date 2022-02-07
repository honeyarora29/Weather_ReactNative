// @flow

import React from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Searchbar} from 'react-native-paper';

type Props = {
  error: boolean,
  isLoading: boolean,
  weatherInfo: Object,
  fetchData: Function,
}

const getErrorMessage = () => (
  <Text style={styles.errorText}>
    An Error occured when fetching data
  </Text>
);

const getWeatherInfo = (weatherInfo,navigation) => {
  const { location, current } = weatherInfo;
  const info = current.temp_c
    ? current.temp_c
    : 'No Weather Info Available. Make sure you provided a valid API key in the `config.js` file.';

  return (
   <View style={styles.container}>
    <Text style={styles.weatherInfoText}>
      {info}
    </Text>
    </View>
  );
};

const WeatherComponent = (props: Props) => {
  const {
    isLoading,
    error,
    fetchData,
    weatherInfo,
    navigation
  } = props;
  const hasWeatherData = weatherInfo.location;
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query =>{
  setSearchQuery(query);
  fetchData(query);
  }
  return (
    <View style={styles.container}>
     <Searchbar
            placeholder="Enter the name of the city"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
      {isLoading ? <ActivityIndicator /> : null}
      {error ? getErrorMessage() : null}
      {hasWeatherData ? getWeatherInfo(weatherInfo,navigation) : null}

    </View>
  );
};

export default WeatherComponent;
