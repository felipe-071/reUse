import { StyleSheet, Text } from "react-native";
import { theme } from '../../styles/theme'

interface HeadingTwoProps{
    content: string
}

export default function HeadingTwo({content}: HeadingTwoProps){
    return(
        <Text style={styles.h2}>{content}</Text>
    )
}

const styles = StyleSheet.create({
    h2: {
        color: theme.colors.secondary,
        fontSize: 16,
        fontFamily: 'Inter_700'
    }
})