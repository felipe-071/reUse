import { StyleSheet, Text, View } from "react-native";
import { theme } from '../../styles/theme'
import { Home, Search, MessageCircle, User, Plus } from 'lucide-react-native'
import TabBarButton from "../../common-components/TabBarButton/TabBarButton";

export default function MainMenu() {
    return (
        <View style={styles.mainMenu}>
            <TabBarButton description="Início" current>
                <Home size={20} color={theme.colors.primary}/>
            </TabBarButton>
            <TabBarButton description="Explorar">
                <Search size={20} />
            </TabBarButton>
            <View>
                <View style={styles.mainButton}>
                    <Plus />
                </View>

            </View>
            <TabBarButton description="Chat">
                <MessageCircle size={20} />
            </TabBarButton>
            <TabBarButton description="Perfil">
                <User size={20} />
            </TabBarButton>
        </View>
    )
}

const styles = StyleSheet.create({
    mainMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.background,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 16,
        paddingVertical: 4,  
        borderTopColor: 'blue'
    },

    mainButton:{
        backgroundColor: theme.colors.secondary,
        padding: 10,
        borderRadius: 50,
        transform: [{translateY: '-50%'}],
        color: '#FFF'
    },
})