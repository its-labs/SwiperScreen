import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    ImageBackground,
    TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { cssLogin } from '../Styles/styles'
class Login extends Component {

    // here is starting stacknavigation
    static navigationOptions = ({ navigation }) => {
        const { goBack } = navigation;
        const { params } = navigation.state
        return {
            title: 'LOGIN',
            headerTintColor: 'white',
            headerLeft: (<TouchableOpacity
                onPress={() => goBack(null)}><Image style={{
                    width: 26, height: 20,
                    marginLeft: 10
                }} source={require('../image/cancel.png')} /></TouchableOpacity>),
            headerStyle: {
                backgroundColor: '#5094CC',
            },
        };
    };
    // here is ending stack navigation
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorText: '',
        }
    }
    //here form validation
    login = () => {
        if (this.state.email == '' && this.state.password == '') {
            valid = true;
            this.setState({ errorText: 'Please provide your email and password' })
        }
        else if (this.state.email == '') {
            valid: true;
            this.setState({ errorText: 'please enter your Email' })
        }
        else if (!this.validateEmail(this.state.email)) {
            valid = true;
            this.setState({
                errorText: 'invalid Email format e.g: @gmail.com'
            })
        }
        else if (this.state.password == '') {
            valid = true;
            this.setState({ errorText: 'Please enter your Password' })
        }
        else if (!this.validatePassword(this.state.password)) {
            valid = true
            this.setState({ errorText: 'Your password must have minium 6 charaters, 1 uppercase, 1 lowercase and 1number' })
        }
        else {
            this.setState({ errorText: 'successfully' })
        }
    }
    // Here MailFormat Validation
    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    // Here PasswordFormat Validation
    validatePassword = (password) => {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return re.test(password);
    }
    // ends for form validation 

    render() {
        const { params } = this.props.navigation.state;
        const { goBack } = this.props.navigation;
        return (
            <View style={cssLogin.container}>
                <View style={cssLogin.viewTextinput}>
                    <TextInput
                        style={cssLogin.email}
                        placeholder="Email"
                        placeholderTextColor='#838383'
                        returnKeyType="next"
                        keyboardType="email-address"
                        underlineColorAndroid='#404040'
                        selectionColor='#fdcb46'
                        autoCorrect={false}
                        tintColor="#fdcb46"
                        autoCapitalize="none"
                        onChangeText={email => this.setState({ email })}
                    />

                    <View style={{ paddingTop: 14 }}>
                        <TextInput
                            style={cssLogin.email}
                            placeholder="Password"
                            placeholderTextColor='#838383'
                            returnKeyType="next"
                            keyboardType="email-address"
                            underlineColorAndroid='#404040'
                            selectionColor='#fdcb46'
                            autoCorrect={false}
                            tintColor="#fdcb46"
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={cssLogin.forgot}>
                    <Text style={cssLogin.forgottext}> Forgot password ? </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.login}
                    style={cssLogin.signbutton}
                    underlayColor='red'>
                    <Text style={cssLogin.signup}> Sign in</Text>
                </TouchableOpacity>
                <Text style={cssLogin.errorText}> {this.state.errorText}</Text>
            </View>
        )
    }
}
export default LoginStackNavigator = StackNavigator({
    Login: { screen: Login },
}, {

    });

