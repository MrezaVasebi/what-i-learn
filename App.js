import { GlobalProvider } from './state-management/context/valueConfig'
import InputForm from './screens/InputForm'
import React from 'react'
import User from './screens/User'
import { useFonts } from 'expo-font';

const App = () => {

  let [fontsLoaded] = useFonts({
    'shabnam': require('./assets/fonts/Shabnam-Medium.ttf'),
    'roboto': require('./assets/fonts/Roboto-Medium.ttf'),
    'ubunto': require('./assets/fonts/Ubuntu-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <GlobalProvider>
      <User />
    </GlobalProvider>
  )
}

export default App