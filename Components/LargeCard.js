import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

const LargeCard = props => (
  <TouchableOpacity
    style={{
      margin: 10,
      height: 150,
      width: 100,
      backgroundColor: '#7986cb',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
    }}
    onPress={props.onPress}>
    <Text style={{color: 'white', fontSize: 10}}>{props.text}</Text>
  </TouchableOpacity>
);

export default LargeCard;
