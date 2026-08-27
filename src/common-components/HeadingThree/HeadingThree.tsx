import { Text } from "react-native";
import { styles } from './HeadingThree.styles'

interface HeadingThreeProps{
    content: string
}

export default function HeadingThree({content}: HeadingThreeProps){
    return(
        <Text style={styles.h3}>{content}</Text>
    )
}

