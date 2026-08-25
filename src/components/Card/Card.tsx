import { Image, StyleSheet, View } from "react-native";
import { theme } from '../../styles/theme'
import HeadingThree from '../../common-components/HeadingThree/HeadingThree'

export default function Card() {
    return (
        <View style={styles.card}>
            <View>
                <Image
                    source={require('../../../assets/item-card-mochila.png')}
                />
            </View>
            <View style={styles.cardDescription}>
                <HeadingThree content="Mochila escolar nova" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.colors.surface,
        borderRadius: 16,
        width: 'auto',
        alignSelf: 'flex-start',
        overflow: 'hidden',
    },

    cardDescription: {
        padding: 10
    }
})