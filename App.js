import { GlobalProvider } from './state-management/context/valueConfig'
import InputForm from './screens/InputForm'
import React from 'react'
import User from './screens/User'

const App = () => {
  return (
    <GlobalProvider>
      <User />
    </GlobalProvider>
  )
}

export default App