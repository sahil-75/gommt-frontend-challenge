import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ColorTheme } from '../utils/constants';
import { styles } from '../utils/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class PropertyComponent extends Component {
    renderRating() {
        var i, ratingsList = [];
        for (i = 0; i < this.props.item.rating; i++) {
            ratingsList.push(<Icon name="star" size={25} color={ColorTheme.secondary} key={i} />)
        }
        for (i = this.props.item.rating; i < 5; i++) {
            ratingsList.push(<Icon name="star-outline" size={25} color={ColorTheme.secondary} key={i} />)
        }
        return ratingsList;
    }

    render() {
        //console.log(this.props.item);
        const { _id, isMMTAssured, distanceFromLandmark, propertyName, nRatings, location, tags, status } = this.props.item;
        return (
            <TouchableOpacity style={styles.tile} onPress={this.props.onPressItem} key={_id}>
                {isMMTAssured &&
                    <View style={styles.MMTAssured}>
                        <Image source={require('../assets/images/logo.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                        <Text>MMT Assured</Text>
                    </View>
                }
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
                    <View style={{ flex: 0.5, alignItems: 'center' }}>
                        <Image source={require('../assets/images/sm/p1.jpg')} resizeMode='contain' style={{ width: '95%', height: 100 }} />
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 0.5, alignItems: 'center' }}>
                                <Image source={require('../assets/images/sm/p2.jpg')} resizeMode='contain' style={{ width: '95%', height: 50 }} />
                            </View>
                            <View style={{ flex: 0.5, alignItems: 'center' }}>
                                <Image source={require('../assets/images/sm/p3.jpg')} resizeMode='contain' style={{ width: '95%', height: 50 }} />
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 0.5, alignItems: 'center' }}>
                                <Image source={require('../assets/images/sm/p4.jpg')} resizeMode='contain' style={{ width: '95%', height: 50 }} />
                            </View>
                            <View style={{ flex: 0.5, alignItems: 'center' }}>
                                <Image source={require('../assets/images/sm/p5.jpg')} resizeMode='contain' style={{ width: '95%', height: 50 }} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.h3, { marginBottom: 10 }]}>{propertyName}</Text>
                    <Text numberOfLines={1} style={[styles.h4, { marginBottom: 5 }]}>{location}</Text>
                    <Text style={[styles.h4, { color: ColorTheme.whiteFaded, marginBottom: 10 }]}>{distanceFromLandmark}</Text>

                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={[styles.tags, { marginRight: 5 }]}>{tags[0]}</Text>
                        <Text style={[styles.tags, { marginRight: 5 }]}>{tags[1]}</Text>
                        <Text style={[styles.tags]}>{tags[2]}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {this.renderRating()}
                        <Text style={[styles.h4, { color: ColorTheme.whiteFaded, marginLeft: 10 }]}>({nRatings} ratings)</Text>
                    </View>
                    {this.props.isFromMyBookings && status === 'Approved' ?
                        <TouchableOpacity disabled style={[styles.BookButton, { marginTop: 15, backgroundColor: ColorTheme.secondaryFaded, elevation: 0 }]} onPress={() => this.props.navigation.navigate('BookHome', { item })}>
                            <Text style={[styles.h3, { color: ColorTheme.primary }]}>Approved</Text>
                        </TouchableOpacity>
                        :
                        this.props.isFromMyBookings && status === 'Awaiting Approval' ?
                            <TouchableOpacity disabled style={[styles.BookButton, { marginTop: 15, backgroundColor: ColorTheme.orange, elevation: 0 }]} onPress={() => this.props.navigation.navigate('BookHome', { item })}>
                                <Text style={[styles.h3, { color: ColorTheme.primary }]}>Awaiting Approval</Text>
                            </TouchableOpacity>
                            :
                            null
                    }
                </View>
            </TouchableOpacity >
        );
    }
}