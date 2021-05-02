import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "../../styles/AppStyle";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.welcome.background}
      source={require("../../assets/images/splash.png")}
    >
      <View style={styles.welcome.titleContainer}>
        <Text style={styles.welcome.title}>Title</Text>
      </View>
      <TouchableOpacity
        style={styles.welcome.button}
        onPress={() => navigation.navigate("Sign Up")}
      >
        <Text style={styles.welcome.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.welcome.inlineText}>Already have an account?</Text>
      <TouchableOpacity
        style={styles.welcome.button}
        onPress={() => navigation.navigate("Sign In")}
      >
        <Text style={styles.welcome.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default WelcomeScreen;
