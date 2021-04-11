import React, { Component } from 'react';
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { ColorTheme } from '../utils/constants';
import { styles } from '../utils/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');

export default class RequestDetails extends Component {
    onLogout() {
        AsyncStorage.setItem('isLoggedIn', 'N');
        this.props.navigation.goBack();
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 0.3, marginTop: 10, alignItems: 'center' }}>
                    <Text style={[styles.h3, { color: ColorTheme.whiteFaded, paddingTop: 10 }]}>PROFILE</Text>
                </View>
                <View style={{ flex: 0.7, backgroundColor: ColorTheme.primaryFaded }}>
                    <TouchableOpacity activeOpacity={0.7} style={[styles.profileOptions, { marginTop: 125 }]}>
                        <View style={styles.menuIcon}>
                            <Icon name="notifications" size={20} color={ColorTheme.whiteFaded} />
                        </View>
                        <Text style={[styles.h3, { color: ColorTheme.white }]}>Notification Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.profileOptions}>
                        <View style={styles.menuIcon}>
                            <Icon name="payments" size={20} color={ColorTheme.whiteFaded} />
                        </View>
                        <Text style={[styles.h3, { color: ColorTheme.white }]}>Payment Methods</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.profileOptions}>
                        <View style={styles.menuIcon}>
                            <Icon name="share" size={20} color={ColorTheme.whiteFaded} />
                        </View>
                        <Text style={[styles.h3, { color: ColorTheme.white }]}>Share App</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.profileOptions} onPress={() => this.onLogout()}>
                        <View style={[styles.menuIcon, { paddingLeft: 12, paddingRight: 8 }]}>
                            <Icon name="logout" size={20} color={ColorTheme.whiteFaded} />
                        </View>
                        <Text style={[styles.h3, { color: ColorTheme.white }]}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileBox}>
                    <View style={[styles.displayPicture, { marginRight: 0 }]}>
                        <Icon name="person" size={50} color={ColorTheme.white} />
                    </View>
                    <Text style={[styles.h1, { color: ColorTheme.white, marginTop: 20 }]}>Sahil Kalyani</Text>
                    <Text style={[styles.h3, { color: ColorTheme.whiteFaded, marginTop: 7 }]}>@sahil_75</Text>
                </View>
            </SafeAreaView>
        );
    }
}