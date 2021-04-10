import React, { Component } from 'react';
import { SafeAreaView, View, Text, Image, ActivityIndicator, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppTitle, ColorTheme, PROPERTIES } from '../utils/constants';
import { styles } from '../utils/globalStyles';

const { width, height } = Dimensions.get('window');

export default class Splash extends Component {
    componentDidMount() {
        this.redirect();
    }

    async redirect() {
        const { navigate } = this.props.navigation;
        AsyncStorage.getItem('isLoggedIn').then(result => {
            if (result === "Y") {
                setTimeout(() => navigate('Home'), 1000);
            } else {
                setTimeout(() => navigate('Login'), 1000);
            }
        })

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image style={styles.logo} source={require('../assets/images/banner.png')} resizeMode='contain' />
                <ActivityIndicator size={50} color={ColorTheme.secondary} style={styles.loader} animating={true} />
            </SafeAreaView>
        );
    }
}