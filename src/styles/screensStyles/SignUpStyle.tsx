import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#3FC5AB",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    padding: 5,
    backgroundColor: "#ff9999",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    margin: "5%",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  inlineText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "navy",
    textAlign: "center",
    marginTop: "5%",
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    margin: "5%",
    marginTop: "15%",
    fontWeight: "bold",
    color: "#2E6194",
  },
  textInput: {
    width: 300,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#a4eddf",
    padding: 10,
    margin: 5,
  },
});
