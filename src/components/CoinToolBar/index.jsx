import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../config/themes";
import Coin from "../../assets/data/crypto.json";

const CoinToolBar = () => {
  const onFavButtonPressed = () => {
    //OnButton pressed
    // if the coin is not already in fav list then add the coin to favorite list and change color from theme.textPrimary to red
    // otherwise remove it from fav list and undo the color back to theme.textPrimary
  };

  return (
    <View style={styles.container}>
      <Ionicons name="chevron-back-sharp" size={30} color={theme.textPrimary} />
      <View style={styles.titleContainer}>
        <Image source={{ uri: Coin.image.small }} style={styles.logo} />
        <Text style={styles.title}>{Coin.symbol.toLocaleUpperCase()}</Text>
      </View>
      <MaterialIcons
        name="favorite"
        size={30}
        color={theme.textPrimary}
        onPress={onFavButtonPressed}
      />
    </View>
  );
};

export default CoinToolBar;
