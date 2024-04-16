import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './Button.style'
const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};



export default Button;
