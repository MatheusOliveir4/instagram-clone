import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';

import { SignIn } from './src/screens/SignIn';
import { Home } from './src/screens/Home';

export default function App() {
  const [ loaded ] = useFonts({ Karla_400Regular, Karla_700Bold })

  return (
    <>
      <StatusBar style="auto" />
      { loaded ? <Home /> : <Text>Carregando...</Text> }
    </>
  );
}

