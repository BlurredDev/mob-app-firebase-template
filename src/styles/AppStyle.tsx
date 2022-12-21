import { StyleSheet } from "react-native";
import loading from "./screensStyles/LoadingStyle";
import signIn from "./screensStyles/SignInStyle";
import signUp from "./screensStyles/SignUpStyle";
import welcome from "./screensStyles/WelcomeStyle";

const global = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default { global, loading, signIn, signUp, welcome };
