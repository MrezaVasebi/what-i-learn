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

    buttonHeight: 45,

    inputHeight: 45,

    margin: {
        usual: 15,
        special: 20
    }

}

export {
    appStyle
}