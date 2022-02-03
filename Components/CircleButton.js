import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

const CircleButton = props => (
  <TouchableOpacity
    style={{
      margin: 10,
      height: 150,
      width: 150,
      backgroundColor: '#7986cb',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 150 * 2,
    }}
    onPress={props.onPress}>
    <Text style={{color: 'white', fontSize: 20}}>{props.buttonHeading}</Text>
    <Text style={{color: 'white', fontSize: 28}}>{props.text}</Text>
  </TouchableOpacity>
);

export default CircleButton;
