import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    scrollContainer: {
        marginBottom: 52
    },

    contentContainer: {
        padding: 16,
    },

    font: {
        fontFamily: 'Inter_400'
    },

    fontBold: {
        fontFamily: 'Inter_600'
    },

    title: {
        fontSize: 32,
        fontFamily: 'Fraunces_800',
        color: theme.colors.secondary
    },

    highlightTitle: {
        color: theme.colors.primary
    },

    alignHightlightLocation: {
        color: theme.colors.text1,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 4,
    },

    highlightLocation: {
        color: theme.colors.secondary,
        fontSize: 12,
        fontFamily: 'Inter_400'
    },

    currentLocation: {
        color: theme.colors.primary,
        textDecorationLine: 'underline',
        fontFamily: 'Inter_400',
        fontSize: 12
    },

    notificationsButton: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: 14,
        height: 36,
        width: 36,
        borderRadius: '100%',
        borderWidth: 0,
        backgroundColor: theme.colors.surface,
        color: theme.colors.primary
    },

    alignmentViews: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    categoriesScrollView: {
        flexGrow: 0,
        // paddingTop: 8,
        paddingBottom: 12
    },

    categories: {
        gap: 8,
    },

    gridTop: {
        marginBottom: 12,
        marginTop: 12,

    },

    seeMoreButton: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        color: theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center'
    },

    seeMoreButtonText: {
        fontFamily: 'Inter_600',
        fontSize: 14,
        color: theme.colors.primary,
    },

    cardItem: {
        flex: 1,
    },
    

    cardRow: {
        gap: 12,
        marginBottom: 12,
    },

    mainMenu: {
        backgroundColor: theme.colors.surface,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 40
    }
})
