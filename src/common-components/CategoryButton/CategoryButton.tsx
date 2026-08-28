import { Pressable, Text } from 'react-native';
import { styles } from './CategoryButton.styles';

interface CategoryButtonProps {
    text: string;
    selected?: boolean;
    onPress?: () => void;
}

export function CategoryButton({ text, selected = false, onPress }: CategoryButtonProps) {
    return (
        <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected }}
            onPress={onPress}
            style={[styles.categoryButton, selected && styles.selectedCategoryButton]}
        >
            <Text style={[styles.categoryText, selected && styles.selectedCategoryText]}>{text}</Text>
        </Pressable>
    );
}

