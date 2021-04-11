import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ColorTheme } from '../utils/constants';
import { styles } from '../utils/globalStyles';

export default class RequestComponent extends Component {
    render() {
        //console.log(this.props.item);
        const { _id, name, propertyName, checkInDate, checkOutDate, meal_pref, status } = this.props.item;
        return (
            <TouchableOpacity style={styles.tile} onPress={this.props.onPressItem} key={_id}>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.h3, { marginBottom: 10 }]}>{name}</Text>
                    <Text numberOfLines={1} style={[styles.h4, { marginBottom: 20 }]}>{propertyName}</Text>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 0.4 }}>
                            <Text style={[styles.h4, { color: ColorTheme.whiteFaded, marginBottom: 5 }]}>Check-In</Text>
                            <Text style={[styles.h4, { color: ColorTheme.white, marginBottom: 5 }]}>{checkInDate}</Text>
                        </View>
                        <View style={{ flex: 0.4 }}>
                            <Text style={[styles.h4, { color: ColorTheme.whiteFaded, marginBottom: 5 }]}>Check-Out</Text>
                            <Text style={[styles.h4, { color: ColorTheme.white, marginBottom: 5 }]}>{checkOutDate}</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={[styles.h4, { color: ColorTheme.whiteFaded, marginBottom: 5 }]}>Meals</Text>
                            <Text style={[styles.h4, { color: ColorTheme.white, marginBottom: 5 }]}>{meal_pref}</Text>
                        </View>
                    </View>

                    {this.props.isFromMyBookings && status === 'Approved' ?
                        <TouchableOpacity disabled style={[styles.BookButton, { marginTop: 15, backgroundColor: ColorTheme.secondaryFaded, elevation: 0 }]} onPress={() => this.props.navigation.navigate('BookHome', { item })}>
                            <Text style={[styles.h3, { color: ColorTheme.primary }]}>Approved</Text>
                        </TouchableOpacity>
                        :
                        this.props.isFromMyBookings && status === 'Pending' ?
                            <TouchableOpacity disabled style={[styles.BookButton, { marginTop: 15, backgroundColor: ColorTheme.whiteFaded, elevation: 0 }]} onPress={() => this.props.navigation.navigate('BookHome', { item })}>
                                <Text style={[styles.h3, { color: ColorTheme.primary }]}>Pending</Text>
                            </TouchableOpacity>
                            :
                            null
                    }
                </View>
            </TouchableOpacity >
        );
    }
}