import React, { Component } from 'react';
import { SafeAreaView, Text, FlatList, View } from 'react-native';
import { styles } from '../../utils/globalStyles';
import { ColorTheme, propertiesList } from '../../utils/constants';
import PropertyComponent from '../../components/PropertyComponent';

export default class FindHomes extends Component {
    onPressItem(item) {
        this.props.navigation.navigate('HomeDetails', { item });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={propertiesList}
                    keyExtractor={(item, index) => { return item._id }}
                    renderItem={
                        ({ item }) => {
                            return (
                                <PropertyComponent item={item} onPressItem={() => { this.onPressItem(item) }} />
                            )
                        }
                    }
                    style={{ marginHorizontal: 20, paddingTop: 20 }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View style={{ marginBottom: 15, marginLeft: 5 }}>
                            <Text style={[styles.h1, { marginBottom: 5 }]}>Welcome, <Text style={[styles.h1, { color: ColorTheme.secondary }]} >Sahil</Text></Text>
                            <Text style={styles.h4}>Take a look at our exclusive Home Stays...</Text>
                        </View>
                    }
                />
            </SafeAreaView>
        );
    }
}