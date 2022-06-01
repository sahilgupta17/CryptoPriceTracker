import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailNavigation from "./components/CoinDetailNavigation";
import CoinDetailHeader from "./components/CoinDetailHeader";
import Graph from "./components/Graph";
import styles from "./styles";
import colors from "../../config/colors";

const CoinDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <CoinDetailNavigation image={Coin.image.small} symbol={Coin.symbol} />
      <CoinDetailHeader />
    </View>
  );
};
export default CoinDetailsScreen;
