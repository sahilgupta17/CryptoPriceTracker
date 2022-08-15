import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import theme from "../../config/themes";

const CoinItem = () => {
  const priceButtonColor = 4 > 2 ? theme.green : theme.red;

  const onPriceButtonPress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Image
          source={{
            uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
          }}
          style={styles.logo}
        />
        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <Text style={styles.ticker}>BTC</Text>
        </View>
      </View>

      <View>
        {/* TODO have a button which displays the price of the coinItem */}
        <TouchableOpacity
          onPress={onPriceButtonPress}
          style={[styles.priceButton, { backgroundColor: priceButtonColor }]}
        >
          <Text style={styles.priceText}>{`$56,234.43`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CoinItem;
