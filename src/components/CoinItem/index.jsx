import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import theme from "../../config/themes";

const CoinItem = (props) => {
  // extracting coin object from props
  var coin = props.coin;

  // function which returns market cap as a string with Unit in the end and fixed to 2 decimal places
  var marketCap = () => {
    if (coin.market_cap >= 1_000_000_000_000) {
      return `MCap ${(coin.market_cap / 1_000_000_000_000).toFixed(2)} T`;
    } else if (coin.market_cap >= 1_000_000_000) {
      return `MCap ${(coin.market_cap / 1_000_000_000).toFixed(2)} B`;
    } else if (coin.market_cap >= 1_000_000) {
      return `MCap ${(coin.market_cap / 1_000_000).toFixed(2)} M`;
    } else if (coin.market_cap >= 1_000) {
      return `MCap ${(coin.market_cap / 1_000).toFixed(2)} K`;
    }
    return coin.market_cap;
  };

  // value of priceButtonColor
  var priceButtonColor =
    coin.price_change_percentage_24h >= 0 ? theme.green : theme.red;

  // Price button width calculator:
  // Minimum button width is 90
  // If price contains character >= 9 including , . etc then it should be flexible
  var priceButtonWidth = 0 > 2 ? 100 : 90;

  const onPriceButtonPress = () => {};

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftColumn}>
        <Image
          source={{
            uri: coin.image,
          }}
          style={styles.logo}
        />
        <View>
          <Text style={styles.symbol}>{coin.symbol.toUpperCase()}</Text>
          <Text style={styles.marketCap}>{marketCap()}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={onPriceButtonPress}
        style={[
          styles.priceButton,
          { backgroundColor: priceButtonColor, width: priceButtonWidth },
        ]}
      >
        <Text style={styles.priceText}>{`${coin.current_price}`}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
export default CoinItem;
