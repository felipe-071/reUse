import { Text } from "react-native";
import { styles } from './ContentText.styles'

interface ContentTextProps{
    content: string
}

export default function ContentText({content} : ContentTextProps){
    return(
        <Text style={styles.text}>{content}</Text>
    )
}

