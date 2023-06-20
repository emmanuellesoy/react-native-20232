import {
  Button,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import { useState, useEffect } from "react";
import { createUser } from "../../firebase/auth";

import styles from "./styles";

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [status, setStatus] = useState("clean");
  const [message, setMessage] = useState("");

  const signUp = ({ navigation }) => {
    setDisabled(true);
    setStatus("waiting");
    createUser(username, password).then((response) => {
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
      {status === "waiting" ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#AA50B3" />
        </View>
      ) : (
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text>Correo</Text>
            <TextInput
              style={styles.inputText}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Contraseña</Text>
            <TextInput
              style={styles.inputText}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </View>

          {message !== "" && (
            <View style={styles.inputContainer}>
              <Text>{message}</Text>
            </View>
          )}
          <View style={styles.inputContainer}>
            <Button
              onPress={signUp}
              title="Crear usuario"
              disabled={disabled}
            />
          </View>
          <View style={styles.inputContainerText}>
            <TouchableHighlight
              onPress={() => {
                navigation.replace("Login");
              }}
            >
              <Text>Iniciar Sesión</Text>
            </TouchableHighlight>
          </View>
        </View>
      )}
    </View>
  );
};

export default SignUp;
