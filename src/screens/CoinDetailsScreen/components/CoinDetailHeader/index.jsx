import React, { useState } from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Coin from "../../../../../assets/data/crypto.json";
import colors from "../../../../config/colors";
import styles from "./styles";

const CoinDetailHeader = (props) => {
  const [priceData, setpriceData] = useState(
    `$${Math.abs(Coin.market_data.price_change_24h.toFixed(2))} (${Math.abs(
      Coin.market_data.price_change_percentage_24h.toFixed(2)
    )}%)`
  );

  const caretName =
    Coin.market_data.price_change_24h >= 0 ? "caretup" : "caretdown";

  const priceButtonColor =
    Coin.market_data.price_change_24h >= 0
      ? colors.profitGreen
      : colors.lossRed;
  return (
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
  );
};
export default CoinDetailHeader;
