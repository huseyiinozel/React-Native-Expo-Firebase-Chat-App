import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from './MessageCard.style'

const MessageCard = ({name,message,date} ) => {
  return (
    <View style={styles.container}>
    <Text style={styles.messageOwner}>{name}</Text>
      <Text style={styles.messageText}>{message}</Text>
      <Text style={styles.timestampText}>
      {date.toDate().toLocaleString()}
      </Text>
    </View>
  );
};



export default MessageCard;
