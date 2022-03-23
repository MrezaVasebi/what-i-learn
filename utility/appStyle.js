import { StatusBar } from 'react-native'
import appColors from './appColors'

const appStyle = {

    root: {
        flex: 1,
        backgroundColor: appColors.bgColor,
        paddingTop: StatusBar.currentHeight
    },

    label: {
        fontSize: 13,
        color: appColors.labelColor
    },

    inputHeight: 45,
    buttonHeight: 45,

    appRadius: {
        usual: 10,
        special: 20
    }
}

export { appStyle }