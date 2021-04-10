import { Dimensions, StyleSheet } from 'react-native';
import { ColorTheme } from '../utils/constants';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorTheme.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    logo: {
        height: 100,
        marginBottom: 50
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    h1: {
        fontFamily: 'PingFang SC Regular',
        color: ColorTheme.white,
        alignItems: 'center',
        fontSize: 28,
    },
    h2: {
        fontFamily: 'PingFang SC Regular',
        color: ColorTheme.white,
        alignItems: 'center',
        fontSize: 24,
    },
    h3: {
        fontFamily: 'PingFang SC Regular',
        color: ColorTheme.white,
        alignItems: 'center',
        fontSize: 20,
    },
    h4: {
        fontFamily: 'PingFang SC Regular',
        color: ColorTheme.white,
        alignItems: 'center',
        fontSize: 15,
    },
    box: {
        borderColor: ColorTheme.secondary,
        borderWidth: 1,
        borderRadius: 5,
    },
    textInput: {
        width: 250,
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
    }
});