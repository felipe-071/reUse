import { Image, Text, View, ImageSourcePropType } from "react-native";
import { MapPin } from "lucide-react-native";
import { styles } from './Card.styles'

interface CardProps {
    title: string,
    image: ImageSourcePropType,
    distance: string,
}

export default function Card({ title, image, distance }: CardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.cardImage} />
            </View>
            <View style={styles.cardDescription}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.alignCardDetails}>
                    <View style={styles.alignDistance}>
                        <MapPin size={12} />
                        <Text style={styles.distanceText}>{distance}</Text>
                    </View>
                        <View style={styles.itemStatus}>
                            <Text style={styles.itemStatusText}>Usado</Text>
                        </View>
                </View>
            </View>
        </View>
    )
}

