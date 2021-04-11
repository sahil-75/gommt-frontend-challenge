import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ColorTheme } from '../utils/constants';
import { styles } from '../utils/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MessageScreen extends Component {
    componentDidMount() {
        this.redirect();
    }

    async redirect() {
        setTimeout(() => this.props.navigation.goBack(), 7000);
    }

    render() {
        return (
            <SafeAreaView style={[styles.container, { alignItems: 'center' }]}>
                {this.props.route.params.approvalStatus ?
                    <View style={{ alignItems: 'center' }}>
                        <Icon name="celebration" size={150} color={ColorTheme.secondary} />
                        <Text style={[styles.h0, { color: ColorTheme.secondary }]}>Booking Request Approved</Text>
                    </View>
                    :
                    <View style={{ alignItems: 'center' }}>
                        <Icon name="warning" size={150} color={ColorTheme.orange} />
                        <Text style={[styles.h0, { color: ColorTheme.orange }]}>Booking Request Rejected</Text>
                    </View>
                }
            </SafeAreaView>
        );
    }
}