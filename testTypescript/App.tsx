import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/home';

export default function App() {
  const [bb, setBb] = useState<string>("OH... LOOK AT HIM")

  return (
    <View style={styles.container}>
      <Text>{bb}</Text>
      <Button
        onPress={() => setBb("IT'S A GAY PRIDE FLAG? 🌈")}
        title="?????"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
});
