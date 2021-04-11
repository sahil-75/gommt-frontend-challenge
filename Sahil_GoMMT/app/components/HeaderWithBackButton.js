import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ColorTheme } from '../utils/constants';
import { styles } from '../utils/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HeaderWithBackButton extends Component {
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={{ padding: 5, marginRight: 10 }} onPress={() => this.props.pop()}>
                    <Icon name="arrow-back" size={25} color={ColorTheme.white} />
                </TouchableOpacity>
                <Text style={styles.h2}>{this.props.title}</Text>
            </View>
        );
    }
}