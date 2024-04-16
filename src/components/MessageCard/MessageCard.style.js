import { StyleSheet,Platform,Dimensions } from "react-native"

export default StyleSheet.create ({
  
    container: {
        backgroundColor: "white",
        padding: 10,
        marginVertical: 5,
        borderRadius: 30,
      },
      messageText: {
        fontSize: 16,
        fontWeight: "bold",
        color:'black'
      },
      timestampText: {
        fontSize: 12,
        color: "#888",
      },
      messageOwner: {
        fontSize:12,
        color:'green'
      }
   
})