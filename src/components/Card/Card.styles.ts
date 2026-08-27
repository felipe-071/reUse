import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.colors.surface,
        borderRadius: 16,
        overflow: 'hidden',
        maxWidth: 185,
    },

    imageContainer: {
        alignItems: 'center',
    },

    cardImage: {
        height: 130,
        width: '100%'
    },

    cardDescription: {
        padding: 10
    },

    title: {
        fontFamily: 'Inter_600',
        fontSize: 14,
        color: theme.colors.text1
    },

    alignDistance: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        color: theme.colors.text3
    },

    distanceText: {
        fontFamily: 'Inter_400',
        color: theme.colors.text3
    },

    alignCardDetails: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 4
    },

    itemStatus: {
        color: theme.colors.primary,
        backgroundColor: '#b8cba980',
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 8
    },

    itemStatusText: {
        color: theme.colors.primary,
        fontFamily: 'Inter_500',
        fontSize: 12
    }
})
