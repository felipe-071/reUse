import { View } from "react-native";
import { theme } from '../../styles/theme'
import { Home, Search, MessageCircle, User, Plus } from 'lucide-react-native'
import TabBarButton from "../../common-components/TabBarButton/TabBarButton";
import { globalStyles } from "../../styles/global";
import { styles } from './NavigationBar.styles'

export default function MainMenu() {
    return (
        <View style={[styles.mainMenu, globalStyles.defaultShadow]}>
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

