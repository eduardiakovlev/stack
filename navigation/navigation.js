import React from 'react';
import {
    NavigationContainer,
  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-native-paper";

import Home from './screens/Home';
import AboutMe from './screens/AboutMe';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';

const Stack = createStackNavigator();


const MainNavigator = (props) => {
  return (
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AboutMe"
          component={AboutMe}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Page1"
          component={Page1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Page2"
          component={Page2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Page3"
          component={Page3}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    )
  }

const RootStack = () => {
return (
    <NavigationContainer>
      <Provider>
        <MainNavigator/>
      </Provider>
    </NavigationContainer>
)
};

export default RootStack;