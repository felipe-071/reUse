import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { HomeScreen } from './src/screens/Home/HomeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  
})

