import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={StyleSheet.container}>
      <Text>Aora!</Text>
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