import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import CoinItem from "../../components/CoinItem";
import cryptoCurrenciesData from "../../../assets/data/cryptocurrencies.json";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cryptoCurrenciesData}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
      />
    </View>
  );
};
export default HomeScreen;
