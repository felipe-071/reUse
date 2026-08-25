import { StyleSheet, Text } from "react-native";
import { theme } from '../../styles/theme'

interface HeadingThreeProps{
    content: string
}

export default function HeadingThree({content}: HeadingThreeProps){
    return(
        <Text style={styles.h3}>{content}</Text>
    )
}

const styles = StyleSheet.create({
    h3: {
        color: theme.colors.secondary,
        fontSize: 14,
        fontFamily: 'Inter_600'
    }
})