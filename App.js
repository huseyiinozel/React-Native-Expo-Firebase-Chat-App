import React,{useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FlashMessage from "react-native-flash-message";
import Login from "./src/pages/Login/Login";
import Chat from "./src/pages/Chat/Chat";
import 'react-native-gesture-handler';





const Stack = createStackNavigator();


const AuthStack = () => {
    return (
      <Stack.Navigator   screenOptions={{headerShown:false}}>
      <Stack.Screen name ="LoginPage" component={Login} />
      <Stack.Screen name ="ChatPage" component={Chat} />
      
    </Stack.Navigator>
    )
  }

  const MainStack = () => {
    return (
      <Stack.Navigator   screenOptions={{headerShown:false}}>
      <Stack.Screen name ="ChatPage" component={Chat} />
      
      
    </Stack.Navigator>
    )
  }


  


function App () {
 return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown:false}}></Stack.Screen>     
            <Stack.Screen name="MainStack" component={MainStack} options={{headerShown:false}}></Stack.Screen>
            </Stack.Navigator>
            <FlashMessage position="top" ></FlashMessage>
        </NavigationContainer>
       

    )
}

export default App;


