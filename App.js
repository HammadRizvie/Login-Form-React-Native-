import React from "react";
import { View  , Text} from "react-native";
import MyStack from './src/config/Navigation'
export default function App(){
  return(
    <View style={{flex:1}} >
      <MyStack />
    </View>
  )
}