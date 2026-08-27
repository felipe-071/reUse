import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
    mainMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.background,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderColor: theme.colors.border,
        borderTopWidth: 1
    },

    mainButton: {
        backgroundColor: theme.colors.secondary,
        padding: 10,
        borderRadius: 50,
        transform: [{ translateY: '-50%' }],
        color: '#FFF'
    },
})
