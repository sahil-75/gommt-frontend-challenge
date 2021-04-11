import React, { Component } from 'react';
import { SafeAreaView, Text, FlatList, View } from 'react-native';
import { styles } from '../../utils/globalStyles';
import { ColorTheme, bookedPropertiesList } from '../../utils/constants';
import PropertyComponent from '../../components/PropertyComponent';

export default class MyBookings extends Component {
    onPressItem(item) {
        var isFromMyBookings = true;
        this.props.navigation.navigate('HomeDetails', { item, isFromMyBookings });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={bookedPropertiesList}
                    keyExtractor={(item, index) => { return item._id }}
                    renderItem={
                        ({ item }) => {
                            return (
                                <PropertyComponent isFromMyBookings={true} item={item} onPressItem={() => { this.onPressItem(item) }} />
                            )
                        }
                    }
                    style={{ marginHorizontal: 20, paddingTop: 20 }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View style={{ marginBottom: 15, marginLeft: 5 }}>
                            <Text style={[styles.h1, { marginBottom: 5 }]}>Welcome, <Text style={[styles.h1, { color: ColorTheme.secondary }]} >Sahil</Text></Text>
                            <Text style={styles.h4}>Here are the bookings you made...</Text>
                        </View>
                    }
                />
            </SafeAreaView>
        );
    }
}