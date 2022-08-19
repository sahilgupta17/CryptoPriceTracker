import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import Coin from "../../../../assets/data/crypto.json";
import theme from "../../../../config/themes";

const Header = () => {
  var priceColor, caretName;
  if (Coin.market_data.price_change_percentage_24hr >= 0) {
    priceColor = theme.green;
    caretName = "caretup";
  } else {
    priceColor = theme.red;
    caretName = "caretdown";
  }
  return (
    <View style={styles.container}>
      {/* Below is the header displaying the coin name, price, 24hr price and percentage change */}
      {/* Coin Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{Coin.name}</Text>
        <Text style={styles.currentPriceText}>
          ${Coin.market_data.current_price.usd}
        </Text>
        <View style={styles.priceChangeContainer}>
          <Text style={[styles.priceChangeText, { color: priceColor }]}>
            ${Math.abs(Coin.market_data.price_change_24h.toFixed(2))}
          </Text>
          <AntDesign name={caretName} size={14} color={priceColor} />
          <Text
            style={[styles.priceChangePercentageText, { color: priceColor }]}
          >
            {Math.abs(Coin.market_data.price_change_percentage_24h.toFixed(2))}%
          </Text>
        </View>
      </View>
      {/* Graph Below for the crypto coin*/}
    </View>
  );
};
export default Header;
