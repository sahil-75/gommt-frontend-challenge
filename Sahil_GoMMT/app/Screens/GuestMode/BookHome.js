import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { styles } from '../../utils/globalStyles';
import { ColorTheme } from '../../utils/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import CalendarPicker from 'react-native-calendar-picker';
import Modal from 'react-native-modal';
const { width, height } = Dimensions.get('window');

export default class BookHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkInModalVisible: false,
            checkOutModalVisible: false,
            checkInDate: new Date(),
            checkOutDate: new Date(),
            no_adults: 0,
            no_children: 0,
            meal_pref: 'N',
            name: ''
        };
        console.log(this.state.checkInDate, this.state.checkOutDate);
    }

    render() {
        return (
            <SafeAreaView style={[styles.container, { paddingHorizontal: 15 }]}>
                <HeaderWithBackButton title={this.props.route.params.item.propertyName} pop={this.props.navigation.goBack.bind(this)} />
                <Text style={[styles.h3, { marginLeft: 10, marginBottom: 20 }]}>Booking Details</Text>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TextInput onChangeText={(text) => this.setState({ name: text })} placeholder='Full Name' placeholderTextColor={ColorTheme.whiteFaded} style={[styles.box, styles.textInput, { width: width - 50 }]} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View>
                            <Text style={[styles.h4, { marginBottom: 5 }]}>Check-In Date</Text>
                            <TouchableOpacity onPress={() => this.setState({ checkInModalVisible: true })} style={[styles.box, styles.textInput, { flexDirection: 'row', alignItems: 'center' }]}>
                                <Text style={{ color: ColorTheme.white }} > {this.state.checkInDate.toDateString()}</Text>
                                <Icon name="calendar-today" size={15} color={ColorTheme.white} style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={[styles.h4, { marginBottom: 5 }]}>Check-Out Date</Text>
                            <TouchableOpacity onPress={() => this.setState({ checkOutModalVisible: true })} style={[styles.box, styles.textInput, { flexDirection: 'row', alignItems: 'center' }]}>
                                <Text style={{ color: ColorTheme.white }} > {this.state.checkOutDate.toDateString()}</Text>
                                <Icon name="calendar-today" size={15} color={ColorTheme.white} style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TextInput numeric keyboardType={'numeric'} onChangeText={(text) => this.setState({ no_adults: text })} placeholder='Adults' placeholderTextColor={ColorTheme.whiteFaded} style={[styles.box, styles.textInput, { width: 95 }]} />
                        <TextInput numeric keyboardType={'numeric'} onChangeText={(text) => this.setState({ no_children: text })} placeholder='Children' placeholderTextColor={ColorTheme.whiteFaded} style={[styles.box, styles.textInput, { width: 95 }]} />
                        <TextInput onChangeText={(text) => this.setState({ meal_pref: text })} placeholder='Meals (Y/N)' placeholderTextColor={ColorTheme.whiteFaded} style={[styles.box, styles.textInput, { width: 100 }]} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                        <TextInput numberOfLines={5} onChangeText={(text) => this.setState({ message: text })} placeholder='Message for owner' placeholderTextColor={ColorTheme.whiteFaded} style={[styles.box, styles.textInput, { width: width - 50, height: 160 }]} />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity style={[styles.BookButton, { backgroundColor: ColorTheme.secondaryFaded, width: 200 }]} onPress={() => this.props.navigation.navigate('MessageScreen', { isFromBookHome: true, bookingStatus: true })}>
                            <Text style={[styles.h3, { color: ColorTheme.primary }]}>Confirm Booking</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal visible={this.state.checkInModalVisible} onBackdropPress={() => this.setState({ checkInModalVisible: false })} onRequestClose={() => this.setState({ checkInModalVisible: false })}>
                    <View style={{ marginVertical: 150, marginHorizontal: 15, paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center', height: 300, backgroundColor: ColorTheme.white }}>
                        <CalendarPicker
                            onDateChange={(date) => this.setState({ checkInDate: new Date(date) })}
                            minDate={new Date()}
                            maxDate={new Date("2021-12-31")}
                            scrollable={true}
                            width={width - 50}
                        />
                    </View>
                </Modal>
                <Modal visible={this.state.checkOutModalVisible} onBackdropPress={() => this.setState({ checkOutModalVisible: false })} onRequestClose={() => this.setState({ checkOutModalVisible: false })}>
                    <View style={{ marginVertical: 150, marginHorizontal: 15, paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center', height: 300, backgroundColor: ColorTheme.white }}>
                        <CalendarPicker
                            onDateChange={(date) => this.setState({ checkOutDate: new Date(date) })}
                            minDate={new Date()}
                            maxDate={new Date("2021-12-31")}
                            scrollable={true}
                            width={width - 50}
                        />
                    </View>
                </Modal>
            </SafeAreaView >
        );
    }
}