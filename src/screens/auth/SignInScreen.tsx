import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { signIn } from "../../services/firebase/AuthApi";

import styles from "../../styles/AppStyle";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    if (!email) {
      Alert.alert("Email field is required.");
    }

    if (!password) {
      Alert.alert("Password field is required.");
    }

    signIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.signIn.container}>
      <Text style={styles.signIn.text}>Sign in to your account:</Text>

      <TextInput
        style={styles.signIn.formInput}
        placeholder="Enter your email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.signIn.formInput}
        placeholder="Enter your password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.signIn.button} onPress={handlePress}>
        <Text style={styles.signIn.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
