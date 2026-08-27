import { StyleSheet } from 'react-native'
import { theme } from '../styles/theme'

export const styles = StyleSheet.create({
    categoryButton: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.surface,
    },

    selectedCategoryButton: {
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.primary
    },

    categoryText: {
        color: theme.colors.text1,
        fontSize: 12,
        fontWeight: '600'
    },

    selectedCategoryText: {
        color: theme.colors.text2
    }
})
