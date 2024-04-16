import React, { useState } from "react";
import { Text, View, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar } from "react-native";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import styles from './Login.style';



const backImage = require("../../assets/backImage.png");

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const handleLogin = (navigation,email) => {
  if (!isValidEmail(email)) {
    showMessage({
      message: "Invalid Email",
      description: "Please enter a valid email address.",
      type: "danger",
    });
    return;
  }
  AsyncStorage.setItem('userEmail', email)
    .then(() => {
      console.log('Email saved successfully');
      navigation.navigate('ChatPage');
    })
    .catch((error) => {
      console.error('Error saving email:', error);
      showMessage({
        message: "Error",
        description: "An error occurred while saving email.",
        type: "danger",
      });
    });
};





const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleLogin(navigation,email)}>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

export default Login;
