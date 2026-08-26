import { Pressable, StyleSheet, Text, View } from "react-native"
import { theme } from "../../styles/theme"


interface TabBarButtonProps {
    description: string,
    children: React.ReactNode,
    current?: boolean
}

export default function TabBarButton({ description, children, current }: TabBarButtonProps) {
    return (
        <Pressable style={styles.button}>
            <View style={[styles.iconPadding, current && styles.currentBg]}>
                {children}
            </View>
            <Text style={[styles.text, current && styles.current]}>
                {description}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
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
        width: 50
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