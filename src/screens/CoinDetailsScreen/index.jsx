import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailHeader from "../../components/CoinDetailHeader";
import colors from "../../config/colors";

const CoinDetailsScreen = () => {
  const [priceData, setpriceData] = useState(
    `$${Coin.market_data.price_change_percentage_24h.toFixed(2)}`
  );
  const onPercentagePriceChangeButtonPress = () => {
    let priceChange = `$${Coin.market_data.price_change_24h.toFixed(2)}`;
    let percentagePriceChange = `%${Coin.market_data.price_change_percentage_24h.toFixed(
      2
    )}`;
    setpriceData(() =>
      priceData == priceChange ? percentagePriceChange : priceChange
    );
  };
  const priceButtonColor =
    Coin.market_data.price_change_24h > 0 ? colors.profitGreen : colors.lossRed;

  return (
    <View style={styles.container}>
      <CoinDetailHeader image={Coin.image.small} symbol={Coin.symbol} />
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.name}>{Coin.name}</Text>
          <Text style={styles.currentPrice}>
            $ {Coin.market_data.current_price.usd}
          </Text>
        </View>
        <TouchableOpacity
          onPress={onPercentagePriceChangeButtonPress}
          style={[
            styles.percentagePriceChangeButton,
            { backgroundColor: priceButtonColor },
          ]}
        >
          <Text style={styles.percentagePriceChange}>{priceData}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CoinDetailsScreen;
