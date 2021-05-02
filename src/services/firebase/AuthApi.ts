import firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export const registration = async (
  email: string,
  password: string,
  lastName: string,
  firstName: string
) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users").doc(currentUser?.uid).set({
      email: currentUser?.email,
      lastName: lastName,
      firstName: firstName,
    });
  } catch (err) {
    Alert.alert("Echec de l'enregistrement de l'utilisateur", err.message);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert(
      "Mot de passe ou Identifiant Incorrect. Si le problème persiste contactez un administrateur.",
      err.message
    );
  }
};

export const loggingOut = async () => {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert("Echec de la déconnexion. Veuillez reessayer", err.message);
  }
};
