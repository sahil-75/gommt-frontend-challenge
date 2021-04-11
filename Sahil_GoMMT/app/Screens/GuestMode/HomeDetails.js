import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { ColorTheme, propertyImages } from '../../utils/constants';
import { styles } from '../../utils/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
const { width, height } = Dimensions.get('window');

export default class HomeDetails extends Component {
    _renderItem({ item, index }, parallaxProps) {
        return (
            <View style={localStyles.item}>
                <ParallaxImage
                    source={item.image}
                    containerStyle={localStyles.imageContainer}
                    style={localStyles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
        );
    }

    renderRating() {
        var i, ratingsList = [];
        for (i = 0; i < this.props.route.params.item.rating; i++) {
            ratingsList.push(<Icon name="star" size={25} color={ColorTheme.secondary} key={i} />)
        }
        for (i = this.props.route.params.item.rating; i < 5; i++) {
            ratingsList.push(<Icon name="star-outline" size={25} color={ColorTheme.secondary} key={i} />)
        }
        return ratingsList;
    }

    render() {
        const { isMMTAssured, distanceFromLandmark, propertyName, nRatings, location, tags, price } = this.props.route.params.item;
        const { item, isFromMyBookings } = this.props.route.params;
        return (
            <SafeAreaView style={[styles.container, { paddingHorizontal: 15 }]}>
                <HeaderWithBackButton title={propertyName} pop={this.props.navigation.goBack.bind(this)} />
                <View style={{ flex: 1, marginBottom: 10, alignItems: 'center' }}>
                    <Carousel
                        sliderWidth={width}
                        sliderHeight={width}
                        itemWidth={width - 60}
                        data={propertyImages}
                        renderItem={this._renderItem}
                        hasParallaxImages={true}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    {isMMTAssured &&
                        <View style={[styles.MMTAssured, { marginVertical: 7 }]}>
                            <Image source={require('../../assets/images/logo.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                            <Text>MMT Assured</Text>
                        </View>
                    }
                    <Text style={[styles.h3, { marginBottom: 5 }]}>{location}</Text>
                    <Text style={[styles.h3, { color: ColorTheme.whiteFaded, marginBottom: 10 }]}>{distanceFromLandmark}</Text>

                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={[styles.tags, { marginRight: 5 }]}>{tags[0]}</Text>
                        <Text style={[styles.tags, { marginRight: 5 }]}>{tags[1]}</Text>
                        <Text style={[styles.tags]}>{tags[2]}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        {this.renderRating()}
                        <Text style={[styles.h4, { color: ColorTheme.whiteFaded, marginLeft: 10 }]}>({nRatings} ratings)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={[styles.h2]}>{price}</Text>
                        {isMMTAssured &&
                            <View style={styles.MMTBestPrice}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, marginRight: 5 }}>$</Text>
                                <Text>MMT Best Price</Text>
                            </View>
                        }
                    </View>
                    {isFromMyBookings ?
                        item.status === 'Approved' ?
                            <TouchableOpacity disabled style={[styles.BookButton, { backgroundColor: ColorTheme.secondary }]} onPress={() => this.props.navigation.navigate('BookHome', { item })}>
                                <Text style={[styles.h3, { color: ColorTheme.primary }]}>Approved</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity disabled style={[styles.BookButton, { backgroundColor: ColorTheme.orange }]} onPress={() => this.props.navigation.navigate('BookHome', { item })}>
                                <Text style={[styles.h3, { color: ColorTheme.primary }]}>Awaiting Approval</Text>
                            </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.BookButton} onPress={() => this.props.navigation.navigate('BookHome', { item })}>
                            <Text style={styles.h3}>Book Now</Text>
                        </TouchableOpacity>
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