import { Pressable, Text, StyleSheet } from 'react-native';
import type { ReactNode } from 'react';
import { theme } from '../styles/theme';

interface CategoryButtonProps {
    text: string;
    icon?: ReactNode;
    selected?: boolean;
    onPress?: () => void;
}

export function CategoryButton({ text, icon, selected = false, onPress }: CategoryButtonProps) {
    return (
        <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected }}
            onPress={onPress}
            style={[styles.categoryButton, selected && styles.selectedCategoryButton]}
        >
            {icon}
            <Text style={[styles.categoryText, selected && styles.selectedCategoryText]}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    categoryButton: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.surface,
    },

    selectedCategoryButton: {
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.primary
    },

    categoryText: {
        color: theme.colors.text1,
        fontSize: 12,
        fontWeight: '600'
    },

    selectedCategoryText: {
        color: theme.colors.text2
    }
})