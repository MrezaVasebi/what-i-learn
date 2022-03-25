import {
    AppButtons,
    AppInput,
    AppText
} from '../components'
import { Entypo, Feather } from '@expo/vector-icons'
import {
    FlatList,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native'
import {
    LanguageContext,
    ThemeContext,
    UserContext
} from '../state-management/context/valueConfig'
import React, { useContext, useState } from 'react'
import { addUser, deleteUser } from '../state-management/context/user'

import appColors from '../utility/appColors'
import { appStyle } from '../utility/appStyle'
import { setLanguage } from '../state-management/context/language'
import { setTheme } from '../state-management/context/theme'
import switchLanguage from '../modules/switchLanguage'

const User = () => {

    const user = useContext(UserContext)
    const theme = useContext(ThemeContext)
    const lan = useContext(LanguageContext)

    const [openPopup, setOpenPopup] = useState(false)

    const [userInfo, setUserInfo] = useState({
        userId: null,
        name: null,
        fname: null
    })

    const addUserHandler = () => {
        let empty = 0
        for (const key in userInfo) {
            if (userInfo[key] === null)
                empty += 1
        }
        if (empty !== 0) return

        const res = user.stateUser.users.filter(el => el.userId === userInfo.userId)
        if (res.length !== 0) return

        user.dispatchUser(addUser(userInfo))
        setUserInfo({
            userId: null,
            name: null,
            fname: null
        })

        setOpenPopup(false)
    }

    const onDeleteUser = (userId) => { user.dispatchUser(deleteUser(userId)) }

    return (
        <View style={[styles.root, {
            backgroundColor: theme.stateTheme.isLight ? appColors.bgColor : appColors.labelColor
        }]}>

            <StatusBar
                barStyle={theme.stateTheme.isLight ? 'dark-content' : 'light-content'}
                backgroundColor={theme.stateTheme.isLight ? appColors.bgColor : appColors.labelColor}
            />

            <View style={styles.settingContainer}>
                <TouchableOpacity
                    onPress={() => theme.dispatchTheme(setTheme(!theme.stateTheme.isLight))}
                >
                    {
                        theme.stateTheme.isLight ?
                            <Feather name='sun' color={appColors.sun} size={25} />
                            :
                            <Entypo name='moon' color={appColors.bgColor} size={25} />
                    }
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => lan.stateLanguage.lan === 'en' ?
                        lan.dispatchLanguage(setLanguage('fa')) :
                        lan.dispatchLanguage(setLanguage('en'))}
                    style={[styles.lan, {
                        borderColor: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                    }]}
                >
                    <AppText labelStyle={{
                        color: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                    }} label={lan.stateLanguage.lan} />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.addUserContainer}>
                    <AppText labelStyle={{
                        marginRight: 5,
                        color: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                    }} label={!openPopup ? '+' : '-'} />
                    <TouchableOpacity onPress={() => setOpenPopup(!openPopup)}>
                        <AppText labelStyle={{
                            color: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                        }}
                            // label={'Add new user'}
                            label={switchLanguage(lan.stateLanguage.lan).addNewUser}
                        />
                    </TouchableOpacity>
                </View>

                <AppText
                    labelStyle={{
                        color: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                    }}
                    label={`${switchLanguage(lan.stateLanguage.lan).userCount}: ${user.stateUser.users.length}`} />
            </View>

            {
                !openPopup ? null
                    :
                    <>
                        <View style={styles.userInfoContainer}>

                            <View style={styles.eachItem}>
                                <AppInput
                                    placeholder={`${switchLanguage(lan.stateLanguage.lan).id}`}
                                    value={userInfo.userId}
                                    keyboardType='number-pad'
                                    inputStyle={[styles.inputStyle, {
                                        color: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                                    }]}
                                    onChangeText={(value) => setUserInfo({ ...userInfo, userId: value })}
                                    placeholderTextColor={theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor}
                                />
                            </View>

                            <View style={styles.eachItem}>
                                <AppInput
                                    placeholder={`${switchLanguage(lan.stateLanguage.lan).name}`}
                                    value={userInfo.name}
                                    inputStyle={[styles.inputStyle, {
                                        color: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor,
                                        marginHorizontal: 5
                                    }]}
                                    onChangeText={(value) => setUserInfo({ ...userInfo, name: value })}
                                    placeholderTextColor={theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor}
                                />
                            </View>

                            <View style={styles.eachItem}>
                                <AppInput
                                    placeholder={`${switchLanguage(lan.stateLanguage.lan).family}`}
                                    value={userInfo.fname}
                                    inputStyle={[styles.inputStyle, {
                                        color: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                                    }]}
                                    onChangeText={(value) => setUserInfo({ ...userInfo, fname: value })}
                                    placeholderTextColor={theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor}
                                />
                            </View>

                        </View>
                        <View style={styles.addContainer}>
                            <AppButtons
                                onPress={addUserHandler}
                                labelStyle={{
                                    color: appColors.bgColor
                                }}
                                btnStyle={{
                                    width: '25%',
                                    backgroundColor: appColors.success,
                                }} label={`${switchLanguage(lan.stateLanguage.lan).add}`} />
                        </View>
                    </>
            }

            {
                user.stateUser.users.length === 0 ? null :
                    <>
                        <View style={[styles.tableView, { paddingHorizontal: 20, marginTop: 20 }]}>
                            <AppText labelStyle={[styles.tableRecord, {
                                color: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                            }]} label={`${switchLanguage(lan.stateLanguage.lan).id}`} />
                            <AppText labelStyle={[styles.tableRecord, {
                                color: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                            }]} label={`${switchLanguage(lan.stateLanguage.lan).name}`} />
                            <AppText labelStyle={[styles.tableRecord, {
                                color: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                            }]} label={`${switchLanguage(lan.stateLanguage.lan).family}`} />
                            <AppText labelStyle={[styles.tableRecord, {
                                color: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                            }]} label={`${switchLanguage(lan.stateLanguage.lan).delete}`} />
                        </View>

                        <FlatList
                            data={user.stateUser.users}
                            contentContainerStyle={{ paddingHorizontal: 20 }}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, }) =>
                                <View style={[styles.tableView, {
                                    marginTop: 10,
                                    paddingBottom: 5,
                                    borderBottomWidth: .5,
                                    borderColor: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                                }]}>
                                    <AppText labelStyle={[styles.tableRecord, {
                                        color: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                                    }]} label={item.userId} />
                                    <AppText labelStyle={[styles.tableRecord, {
                                        color: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                                    }]} label={item.name} />
                                    <AppText labelStyle={[styles.tableRecord, {
                                        color: theme.stateTheme.isLight ? appColors.labelColor : appColors.bgColor
                                    }]} label={item.fname} />
                                    <TouchableOpacity
                                        style={styles.btnDeleteView}
                                        onPress={() => onDeleteUser(item.userId)}
                                    >
                                        <AppText labelStyle={styles.deleteText} label={'X'} />
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    </>
            }

        </View>
    )
}

export default User

const styles = StyleSheet.create({
    root: {
        ...appStyle.root
    },
    settingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    lan: {
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        height: 30, width: 30,
        justifyContent: 'center'
    },
    buttonContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addUserContainer: {
        flexDirection: 'row'
    },
    userInfoContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    eachItem: {
        flex: 1,
    },
    inputStyle: {
        marginBottom: 5
    },
    addContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-end',
    },
    tableView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tableRecord: {
        flex: 1,
        textAlign: 'center',
    },
    btnDeleteView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    deleteText: {
        fontSize: 10,
        borderRadius: 10,
        textAlign: 'center',
        height: 20, width: 20,
        color: appColors.bgColor,
        textAlignVertical: 'center',
        backgroundColor: appColors.danger,
    }
})