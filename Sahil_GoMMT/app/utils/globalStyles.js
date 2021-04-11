import { Dimensions, StyleSheet } from 'react-native';
import { ColorTheme } from '../utils/constants';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorTheme.primary,
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        height: 100,
        marginBottom: 50
    },
    header: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: width,
        paddingVertical: 15,
    },
    h0: {
        fontFamily: 'PingFang SC Regular',
        color: ColorTheme.white,
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 32,
    },
    h1: {
        fontFamily: 'PingFang SC Regular',
        color: ColorTheme.white,
        alignItems: 'flex-start',
        fontSize: 28,
    },
    h2: {
        fontFamily: 'PingFang SC Regular',
        color: ColorTheme.white,
        fontWeight: 'bold',
        fontSize: 25,
    },
    h3: {
        fontFamily: 'PingFang SC Regular',
        color: ColorTheme.white,
        fontSize: 20,
    },
    h4: {
        fontFamily: 'PingFang SC Regular',
        color: ColorTheme.white,
        alignItems: 'flex-start',
        fontSize: 15,
    },
    box: {
        borderColor: ColorTheme.secondary,
        borderWidth: 1,
        borderRadius: 5,
    },
    tile: {
        backgroundColor: ColorTheme.primaryFaded,
        justifyContent: 'space-between',
        marginBottom: 10,
        borderRadius: 5,
        padding: 20
    },
    textInput: {
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        color: ColorTheme.white
    },
    button: {
        backgroundColor: ColorTheme.secondary,
        color: ColorTheme.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        paddingVertical: 7,
        paddingHorizontal: 15,
    },
    MMTAssured: {
        backgroundColor: ColorTheme.secondary,
        paddingHorizontal: 5,
        paddingVertical: 2,
        width: 120,
        flexDirection: 'row',
        alignItems: 'center',
    },
    MMTBestPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        paddingHorizontal: 7,
        backgroundColor: ColorTheme.orange
    },
    BookButton: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        elevation: 5,
        backgroundColor: ColorTheme.blue
    },
    tags: {
        backgroundColor: ColorTheme.whiteFaded,
        color: ColorTheme.primary,
        borderRadius: 4,
        fontSize: 12,
        paddingHorizontal: 5
    },
    modalBackdrop: {
        position: 'absolute',
        width: width,
        height: height,
    },
    profileBox: {
        backgroundColor: ColorTheme.primaryFaded,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: width - 40,
        borderRadius: 10,
        top: width / 5,
        elevation: 10,
        padding: 20,
        margin: 20,
    },
    profileOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginTop: 20
    },
    displayPicture: {
        backgroundColor: ColorTheme.whiteFaded,
        borderRadius: 100,
        marginRight: 20,
        padding: 10,
    },
    menuIcon: {
        backgroundColor: ColorTheme.primary,
        borderRadius: 100,
        marginRight: 15,
        padding: 10,
    }
});