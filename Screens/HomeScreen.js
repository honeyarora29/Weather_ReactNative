import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button,
} from 'react-native';
import CircleButton from '../Components/CircleButton';
import SmallCard from '../Components/SmallCard';
import LargeCard from '../Components/LargeCard';
import type {Node} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import config from '../config.js';
import {useDispatch, useSelector} from 'react-redux';
import fetchApiCall from '../store/weatherData';


async function storeUserSession() {
    try {
        await EncryptedStorage.setItem(
            "user_session",
            JSON.stringify({
                age : 29,
                token : "ACCESS_TOKEN",
                username : "emeraldsanto",
                languages : ["fr", "en", "de"]
            })
        );

        // Congrats! You've just stored your first value!
    } catch (error) {
        // There was an error on the native side
    }
}

const day = ()=>{
const [dayOfMonth, setDayOfMonth] = useState('')
useEffect(() => {
async function retrieveUserSession() {

    try {
        const session = await EncryptedStorage.getItem("user_session");

        if (session !== undefined) {
            // Congrats! You've just retrieved your first value!
         setDayOfMonth(JSON.parse(session).age);
        }
    } catch (error) {
        // There was an error on the native side
    }
}
retrieveUserSession()},[dayOfMonth])

return dayOfMonth;
}

export default function HomeScreen({navigation}) {
  const showMessage = () => Alert.alert('Button clicked !');

  const value = day();

  const dispatch = useDispatch();
    const location = useSelector((state) => state.apiReducer.data);
    const loading = useSelector((state) => state.apiReducer.loading);

    useEffect(() => {
      dispatch(fetchApiCall());
    }, []);

  return (
    <View>
      <Button title="Search" onPress={() => navigation.navigate('Search')} />
      <View style={styles.container}>
        <CircleButton text={value} size={150} fontSize={28} onPress={showMessage} />
      </View>
  <Text style={{fontSize: 20,textAlign: 'center'}}>{location.location.name}</Text>
      <CircleButton text="History" size={50} fontSize={10} onPress={() => navigation.navigate('History')} />

      <Text style={{fontSize: 15, textAlign: 'center'}}>
       {location.location.localtime}
      </Text>
      <ScrollView horizontal={true}>
        <SmallCard text="09:00AM" onPress={fetchApiCall} />
        <SmallCard text="10:00AM" onPress={showMessage} />
        <SmallCard text="11:00AM" onPress={showMessage} />
        <SmallCard text="12:00AM" onPress={showMessage} />
        <SmallCard text="01:00AM" onPress={showMessage} />
        <SmallCard text="02:00AM" onPress={showMessage} />
        <SmallCard text="03:00AM" onPress={showMessage} />
      </ScrollView>
      <ScrollView horizontal={true}>
        <LargeCard text="09:00AM" onPress={showMessage} />
        <LargeCard text="10:00AM" onPress={showMessage} />
        <LargeCard text="11:00AM" onPress={showMessage} />
        <LargeCard text="12:00AM" onPress={showMessage} />
        <LargeCard text="01:00AM" onPress={showMessage} />
        <LargeCard text="02:00AM" onPress={showMessage} />
        <LargeCard text="03:00AM" onPress={showMessage} />
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
