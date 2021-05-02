import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { loggingOut } from "../services/firebase/AuthApi";

import styles from "./../styles/AppStyle";

const Home = () => {
  return (
    <View style={styles.global.container}>
      <Text> Home</Text>
      <TouchableOpacity
        style={styles.welcome.button}
        onPress={() => loggingOut()}
      >
        <Text style={styles.welcome.buttonText}>Disconnect</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
