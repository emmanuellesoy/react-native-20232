import { Button, View, Text, TextInput, ActivityIndicator } from "react-native";
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
        <View>
            {status === "waiting" && <ActivityIndicator size="large" color="#00ff00" />}
            <TextInput value={username} onChange={(event) => setUsername(event.target.value)} />
            <TextInput value={password} onChange={(event) => setPassword(event.target.value)} />
            {message !== "" && <Text>{message}</Text>}
            <Button onPress={verifyLogin} title="Iniciar Sesión" disabled={disabled} />
        </View>
    )
};

export default Login;