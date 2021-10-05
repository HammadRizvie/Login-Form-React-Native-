import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../../components/WelcomeScreen'
import Login from '../../components/Login';
import Register from '../../components/Register';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={
        {
            headerShown:false
        }
    }
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}