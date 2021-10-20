import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './LoginPage';

const Stack = createNativeStackNavigator();

const NavigationPages = () => {
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen name="ME-SCHOOL" component={LoginPage} />
  //     </Stack.Navigator>
  //   </NavigationContainer>;
};

export default NavigationPages;
