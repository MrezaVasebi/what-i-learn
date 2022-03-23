import { AppButtons, AppInput, AppText } from '../components'
import React, { useReducer } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import appColors from '../utility/appColors'
import { appStyle } from '../utility/appStyle'

const Form = () => {

    const initialState = {
        name: null,
        fname: null,
        email: null,
        phone: null
    }

    const setName = (value) => ({
        type: 'SET_NAME',
        payload: value
    })
    const setFname = (value) => ({
        type: 'SET_FNAME',
        payload: value
    })
    const setEmail = (value) => ({
        type: 'SET_EMAIL',
        payload: value
    })
    const setPhone = (value) => ({
        type: 'SET_PHONE',
        payload: value
    })

    const formReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'SET_NAME':
                return { ...state, name: action.payload }
            case 'SET_FNAME':
                return { ...state, fname: action.payload }
            case 'SET_EMAIL':
                return { ...state, email: action.payload }
            case 'SET_PHONE':
                return { ...state, phone: action.payload }
            case 'RESET':
                return { ...state, name: null, fname: null, email: null, phone: null }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(formReducer, initialState)

    const onChangeValue = (value, fieldName) => {
        if (fieldName === 'name') {
            if (value)
                dispatch(setName(value))
        }
        else if (fieldName === 'fname') {
            if (value)
                dispatch(setFname(value))
        }
        else if (fieldName === 'email') {
            if (value)
                dispatch(setEmail(value))
        }
        else if (fieldName === 'phone') {
            if (value)
                dispatch(setPhone(value))
        }
    }

    const handleOk = () => { }

    const handleCancel = () => { dispatch({ type: 'RESET' }) }

    return (
        <View style={styles.root}>
            <ScrollView
                contentContainerStyle={styles.scroll}
            >
                <View style={styles.titleView}>
                    <AppText
                        labelStyle={{ fontSize: 18 }}
                        label={'Fill the Form'} />
                </View>
                <View style={styles.container}>

                    <View style={styles.fullNameContainer}>
                        <View style={{ width: '49%' }}>
                            <AppText label={'Name'} />
                            <AppInput
                                value={state.name}
                                returnKeyType="next"
                                inputStyle={{ marginTop: 5 }}
                                onChangeText={(value) => onChangeValue(value, 'name')}
                            />
                        </View>

                        <View style={{ width: '49%' }}>
                            <AppText label={'Family'} />
                            <AppInput
                                value={state.fname}
                                returnKeyType="next"
                                inputStyle={{ marginTop: 5 }}
                                onChangeText={(value) => onChangeValue(value, 'fname')}
                            />
                        </View>
                    </View>

                    <View>
                        <AppText label={'Email Address'} />
                        <AppInput
                            value={state.email}
                            returnKeyType="next"
                            keyboardType='email-address'
                            inputStyle={{ marginTop: 5 }}
                            onChangeText={(value) => onChangeValue(value, 'email')}
                        />
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <AppText label={'Phone Number'} />
                        <AppInput
                            maxLength={10}
                            value={state.phone}
                            returnKeyType="done"
                            keyboardType='number-pad'
                            inputStyle={{ marginTop: 5, }}
                            onChangeText={(value) => onChangeValue(value, 'phone')}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <AppButtons
                            label={'OK'}
                            onPress={handleOk}
                            labelStyle={{ color: appColors.bgColor }}
                            btnStyle={{ width: '49%', backgroundColor: appColors.success }}
                        />
                        <AppButtons
                            label={'Cancel'}
                            onPress={handleCancel}
                            labelStyle={{ color: appColors.bgColor }}
                            btnStyle={{ width: '49%', backgroundColor: appColors.danger }}
                        />
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    root: {
        ...appStyle.root,
    },
    scroll: {
        flexGrow: 1,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fullNameContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleView: {
        width: '80%',
        marginBottom: 10,
    },
    container: {
        padding: 20,
        width: '80%',
        borderWidth: 1,
        paddingVertical: 25,
        borderColor: appColors.borderColor,
        borderRadius: appStyle.appRadius.usual,
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})