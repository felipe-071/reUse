import { theme } from '../../styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    alignSearch: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 16,
        position: 'relative'
    },

    searchIcon: {
        position: 'absolute',
        alignSelf: 'center',
        paddingHorizontal: 12,
        color: theme.colors.text3
    },

    searchInput: {
        flex: 1,
        padding: 12,
        paddingLeft: 36,
        color: theme.colors.text3,
        backgroundColor: theme.colors.surface,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.colors.border,
        borderRadius: 12,
        fontSize: 14,
        fontFamily: 'Inter_400'
    },

    filterButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        aspectRatio: 1,
        borderWidth: 1,
        backgroundColor: theme.colors.surface,
        height: '100%',
        color: theme.colors.text1,
        borderColor: theme.colors.border
    },
})
