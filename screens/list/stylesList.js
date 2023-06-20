import { StyleSheet } from "react-native";

const stylesList = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
    },
    image: {
        maxWidth: 500,
        height: 250,
    },
    item: {
        padding: 20,
    }
});

export {stylesList}