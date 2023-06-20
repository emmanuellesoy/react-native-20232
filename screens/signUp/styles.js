import { StyleSheet } from "react-native";

const stylesSignUp = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    padding: 20,
    margin: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
  link: {
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 700,
  },
});

export {stylesSignUp}