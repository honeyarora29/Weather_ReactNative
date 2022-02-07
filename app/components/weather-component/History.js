import React,{useEffect,useState} from 'react';
import {View, Text,ScrollView} from 'react-native';
import {Searchbar} from 'react-native-paper';
import EncryptedStorage from 'react-native-encrypted-storage';


async function storeUserSession() {
    try {
        await EncryptedStorage.setItem(
            "London",
            JSON.stringify({
                temp_c : 29,
                temp_f : 85,
                 localtime:'3-feb-2020',
                                  "wind_mph": 25,
                                  "wind_kph": 30,

            })
        );

        // Congrats! You've just stored your first value!
    } catch (error) {
        // There was an error on the native side
    }
}

const day = (city)=>{
const [dayOfMonth, setDayOfMonth] = useState('')

useEffect(() => {

async function retrieveUserSession() {
    try {

        const session = await EncryptedStorage.getItem(city);

        if (session !== undefined) {
            // Congrats! You've just retrieved your first value!
           // console.log(session)
         setDayOfMonth(JSON.parse(session));
        }
    } catch (error) {
        // There was an error on the native side
    }
}
retrieveUserSession()},[dayOfMonth])

return dayOfMonth;
}

function History({route, navigation }) {
const { cityName } = route.params;
console.log(day(cityName))
const value = day(cityName);
  return (
  <View>
   <Text style={{fontSize: 15, textAlign: 'center'}}>
  {value}
   </Text>
      </View>
  );
}

export default History;
