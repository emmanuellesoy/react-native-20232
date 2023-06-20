import { Button, View, Text, TextInput, ActivityIndicator, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { signInUser } from "../../firebase/auth";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [status, setStatus] = useState("clean");
    const [message, setMessage] = useState("");

    const verifyLogin = () => {
        setDisabled(true);
        setStatus("waiting");
        signInUser(username, password).then(response => {
            if (response.code === "error") {
                setUsername("");
                setPassword("");
                setDisabled(true);
                setStatus("error");
                setMessage(response.message);
            }
        });
    };

    useEffect(() => {
        if (username !== "" && password !== "") {
            setDisabled(false);
            setStatus("filled");
        } else {
            setDisabled(true);
            setStatus("clean");
        }
    }, [username, password]);

    return (
        <View style={styles.container}>
            {status === "waiting" && <ActivityIndicator size="large" color="#0000ff" style={styles.indicator}/>}
            <Text>NAME:</Text>
            <TextInput style={styles.input} value={username} onChange={(event) => setUsername(event.target.value)} />
            <Text>PASSWORD:</Text>
            <TextInput style={styles.input} secureTextEntry={true} value={password} onChange={(event) => setPassword(event.target.value)} />
            {message !== "" && <Text>{message}</Text>}
            <Text style={styles.link}>Sign up</Text>
            <Button onPress={verifyLogin} title="Iniciar Sesión" disabled={disabled} />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
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
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginBottom: 10,
    }
});

export default Login;