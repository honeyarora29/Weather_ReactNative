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
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {Searchbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import fetchApiCall from '../store/weatherData';
import {connect} from 'react-redux'


export default function HomeScreen({navigation}) {
  const showMessage = () => Alert.alert('Button clicked !');
 const [searchQuery, setSearchQuery] = React.useState('London');
  const onChangeSearch = query => setSearchQuery(query);
  const dispatch = useDispatch();
  const value = useSelector((state) => state.apiReducer.data);
  useEffect(() => {
    dispatch(fetchApiCall(searchQuery));
  }, [searchQuery]);


  return (
    <View>
      <Searchbar
        placeholder="Enter the name of the city"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Button title="History" onPress={showMessage} />
      <View style={styles.container}>
        <CircleButton text={value.current.temp_c} buttonHeading={value.current.conditiontext} />
      </View>
 <Button title="History" onPress={() => {navigation.navigate('History',{cityName: value.location.name})} }/>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 30,
        }}>
        {value.location.name}
      </Text>
      <Text
        style={{
          fontSize: 15,
          textAlign: 'center',
          fontWeight: '400',
          fontSize: 20,
        }}>
        {value.location.localtime}
      </Text>

      <ScrollView horizontal={true}>
        <SmallCard text={value.current.wind_mph} cardHeading="Wind (mph)" />
        <SmallCard text={value.current.wind_kph} cardHeading="Wind (kph)" />
        <SmallCard text={value.current.pressure_mb} cardHeading="Pressure (mb)" />
        <SmallCard text={value.current.pressure_in} cardHeading="Pressure (in)" />
        <SmallCard text={value.current.precip_mm} cardHeading="Precipitation (mm)" />
        <SmallCard text={value.current.precip_in} cardHeading="Precipitation (in)" />
        <SmallCard text={value.current.humidity} cardHeading="Humidity" />
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