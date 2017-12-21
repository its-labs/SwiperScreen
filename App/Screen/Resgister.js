
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  Alert,
  Image,
  Linking,
  Button
} from 'react-native';
import { cssRegister } from '../Styles/styles';
import { StackNavigator } from 'react-navigation';
export class Resgister extends Component {
  // here is starting stacknavigation
  static navigationOptions = ({ navigation }) => {
    const { goBack } = navigation;
    const { params } = navigation.state
    return {
      title: 'REGISTER',
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
  render() {
    return (

      <View style={cssRegister.container}>
        <ScrollView >
          <KeyboardAvoidingView style={cssRegister.container1}>
            <TextInput
              placeholder="First Name"
              placeholderTextColor='#838383'
              returnKeyType="next"
              keyboardType="default"
              autoCorrect={false}
              tintColor="#fdcb46"
              underlineColorAndroid='#404040'
              selectionColor='#fdcb46'
              autoCapitalize="none"
              onSubmitEditing={() => this.emailInput.focus()}
              style={cssRegister.email}>
            </TextInput>
            <View style={{ marginTop: 13 }}>
              <TextInput
                placeholder="Last Name"
                placeholderTextColor='#838383'
                returnKeyType="next"
                keyboardType="default"
                autoCorrect={false}
                tintColor="#fdcb46"
                underlineColorAndroid='#404040'
                selectionColor='#fdcb46'
                autoCapitalize="none"
                onSubmitEditing={() => this.emailInput.focus()}
                style={cssRegister.email}>
              </TextInput>
            </View>
            <View style={{ marginTop: 13 }}>
              <TextInput
                placeholder="Full Name"
                placeholderTextColor='#838383'
                returnKeyType="next"
                keyboardType="default"
                autoCorrect={false}
                tintColor="#fdcb46"
                underlineColorAndroid='#404040'
                selectionColor='#fdcb46'
                autoCapitalize="none"
                onSubmitEditing={() => this.emailInput.focus()}
                style={cssRegister.email}>
              </TextInput>
            </View>
            <View style={{ marginTop: 13 }}>
              <TextInput
                placeholder="Email"
                placeholderTextColor='#838383'
                returnKeyType="next"
                keyboardType="email-address"
                underlineColorAndroid='#404040'
                selectionColor='#fdcb46'
                autoCorrect={false}
                tintColor="#fdcb46"
                autoCapitalize="none"
                ref={(input) => this.emailInput = input}
                onChangeText={username => this.setState({ username })}
                onSubmitEditing={() => this.passwordInput.focus()}
                style={cssRegister.email}>
              </TextInput>
            </View>
            <View style={{ marginTop: 13 }}>
              <TextInput
                placeholder="Password"
                placeholderTextColor='#838383'
                secureTextEntry
                returnKeyType="next"
                underlineColorAndroid='#404040'
                selectionColor='#fdcb46'
                onChangeText={password => this.setState({ password })}
                ref={(input) => this.passwordInput = input}
                onSubmitEditing={(input) => this.mobileNumber.focus()}
                style={cssRegister.email}>
              </TextInput>
            </View>
            <View style={{ marginTop: 13, marginBottom: 10 }}>
              <TextInput
                placeholder="Mobile Number"
                placeholderTextColor='#838383'
                returnKeyType="next"
                keyboardType="numeric"
                autoCorrect={false}
                underlineColorAndroid='#404040'
                selectionColor='#fdcb46'
                tintColor="#fdcb46"
                autoCapitalize="none"
                ref={(input) => this.mobileNumber = input}
                onSubmitEditing={() => this.dateOfBirth.focus()}
                style={cssRegister.email}>
              </TextInput>
            </View>

            <View style={{ paddingTop: 14 }}>
              <TouchableOpacity style={cssRegister.buttonContainer}>
                <Text style={cssRegister.loginbutton}
                  onPress={() => alert('Welcome ')}>SUBMIT</Text>
              </TouchableOpacity>

            </View>
            <View style={{ paddingTop: 18 }}>
              <TouchableOpacity style={cssRegister.googleButtonContainer}>
                <Text style={cssRegister.loginbutton}

                  onPress={() => alert('Cancel')}>CANCEL</Text>
              </TouchableOpacity>
            </View>

          </KeyboardAvoidingView>
        </ScrollView>
      </View>

    );
  }
}
export const RegisterStackNavigator = StackNavigator({
  Resgister: { screen: Resgister },
});

