import { View, StyleSheet, StatusBar, Text, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { Image } from 'react-native'
import images from '../../constants/images'

export default function LoginScreen() {
    return (
        <>
            <StatusBar backgroundColor="transparent"
                translucent={true} />
            <View style={styles.root}>
                <View style={styles.header}>
                    <Image source={images.LoginBG} />
                </View>
                <View style={styles.main}>
                    <View>
                        <View style={styles.OuterCircle}>
                            <View style={styles.circle}>
                                <Text style={styles.logo}>SOS</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.form}>
                        <View>
                            <Text style={styles.heading}>Login</Text>
                        </View>
                        <View>
                            <View style={styles.TextInput}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput style={styles.input} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    header: {
        flex: 1,
    },
    main: {
        flex: 3,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: COLORS.white
    },
    OuterCircle: {
        width: SIZES.width * 0.5,
        height: SIZES.width * 0.5,
        borderRadius: SIZES.width * 0.25,
        backgroundColor: COLORS.white,
        top: -SIZES.width * 0.20,
        left: SIZES.width * 0.25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    circle: {
        width: SIZES.width * 0.45,
        height: SIZES.width * 0.45,
        borderRadius: SIZES.width * 0.225,
        backgroundColor: COLORS.primary,
        elevation: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        fontSize: SIZES.h1 * 2,
        color: COLORS.white,
        fontWeight: 'bold'
    },
    form: {
        paddingHorizontal: SIZES.padding,
    },
    heading: {
        fontSize: SIZES.h1,
        fontWeight: 'bold',
        color: COLORS.black,
    },
    TextInput: {
        marginTop: SIZES.padding * 2,
    },
    label: {
        fontSize: SIZES.body3,
        color: COLORS.gray,
        fontWeight: 'bold',
        marginBottom: SIZES.padding / 2
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        paddingVertical: SIZES.padding / 2,
        fontSize: SIZES.body3,
        color: COLORS.black,
    }
})