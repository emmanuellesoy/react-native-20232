import { StyleSheet } from "react-native";

const stylesDetail = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        maxWidth: 500,
        height: 250,
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 700,
        marginTop: 20,  
    },
    contentDesc:{
        padding: 20,
        margin: 10,
    },
    sub:{
        fontWeight: 500,
    }
});

export {stylesDetail}