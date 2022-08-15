import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import theme from "../../config/themes";

const CoinItem = (props) => {
  var coin = props.coin;
  var marketCap;

  var priceButtonColor =
    coin.price_change_percentage_24h >= 0 ? theme.green : theme.red;
  // Price button width calculator:
  // Minimum button width is 90
  // If price contains character >= 9 including , . etc then it should be flexible
  var priceButtonWidth = 0 > 2 ? 100 : 90;

  const onPriceButtonPress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Image
          source={{
            uri: coin.image,
          }}
          style={styles.logo}
        />
        <View>
          <Text style={styles.symbol}>{coin.symbol.toUpperCase()}</Text>
          <Text style={styles.marketCap}>{`MCap ${coin.market_cap}`}</Text>
        </View>
      </View>

      <View>
        {/* TODO have a button which displays the price of the coinItem */}
        <TouchableOpacity
          onPress={onPriceButtonPress}
          style={[
            styles.priceButton,
            { backgroundColor: priceButtonColor, width: priceButtonWidth },
          ]}
        >
          <Text style={styles.priceText}>{`${coin.current_price}`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CoinItem;
