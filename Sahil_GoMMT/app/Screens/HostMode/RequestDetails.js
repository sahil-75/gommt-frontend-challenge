import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { ColorTheme } from '../../utils/constants';
import { styles } from '../../utils/globalStyles';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
const { width, height } = Dimensions.get('window');

export default class RequestDetails extends Component {
    render() {
        const { name, propertyName, msg_owner, no_adults, no_children, no_nights, checkInDate, checkOutDate, meal_pref, total_price, owners_price, status } = this.props.route.params.item;
        return (
            <SafeAreaView style={[styles.container, { paddingHorizontal: 15 }]}>
                <HeaderWithBackButton title={propertyName} pop={this.props.navigation.goBack.bind(this)} />
                <View style={{ flex: 1, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                        <Text style={[styles.h2, { color: ColorTheme.whiteFaded }]}>Name</Text>
                        <Text style={[styles.h2, { color: ColorTheme.white }]}>{name}</Text>
                    </View>

                    <View style={{ marginBottom: 20, backgroundColor: ColorTheme.primaryFaded, borderRadius: 5, padding: 15 }}>
                        <Text style={[styles.h4, { color: ColorTheme.whiteFaded, marginBottom: 10 }]}>Message for Owner</Text>
                        <Text style={[styles.h4, { color: ColorTheme.white }]}>{msg_owner}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={[styles.h4, { color: ColorTheme.whiteFaded }]}>Check-In</Text>
                        <Text style={[styles.h4, { color: ColorTheme.white }]}>{checkInDate}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={[styles.h4, { color: ColorTheme.whiteFaded }]}>Check-Out</Text>
                        <Text style={[styles.h4, { color: ColorTheme.white }]}>{checkOutDate}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={[styles.h4, { color: ColorTheme.whiteFaded }]}>No of Guest(s)</Text>
                        <Text style={[styles.h4, { color: ColorTheme.white }]}>{no_adults} Adults, {no_children} children</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={[styles.h4, { color: ColorTheme.whiteFaded }]}>Stay Duration</Text>
                        <Text style={[styles.h4, { color: ColorTheme.white }]}>{no_nights} Nights</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={[styles.h4, { color: ColorTheme.whiteFaded }]}>No of Guest(s)</Text>
                        <Text style={[styles.h4, { color: ColorTheme.white }]}>{no_adults} Adults, {no_children} children</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 }}>
                        <Text style={[styles.h4, { color: ColorTheme.whiteFaded }]}>Meal Plan</Text>
                        {meal_pref === 'Y' ?
                            <Text style={[styles.h4, { color: ColorTheme.white }]}>Yes</Text>
                            :
                            <Text style={[styles.h4, { color: ColorTheme.white }]}>No</Text>
                        }
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={[styles.h4, { color: ColorTheme.whiteFaded }]}>Payment Status</Text>
                        <Text style={[styles.h4, { color: ColorTheme.white }]}>Advance Paid</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={[styles.h4, { color: ColorTheme.whiteFaded }]}>Booking Amount</Text>
                        <Text style={[styles.h4, { color: ColorTheme.white }]}>{total_price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 }}>
                        <Text style={[styles.h4, { color: ColorTheme.whiteFaded }]}>Your share</Text>
                        <Text style={[styles.h4, { color: ColorTheme.white }]}>{owners_price}</Text>
                    </View>

                    {status === 'Approved' ?
                        <TouchableOpacity disabled style={[styles.BookButton, { backgroundColor: ColorTheme.secondaryFaded }]} onPress={() => this.props.navigation.navigate('BookHome', { item })}>
                            <Text style={[styles.h3, { color: ColorTheme.primary }]}>Approved</Text>
                        </TouchableOpacity>
                        :
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity style={[styles.BookButton, { backgroundColor: ColorTheme.orange, flex: 0.5, marginRight: 7 }]} onPress={() => this.props.navigation.navigate('MessageScreen', { approvalStatus: false })}>
                                <Text style={[styles.h3, { color: ColorTheme.primary }]}>Reject</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.BookButton, { backgroundColor: ColorTheme.secondary, flex: 0.5, marginLeft: 7 }]} onPress={() => this.props.navigation.navigate('MessageScreen', { approvalStatus: true })}>
                                <Text style={[styles.h3, { color: ColorTheme.primary }]}>Approve</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </SafeAreaView >
        );
    }
}

const localStyles = StyleSheet.create({
    item: {
        width: width - 60,
        height: width - 60,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
})