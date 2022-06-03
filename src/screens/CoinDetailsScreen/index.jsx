import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailNavigation from "./components/CoinDetailNavigation";
import CoinDetailHeader from "./components/CoinDetailHeader";
import Graph from "./components/Graph";
import styles from "./styles";
import colors from "../../config/colors";

const CoinDetailsScreen = () => {
  const profitLossColor =
    Coin.market_data.price_change_24h >= 0
      ? colors.profitGreen
      : colors.lossRed;
  const chartData = Coin.prices.map((price) => ({ x: price[0], y: price[1] }));

  return (
    <View style={styles.container}>
      <CoinDetailNavigation image={Coin.image.small} symbol={Coin.symbol} />
      <CoinDetailHeader profitLossColor={profitLossColor} />
      <Graph
        data={chartData}
        strokeColor={profitLossColor}
        smoothingStrategy="bezier"
        chartDotColor="white"
      />
    </View>
  );
};
export default CoinDetailsScreen;
