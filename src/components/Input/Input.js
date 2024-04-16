import React from "react";
import {View,TextInput} from 'react-native'
import styles from './input.style'


const Input = ({placeholder,value,onChangeText}) => {
    return (
        <View style={styles.contaier} >
            <TextInput style={styles.input} value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor="black" />
            
        </View>
    )
}

export default Input;