import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailHeader from "../../components/CoinDetailHeader";
const CoinDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <CoinDetailHeader image={Coin.image.small} symbol={Coin.symbol} />
      <View style={styles.heading}>
        <Text style={styles.title}>{Coin.name}</Text>
        <Text style={styles.title}>{Coin.market_data.current_price.usd}</Text>
      </View>
    </View>
  );
};
export default CoinDetailsScreen;
