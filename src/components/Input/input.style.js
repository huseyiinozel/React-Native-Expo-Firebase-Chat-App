import { StyleSheet,Platform } from "react-native"
export default StyleSheet.create ({
    contaier:{
        padding:3,
        margin :10,
        backgroundColor: 'whitesmoke',
        borderRadius:20,
        flexDirection:'row',
        height:50
    },
    input:{
        flex:1,
        padding:Platform.OS === 'android' ? 0 : 5,
        
        
    }
})