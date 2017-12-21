import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Platform,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
    Dimensions

} from 'react-native';
import Swiper from 'react-native-swiper';
const window = Dimensions.get('window');
import LoginStackNavigator from '../Screen/Login';
import { RegisterStackNavigator } from '../Screen/Resgister';
import { StackNavigator } from 'react-navigation';
import { cssHome } from '../Styles/styles';

class HomeScreen extends Component {
    static navigationOptions = {
        title: null,
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={cssHome.container}>
                <Swiper style={cssHome.wrapper} showsButtons={false}
                    dotStyle={cssHome.doStyle}
                    activeDotStyle={cssHome.activeDotStyle}>
                    <View style={cssHome.slide1}>
                        <Image source={require('../image/kafnu4.jpg')}
                            style={cssHome.firstImage} />
                    </View>
                    <View style={cssHome.slide2}>
                        <Image source={require('../image/kafnu2.jpg')}
                            style={cssHome.secoundImage} />
                    </View>
                    <View style={cssHome.slide3}>
                        <Image source={require('../image/kafnu3.jpg')}
                            style={cssHome.firstImage} />
                    </View>
                    <View style={cssHome.slide4}>
                        <Image source={require('../image/kafnu1.jpg')}
                            style={cssHome.firstImage} />
                    </View>
                </Swiper>

                {/* // kafnu logo syles here */}
                <View style={cssHome.logoKafnu}>
                    <Image style={cssHome.logo}
                        source={require('../image/getlogo.png')}>
                    </Image>
                </View>

                {/* // kafnu logo styles end */}

                {/* // login and register button styles begins */}
                <View style={cssHome.bottomView}>
                    <View style={cssHome.rightButton}>
                        <TouchableOpacity style={cssHome.loginButton}
                            onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{ fontSize: 15, color: 'white', }}> LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={cssHome.leftButton}>
                        <TouchableOpacity style={cssHome.registerButton}
                            onPress={() => this.props.navigation.navigate('Register')}>

                            <Text style={{ fontSize: 15, color: 'white', }}> REGISTER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* // login and register button styles ends here */}
            </View>
        )
    }
}

// here stacknavigation 
export default MainStackNavigator = StackNavigator({
    HomeScreen: {
        screen: HomeScreen,
    },
    Login: {
        screen: LoginStackNavigator,
    },
    Register: {
        screen: RegisterStackNavigator,
    },
}, {
        headerMode: 'none',
        mode: 'modal'

    });
