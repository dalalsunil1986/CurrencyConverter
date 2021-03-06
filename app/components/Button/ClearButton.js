/* eslint-disable global-require */
import React from 'react';
import {
  Text, TouchableOpacity, Image, View,
} from 'react-native';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default ClearButton;
