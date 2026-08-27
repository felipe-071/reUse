import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../styles/global"
import { styles } from './TabBarButton.styles'


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
            <Text style={[styles.text, globalStyles.bodyFont, current && styles.current]}>
                {description}
            </Text>
        </Pressable>
    )
}

