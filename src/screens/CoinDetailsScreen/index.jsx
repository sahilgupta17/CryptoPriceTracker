import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailHeader from "./components/CoinDetailHeader";
import { AntDesign } from "@expo/vector-icons";
import Graph from "./components/Graph";

import styles from "./styles";
import colors from "../../config/colors";

const CoinDetailsScreen = () => {
  const [priceData, setpriceData] = useState(
    `$ ${Coin.market_data.price_change_24h.toFixed(
      2
    )} (${Coin.market_data.price_change_percentage_24h.toFixed(2)}%)`
  );

  const caretName =
    Coin.market_data.price_change_24h >= 0 ? "caretup" : "caretdown";

  const priceButtonColor =
    Coin.market_data.price_change_24h >= 0
      ? colors.profitGreen
      : colors.lossRed;
  return (
    <View style={styles.container}>
      <CoinDetailHeader image={Coin.image.small} symbol={Coin.symbol} />
      <View style={styles.headerContainer}>
        <Text style={styles.name}>{Coin.name}</Text>
        <Text style={styles.currentPrice}>
          $ {Coin.market_data.current_price.usd}
        </Text>
        <View style={styles.priceChangeDisplay}>
          <AntDesign name={caretName} size={14} color={priceButtonColor} />
          <Text style={[styles.priceChange, { color: priceButtonColor }]}>
            {priceData}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default CoinDetailsScreen;
