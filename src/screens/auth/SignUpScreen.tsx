import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { registration } from "../../services/firebase/AuthApi";
import styles from "../../styles/AppStyle";

const SignUp = () => {
  const navigation: any = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emptyState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handlePress = () => {
    if (!firstName) {
      Alert.alert("First name is required");
    } else if (!email) {
      Alert.alert("Email field is required.");
    } else if (!password) {
      Alert.alert("Password field is required.");
    } else if (!confirmPassword) {
      setPassword("");
      Alert.alert("Confirm password field is required.");
    } else if (password !== confirmPassword) {
      Alert.alert("Password does not match!");
    } else {
      registration(email, password, lastName, firstName);
      navigation.navigate("Loading");
      emptyState();
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.signUp.container}>
        <Text style={styles.signUp.text}>Create an account </Text>

        <ScrollView>
          <TextInput
            style={styles.signUp.textInput}
            placeholder="First name*"
            value={firstName}
            onChangeText={(name) => setFirstName(name)}
          />
          <TextInput
            style={styles.signUp.textInput}
            placeholder="Last name"
            value={lastName}
            onChangeText={(name) => setLastName(name)}
          />

          <TextInput
            style={styles.signUp.textInput}
            placeholder="Enter your email*"
            value={email}
            onChangeText={(email) => setEmail(email)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.signUp.textInput}
            placeholder="Enter your password*"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.signUp.textInput}
            placeholder="Retype your password to confirm*"
            value={confirmPassword}
            onChangeText={(password2) => setConfirmPassword(password2)}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.signUp.button} onPress={handlePress}>
            <Text style={styles.signUp.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.signUp.inlineText}>Already have an account?</Text>
          <TouchableOpacity
            style={styles.signUp.button}
            onPress={() => navigation.navigate("Sign In")}
          >
            <Text style={styles.signUp.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
