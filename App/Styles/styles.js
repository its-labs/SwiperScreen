import React, { Component } from 'react';
import { StyleSheet } from 'react-native'

//styles begins for  HomeScreen
export const cssHome = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    wrapper: {
    },
    slide1: {
        flex: 1,
        backgroundColor: 'pink'
    },
    slide2: {
        flex: 1,
        backgroundColor: 'green'
    },
    slide3: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    slide4: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    firstImage: {
        flex: 1,
        resizeMode: 'cover',
        width: window.width,
        height: window.height,
    },
    secoundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: window.width,
        height: window.height,
    },
    logo: {
        height: 36, width: 280,
        marginTop: 30,
    },
    logoKafnu: {
        position: 'absolute',
        width: window.width,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    doStyle: {
        backgroundColor: 'white',
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 12,
        marginTop: 3,
        marginBottom: 3,
    },
    activeDotStyle: {
        backgroundColor: '#D6A16C',
        // width: 8,
        //  height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 12,
        marginTop: 3,
        marginBottom: 3,
    },
    bottomView: {
        backgroundColor: 'transparent',
        paddingBottom: 10,
        flexDirection: "row",
        position: 'absolute',
        bottom: 40,
    },
    rightButton: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        marginRight: 5,
        borderRadius: 2,
    },
    leftButton: {
        flex: 1,
        marginTop: 10,
        marginLeft: 5,
        marginBottom: 10,
        marginRight: 10,
        borderRadius: 2,
    },
    loginButton: {
        backgroundColor: "#ABC9BD",
        height: 40,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerButton: {
        backgroundColor: "#D6A19E",
        height: 40,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
// here ends css HomeScreen

export const cssLogin = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBE8E1',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    viewTextinput: {
        backgroundColor: '#EBE8E1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    email: {
        paddingTop: 12,
        backgroundColor: 'white',
        width: 260,
        height: 44,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        fontSize: 14,
        paddingLeft: 12,
        paddingBottom: 12

    },
    forgottext: {
        color: '#5094CC',
        fontSize: 17,
        paddingTop: 9,
        paddingRight: 99

    },
    signup: {
        color: 'black',
        fontSize: 21,
        paddingTop: 24,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        paddingTop: 12,
        textAlign: 'center'
    }

})
//Login screen styles ends here

// Register screen styles begins here
export const cssRegister = StyleSheet.create({
    container: {
        paddingTop: 38,
        paddingBottom:32,
        paddingLeft: 9,
        paddingRight: 9,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#EBE8E1',
    },
    // container1: {
    //     //color: 'black'
    //     //backgroundColor:'white'
    // },
    email: {
        paddingTop: 14,
        backgroundColor: 'white',
        width: 300,
        height: 42,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        paddingLeft: 5,
        fontSize: 12,
        paddingBottom: 12

    },
    input: {
        minWidth: 300,
        height: 40,
        paddingHorizontal: 10,
        fontSize: 13,
        borderBottomWidth: 1

    },
    input1: {
        minWidth: 10,
        height: 40,
        paddingHorizontal: 10,
        color: 'black',
        fontSize: 12,
        borderBottomWidth: 1
        //borderWidth:1

    },
    buttonContainer: {
        backgroundColor: "#1980b9",
        width: 300,
        height: 44,
        borderRadius: 2,

    },
    googleButtonContainer: {
        backgroundColor: "#d34836",
        width: 300,
        height: 44,
        borderRadius: 2

    },

    loginbutton: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: '700',
        paddingTop: 13
    }
});
//Register screen styles ends here