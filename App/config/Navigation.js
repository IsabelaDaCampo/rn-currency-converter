import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screens/Home";
import Options from "../screens/Options";

const MainStack = createNativeStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
    // screenOptions={() => ({
    //   headerShown: false,
    // })}
  >
    <MainStack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <MainStack.Screen name="Options" component={Options} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);