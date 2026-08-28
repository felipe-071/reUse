import { StyleSheet } from 'react-native'
import { theme } from './theme'

export const globalStyles = StyleSheet.create({
    defaultShadow: {
        boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.08)'
    },

    bodyFont: {
        fontFamily: 'Inter_400',
        fontSize: 14,
        color: theme.colors.text1
}

})