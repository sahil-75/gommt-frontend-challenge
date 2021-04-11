import React, { Component } from 'react';
import { SafeAreaView, View, Text, Image, ActivityIndicator, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppTitle, ColorTheme, PROPERTIES } from '../utils/constants';
import { styles } from '../utils/globalStyles';

const { width, height } = Dimensions.get('window');

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    componentDidMount() {
        //this.redirect();
    }

    validateLogin() {
        const { navigate } = this.props.navigation;
        //console.log(this.state.username, this.state.password);
        if (this.state.username === 'sahil_75' && this.state.password === 'GoMMT@123') {
            AsyncStorage.setItem('isLoggedIn', 'Y');
            this.setState({
                username: '',
                password: ''
            });
            navigate('Home');
        } else {
            Alert.alert('Invalid Username and/or Password. Try Again!');
        }
    }

    render() {
        return (
            <SafeAreaView style={[styles.container, { alignItems: 'center' }]}>
                <Image style={{ width: (width / 1.5), marginBottom: 0, height: 100 }} source={require('../assets/images/banner.png')} resizeMode='contain' />
                <View style={{ alignItems: 'center', padding: 20 }}>
                    <TextInput value={this.state.username} onChangeText={(text) => this.setState({ username: text })} placeholder='Username / Email Id' placeholderTextColor={ColorTheme.whiteFaded} style={[styles.box, styles.textInput, { width: 250 }]} />
                    <TextInput value={this.state.password} onChangeText={(text) => this.setState({ password: text })} placeholder='Password' secureTextEntry={true} placeholderTextColor={ColorTheme.whiteFaded} style={[styles.box, styles.textInput, { width: 250 }]} />
                    <TouchableOpacity style={[styles.button, { opacity: (this.state.username.length == 0 || this.state.password.length == 0) ? 0.5 : 1 }]} activeOpacity={0.5} onPress={() => this.validateLogin()} disabled={(this.state.username.length == 0 || this.state.password.length == 0)}>
                        <Text style={[styles.h4, { color: ColorTheme.primary }]}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}