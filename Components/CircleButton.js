import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

const CircleButton = props => (
  <TouchableOpacity
    style={{
      margin: 10,
      height: props.size,
      width: props.size,
      backgroundColor: '#7986cb',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: props.size * 2,
    }}
    onPress={props.onPress}>
    <Text style={{color: 'white', fontSize: props.fontSize}}>{props.text}</Text>
  </TouchableOpacity>
);

export default CircleButton;
