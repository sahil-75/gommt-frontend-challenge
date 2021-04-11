import React, { Component } from 'react';
import { SafeAreaView, Text, FlatList, View } from 'react-native';
import { styles } from '../../utils/globalStyles';
import { ColorTheme, bookingRequestList } from '../../utils/constants';
import RequestComponent from '../../components/RequestComponent';

export default class MyRequests extends Component {
    onPressItem(item) {
        var isFromMyBookings = true;
        this.props.navigation.navigate('RequestDetails', { item });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={bookingRequestList}
                    keyExtractor={(item, index) => { return item._id }}
                    renderItem={
                        ({ item }) => {
                            return (
                                <RequestComponent isFromMyBookings={true} item={item} onPressItem={() => { this.onPressItem(item) }} />
                            )
                        }
                    }
                    style={{ marginHorizontal: 20, paddingTop: 20 }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View style={{ marginBottom: 15, marginLeft: 5 }}>
                            <Text style={[styles.h1, { marginBottom: 5 }]}>Welcome, <Text style={[styles.h1, { color: ColorTheme.secondary }]} >Sahil</Text></Text>
                            <Text style={styles.h4}>Here are the bookings made for your properties...</Text>
                        </View>
                    }
                />
            </SafeAreaView>
        );
    }
}