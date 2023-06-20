import { Button, View, Text, TextInput, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { stylesLogin } from "./stylesLogin";
import { signInUser } from "../../firebase/auth";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [status, setStatus] = useState("clean");
  const [message, setMessage] = useState("");

  const verifyLogin = () => {
    setDisabled(true);
    setStatus("waiting");
    signInUser(username, password).then((response) => {
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
    <View style={stylesLogin.container}>
        <View style={stylesLogin.contentTitle}>
            <Text style={stylesLogin.title}>Inicio de sesión</Text>
        </View>
        <View >
            {status === "waiting" && (
                <ActivityIndicator
                size="large"
                color="#0000ff"
                style={styles.indicator}
                />
            )}
            <Text>NAME:</Text>
            <TextInput
                style={stylesLogin.input}
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <Text>PASSWORD:</Text>
            <TextInput
                style={stylesLogin.input}
                secureTextEntry={true}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            {message !== "" && <Text>{message}</Text>}
            <Text style={stylesLogin.link}>Sign up</Text>
            <Button
                onPress={verifyLogin}
                title="Iniciar Sesión"
                disabled={disabled}
            />
        </View>
    </View>
  );
};

export default Login;
