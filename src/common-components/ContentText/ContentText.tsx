import { StyleSheet, Text } from "react-native";
import { theme } from '../../styles/theme'

interface ContentTextProps{
    content: string
}

export default function ContentText({content} : ContentTextProps){
    return(
        <Text>{content}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: theme.colors.text1
    }
})