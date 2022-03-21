import {
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import AppText from './AppText'
import React from 'react'
import { appStyle } from '../utility/appStyle'

const AppButtons = ({
    btnStyle, onPress, label, labelStyle
}) => {
    return (
        <TouchableOpacity
            style={[styles.style, btnStyle]}
            onPress={onPress}
        >
            <AppText labelStyle={labelStyle} label={label} />
        </TouchableOpacity>
    )
}

export default AppButtons

const styles = StyleSheet.create({
    style: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        height: appStyle.buttonHeight,
        borderRadius: appStyle.margin.usual,
    }
})