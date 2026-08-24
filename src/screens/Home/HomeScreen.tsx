import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

export function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View>
                    <Text style={styles.title}>ReUse</Text>
                    <Text>São Paulo, SP - 4.312 itens próximos</Text>
                </View>

                <View>
                    <button></button> {/*Notificações*/}
                    <button></button> {/*Foto de perfil*/}
                </View>
                <StatusBar style="auto" />
            </View>

            <View>
                <input type="search" name="" id="" placeholder="Busque itens para trocar" />
                <button></button>
            </View>

            <View>
                <View>
                    {/* <View>ícone de Folha</View> */}
                    <Text>Seu impacto este mês</Text>
                    <Text>Evitou xx kg de CO2</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        padding: 10
    },

    title: {
        fontSize: 32
    },

});