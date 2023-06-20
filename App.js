import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { Login, SignUp, Home } from "./screens";
import UserContext from "./context/user";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
