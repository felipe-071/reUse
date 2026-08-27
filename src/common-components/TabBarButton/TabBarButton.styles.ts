import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter_400',
        fontSize: 12,
        color: theme.colors.text3,
        width: 54
    },

    text: {
        color: theme.colors.text3,
    },

    current: {
        color: theme.colors.primary,
        fontFamily: 'Inter_500'
    },

    iconPadding: {
        padding: 5,
        borderRadius: 50
    },

    currentBg: {
        backgroundColor: '#4b70423d',
    }
})
