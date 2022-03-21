import React from 'react'
import { Text } from 'react-native'
import { appStyle } from '../utility/appStyle'

const AppText = ({ label, labelStyle }) => {
    return <Text style={[{ ...appStyle.label }, labelStyle]}>{label}</Text>
}

export default AppText