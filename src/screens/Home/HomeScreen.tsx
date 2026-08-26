import {
    Bell,
    ChevronRight,
    Leaf,
    MapPin,
    Search,
    Settings2
} from 'lucide-react-native'

import { shadows } from '../../styles/global'

import { CategoryButton } from '../../common-components/CategoryButton';
// import ContentText from '../../common-components/ContentText/ContentText'
import HeadingTwo from '../../common-components/HeadingTwo/HeadingTwo';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { theme } from '../../styles/theme'
import { useState } from 'react';
import Card from '../../components/Card/Card';
import MainMenu from '../../components/MainMenu/MainMenu';



export function HomeScreen() {
    const [selectedCategory, setSelectedCategory] = useState('✨ Todos');
    
    const categories = [
        { label: '✨ Todos' },
        { label: '📱 Eletrônicos' },
        { label: '👕 Roupas' },
        { label: '📚 Livros' },
        { label: '🪑 Móveis' },
        { label: '⚽ Esportes' },
        { label: '••• Outros' }
    ];
    
const produtos = [
    { id: '1', title: 'Bicicleta Caloi', image: require('../../../assets/images/item-card-bicycle.png'), distance: '1,8 km' },
    { id: '2', title: 'Violão Yamaha F310', image: require('../../../assets/images/item-card-guitar.png'), distance: '2,7 km'},
    { id: '3', title: 'Mochila executiva', image: require('../../../assets/images/item-card-backpack.png'), distance: '0,9 km' },
    { id: '4', title: 'Tênis esportivo TD', image: require('../../../assets/images/item-card-tenis.png'), distance: '2,0 km' },
  ];

    return (
        <View style={styles.container}>
            <ScrollView
                style={[styles.container, styles.scrollContainer]}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}>

                <View style={styles.alignmentViews}>
                    <View>
                        <Text style={styles.title}>
                            Re<Text style={styles.highlightTitle}>Use</Text>
                        </Text>
                        <Text style={styles.font}> Boa tarde, Felipe 👋 | <Text style={styles.highlightItems}> <MapPin size={12} /> São Paulo, SP</Text></Text>
                    </View>

                    <Pressable style={[styles.notificationsButton, shadows]}>
                        <Bell size='20' />
                    </Pressable>

                </View>

                <View style={styles.alignSearch}>
                    <Search size={16} style={styles.searchIcon} />
                    <TextInput
                        placeholder="Buscar itens para trocar..."
                        style={[styles.searchInput, styles.font, shadows]}
                    />
                    <Pressable style={[styles.filterButton, shadows]}>
                        <Settings2 />
                    </Pressable>
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
                            selected={selectedCategory === category.label}
                            onPress={() => setSelectedCategory(category.label)}
                        />
                    ))}
                </ScrollView>

                <View style={[styles.alignmentViews, styles.gridTop]}>
                    <HeadingTwo content="Perto de você" />
                    <Pressable style={styles.seeMoreButton}>
                        <Text style={styles.seeMoreButtonText}>Ver todos </Text><ChevronRight size={16}/>
                    </Pressable>
                </View>

                <FlatList
                    data={produtos}
                    numColumns={2}
                    columnWrapperStyle={styles.cardRow}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.cardItem}>
                            <Card title={item.title} image={item.image} distance={item.distance} />
                        </View>
                    )}
                />
            </ScrollView>

            <MainMenu />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    scrollContainer: {
        marginBottom: 52
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

    highlightTitle: {
        color: theme.colors.primary
    },

    highlightItems: {
        color: theme.colors.primary,
        fontFamily: 'Inter_400',
        fontSize: 12
    },

    notificationsButton: {
        justifyContent: 'center',
        alignItems: 'center',
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
        marginVertical: 16,
        position: 'relative'
    },

    searchIcon: {
        position: 'absolute',
        alignSelf: 'center',
        paddingHorizontal: 12,
        color: theme.colors.text3
    },

    searchInput: {
        flex: 1,
        padding: 12,
        paddingLeft: 36,
        color: theme.colors.text3,
        backgroundColor: theme.colors.surface,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.colors.border,
        borderRadius: 12,
        fontSize: 14,
    },

    filterButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        aspectRatio: 1,
        borderWidth: 1,
        backgroundColor: theme.colors.surface,
        height: '100%',
        color: theme.colors.text1,
        borderColor: theme.colors.border
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

    gridTop: {
        marginVertical: 12
    },

    seeMoreButton: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        color: theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    seeMoreButtonText: {
        fontFamily: 'Inter_600',
        fontSize: 14,
        color: theme.colors.primary,
    },

    cardItem: {
        flex: 1,
    },

    cardRow: {
        gap: 12,
        marginBottom: 12,
    },

    mainMenu: {
        backgroundColor: theme.colors.surface,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 40
    }
}); 