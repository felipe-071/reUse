import { styles } from './SearchBar.styles'
import { globalStyles } from '../../styles/global'
import { Search, Settings2 } from "lucide-react-native";
import { Pressable, TextInput, View } from "react-native";

export default function SearchBar() {
    return (
        <View style={styles.alignSearch}>
            <Search size={16} style={styles.searchIcon} />
            <TextInput
                placeholder="Buscar itens para trocar..."
                style={[styles.searchInput, globalStyles.defaultShadow]}
            />
            <Pressable style={[styles.filterButton, globalStyles.defaultShadow]}>
                <Settings2 />
            </Pressable>
        </View>
    )
}