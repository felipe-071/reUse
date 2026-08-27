import {
    Bell,
    ChevronRight,
    Leaf,
    MapPin,
} from 'lucide-react-native'

import { globalStyles } from '../../styles/global'

import { CategoryButton } from '../../common-components/CategoryButton';
// import ContentText from '../../common-components/ContentText/ContentText'
import HeadingTwo from '../../common-components/HeadingTwo/HeadingTwo';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import { useState } from 'react';
import Card from '../../components/Card/Card';
import MainMenu from '../../components/NavigationBar/NavigationBar';
import { styles } from './HomeScreen.styles'



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
        { id: '2', title: 'Violão Yamaha F310', image: require('../../../assets/images/item-card-guitar.png'), distance: '2,7 km' },
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
                        <View>
                            <Text style={styles.title}>
                                Re<Text style={styles.highlightTitle}>Use</Text>
                            </Text>
                            
                        </View>
                        <View>
                            <Text style={globalStyles.bodyFont}>
                                Boa tarde, Felipe 👋
                            </Text>

                            <View style={styles.alignHightlightLocation}>
                                <MapPin size={12} />
                                <View style={styles.alignHightlightLocation}>
                                    <Text style={styles.highlightLocation}>
                                        Localização atual:
                                    </Text>
                                    <Text style={[styles.currentLocation]}>
                                        São Paulo, SP
                                    </Text>
                                </View>
                            </View>

                        </View>
                    </View>

                    <Pressable style={[styles.notificationsButton, globalStyles.defaultShadow]}>
                        <Bell size='20' />
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
                        <Text style={styles.seeMoreButtonText}>Ver todos </Text><ChevronRight size={16} />
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

                <View style={[styles.alignmentViews, styles.gridTop]}>
                    <HeadingTwo content="Adicionados recentemente" />
                    <Pressable style={styles.seeMoreButton}>
                        <Text style={styles.seeMoreButtonText}>Ver todos </Text><ChevronRight size={16} />
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

