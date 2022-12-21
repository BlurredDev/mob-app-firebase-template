import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

import styles from "../../styles/AppStyle";

const LoadingScreen = () => {
  const navigation: any = useNavigation();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      } else {
        navigation.replace("Welcome");
      }
    });
  });

  return (
    <View style={styles.loading.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};
export default LoadingScreen;
