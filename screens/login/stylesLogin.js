import { StyleSheet } from "react-native";

const stylesLogin = StyleSheet.create({
    container: {
        flex: 1,
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
    indicator: {
      marginBottom: 25,
    },
    link: {
      textAlign: "center",
      textDecorationLine: "underline",
      marginBottom: 10,
    },
    title: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 700,
    },

});

export {stylesLogin}