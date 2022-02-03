import React from 'react';
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

export default function HomeScreen({navigation}) {
  const showMessage = () => Alert.alert('Button clicked !');

  return (
    <View>
      <Button title="Search" onPress={() => navigation.navigate('Search')} />
      <View style={styles.container}>
        <CircleButton text="28" size={150} onPress={showMessage} />
      </View>
      <Text style={{fontSize: 20, textAlign: 'center'}}>New Delhi, India</Text>
      <Text style={{fontSize: 15, textAlign: 'center'}}>
        Thursday, 3rd Feruary 2022
      </Text>
      <ScrollView horizontal={true}>
        <SmallCard text="09:00AM" onPress={showMessage} />
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
