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
    <View>
      {status === "waiting" ? (
        <View>
          <ActivityIndicator size="large" color="#AA50B3" />
        </View>
      ) : (
        <View>
          <View>
            <Text>Correo</Text>
            <TextInput
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </View>
          <View>
            <Text>Contraseña</Text>
            <TextInput
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </View>

          {message !== "" && (
            <View>
              <Text>{message}</Text>
            </View>
          )}
          <View>
            <Button
              onPress={signUp}
              title="Crear usuario"
              disabled={disabled}
            />
          </View>
          <View>
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
