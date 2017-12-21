import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Resgister}from '../Screen/Resgister';
import{Splash} from '../Screen/Splash';
import {Login} from '../Screen/Login';
export default  navigation = StackNavigator({
        Splash: { screen: Splash,
        navigationOptions:{
            title:'wellcome'
        } },
        // Resgister:{screen:Resgister},
  });