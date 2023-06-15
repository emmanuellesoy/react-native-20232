import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';

import { create } from './firebase/auth';
import { database, set, ref } from './firebase/database';

export default function App() {

  useEffect(() => {
    create("emmanuelle.laguna@gmail.com", "q12w3e4r5r");
  }, []);

  useEffect(() => {
      set(ref(database, `user/admin/2`), {
      email: "emmanuellesoy@gmail.com",
      name: "Emm",
      age: 37,
      gender: "male",
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
