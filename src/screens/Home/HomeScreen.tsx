import { Bell, Leaf, Filter, Tags, Smartphone, Shirt, BookOpen, Armchair, Dumbbell, MoreHorizontal } from 'lucide-react-native'
import { CategoryButton } from '../../common-components/CategoryButton';
// import ContentText from '../../common-components/ContentText/ContentText'
import HeadingTwo from '../../common-components/HeadingTwo/HeadingTwo';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../styles/theme'
import { useState } from 'react';
import Card from '../../components/Card/Card';

export function HomeScreen() {
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const categories = [
        { label: 'Todos', icon: <Tags size={14} /> },
        { label: 'Eletrônicos', icon: <Smartphone size={14} /> },
        { label: 'Roupas', icon: <Shirt size={14} /> },
        { label: 'Livros', icon: <BookOpen size={14} /> },
        { label: 'Móveis', icon: <Armchair size={14} /> },
        { label: 'Esportes', icon: <Dumbbell size={14} /> },
        { label: 'Outros', icon: <MoreHorizontal size={14} /> }
    ];


    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            <View style={[styles.alignmentViews]}>
                <View>
                    <Text style={styles.title}>
                        Re<Text style={styles.titleHighlight}>Use</Text>
                    </Text>
                    <Text>São Paulo, SP - 4.312 itens próximos</Text>
                </View>

                <button style={styles.notificationsButton}>
                    <Bell size='20' />
                </button> {/*Notificações*/}

                {/* <StatusBar style="auto" /> */}
            </View>

            <View style={styles.alignSearch}>
                <input type="search" name="" id="" placeholder="Buscar itens para trocar..." style={styles.searchInput} />
                <button style={styles.filterButton}>
                    <Filter />
                </button>
            </View>

            <View style={styles.impactView}>
                <View style={styles.alignImpactView}>
                    <View style={styles.bgLeafImpact}>
                        <Leaf />
                    </View>
                    <View>
                        {/* <View>ícone de Folha</View> */}
                        <Text style={[styles.impact, styles.font]}>Seu impacto este mês</Text>
                        <Text style={[styles.measurement, styles.fontBold]}>Evitou xx kg de CO2</Text>
                    </View>
                </View>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categoriesScrollView}
                contentContainerStyle={styles.categories}
            >
                {categories.map((category) => (
                    <CategoryButton
                        key={category.label}
                        text={category.label}
                        icon={category.icon}
                        selected={selectedCategory === category.label}
                        onPress={() => setSelectedCategory(category.label)}
                    />
                ))}
            </ScrollView>

            <View style={styles.alignmentViews}>
                <HeadingTwo content="Perto de você"/>
                <button style={styles.seeMoreButton}>Ver todos {'>'}</button>
            </View>

            <Card />
            <Card />
            <Card />
            <Card />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    contentContainer: {
        padding: 16,
    },

    font: {
        fontFamily: 'Inter_400'
    },

    fontBold: {
        fontFamily: 'Inter_600'
    },

    // totalViews: {
    //     flexDirection: 'row',
    // },

    title: {
        fontSize: 32,
        fontFamily: 'Fraunces_800',
        color: theme.colors.secondary
    },

    titleHighlight: {
        color: theme.colors.primary
    },

    notificationsButton: {
        height: 36,
        width: 36,
        borderRadius: '100%',
        borderWidth: 0,
        backgroundColor: theme.colors.surface,
        color: theme.colors.primary
    },

    alignmentViews: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    alignSearch: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 16
    },

    searchInput: {
        flex: 1,
        padding: 12,
        color: theme.colors.border,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.colors.border,
        borderRadius: 12,
        fontSize: 16
    },

    filterButton: {
        borderRadius: 12,
        aspectRatio: 1,
        borderWidth: 0,
        backgroundColor: theme.colors.primary,
        height: '100%',
        color: '#FFF'
    },

    impactView: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.text2,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 16,
    },

    categoriesScrollView: {
        flexGrow: 0
    },

    categories: {
        gap: 8,
        paddingVertical: 8
    },

    alignImpactView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12

    },

    bgLeafImpact: {
        backgroundColor: '#66885e',
        padding: 6,
        borderRadius: 12
    },

    impact: {
        color: theme.colors.text2,
        fontSize: 12
    },

    measurement: {
        color: theme.colors.text2,
        fontSize: 16
    },

    seeMoreButton: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        fontFamily: 'Inter_600',
        color: theme.colors.primary,
    }
});