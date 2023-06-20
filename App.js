import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { getUserStateChange } from "./firebase/auth";

import { Login, SignUp, Home, List, Detail } from "./screens";
import UserContext from "./context/user";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = getUserStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
        <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ headerShown: false }}
              />
            <Stack.Screen
                name="List"
                component={List}
                options={{ headerShown: false }}
              />
          {user ? (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
              />
              
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
