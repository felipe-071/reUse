import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { HomeScreen } from './src/screens/Home/HomeScreen';

export default function App() {

  useFonts({
    // FRAUNCES - DESTAQUES
    'Fraunces_800': require('./assets/fonts/fraunces/Fraunces_800.ttf'),

    // INTER - CORPO
    'Inter_400': require('./assets/fonts/inter/Inter_400.ttf'),
    'Inter_500': require('./assets/fonts/inter/Inter_500.ttf'),
    'Inter_600': require('./assets/fonts/inter/Inter_600.ttf'),
    'Inter_700': require('./assets/fonts/inter/Inter_700.ttf'),
    'Inter_800': require('./assets/fonts/inter/Inter_800.ttf'),
    'Inter_900': require('./assets/fonts/inter/Inter_900.ttf'),
  })

  return (
    <SafeAreaProvider style={styles.container}>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F3EC',
    flex: 1
  }
})

