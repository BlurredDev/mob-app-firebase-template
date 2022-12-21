import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

import LoadingScreen from "./screens/auth/LoadingScreen";
import WelcomeScreen from "./screens/auth/WelcomeScreen";
import SignIn from "./screens/auth/SignInScreen";
import SignUp from "./screens/auth/SignUpScreen";
import { initFirebase } from "./services/firebase/init";

import AppProvider from "./stateManager/AppProvider";
import Home from "./screens/Home";

const Stack = createStackNavigator();

const App: React.FC = () => {
  initFirebase();

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"Loading"}
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sign In"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
