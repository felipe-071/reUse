import { Text } from "react-native";
import { styles } from './HeadingTwo.styles'

interface HeadingTwoProps{
    content: string
}

export default function HeadingTwo({content}: HeadingTwoProps){
    return(
        <Text style={styles.h2}>{content}</Text>
    )
}

