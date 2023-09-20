import { StyleSheet, Text, View } from 'react-native';

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ready to use now :D</Text>
      <Text style={styles.text2}>React Native Typescript with Navigation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5c228b',
  },
  text: {
    marginTop: 80,
    color: '#fff',
    fontSize: 36,
  },
  text2: {
    marginTop: 20,
    color: '#fff',
    fontSize: 25,
  }
});