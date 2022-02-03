import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

const SmallCard = props => (
  <TouchableOpacity
    style={{
      margin: 10,
      height: 200,
      width: 100,
      backgroundColor: '#7986cb',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
    }}
    onPress={props.onPress}>
    <Text style={{color: 'white', fontSize: 12}}>{props.cardHeading}</Text>
    <Text style={{color: 'white', fontSize: 20, fontWeight: '900'}}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default SmallCard;
