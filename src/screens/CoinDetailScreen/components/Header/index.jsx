import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import Coin from "../../../../assets/data/crypto.json";
import theme from "../../../../config/themes";

const Header = () => {
  var priceColor, antDesignName;
  if (Coin.market_data.price_change_percentage_24hr >= 0) {
    priceColor = theme.green;
    antDesignName = "caretup";
  } else {
    priceColor = theme.red;
    antDesignName = "caretdown";
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Coin.name}</Text>
      <Text style={styles.currentPriceText}>
        ${Coin.market_data.current_price.usd}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={[styles.priceChangeText, { color: priceColor }]}>
          ${Math.abs(Coin.market_data.price_change_24h.toFixed(2))}
        </Text>
        <AntDesign name={antDesignName} size={15} color={priceColor} />
        <Text style={[styles.priceChangePercentageText, { color: priceColor }]}>
          {Math.abs(Coin.market_data.price_change_percentage_24h.toFixed(2))}%
        </Text>
      </View>
    </View>
  );
};
export default Header;
