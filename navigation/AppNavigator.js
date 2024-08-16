import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import * as Screens from "../screens/index";
import DrawerNavigator from "./DrawerNavigator";
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="hometab">
      <Stack.Screen
        name="login"
        component={Screens.LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={Screens.SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="intro"
        component={Screens.IntroScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="settings"
        component={Screens.SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="hometab"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
