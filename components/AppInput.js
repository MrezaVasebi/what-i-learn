import { StyleSheet, TextInput } from 'react-native'

import React from 'react'
import appColors from '../utility/appColors'
import { appStyle } from '../utility/appStyle'

const AppInput = ({ inputStyle, ...otherProps }) => {
    return (
        <TextInput
            {...otherProps}
            style={[styles.input, inputStyle]}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        paddingHorizontal: 5,
        height: appStyle.inputHeight,
        borderColor: appColors.borderColor,
        borderRadius: appStyle.appRadius.usual,
    }
})

export default AppInput