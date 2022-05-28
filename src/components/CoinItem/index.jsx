import React from "react";
import styles from "./styles";
import { Image, View, Text, TouchableOpacity, Alert } from "react-native";
import colors from "../../config/colors";

const CoinItem = ({ marketCoin }) => {
  const priceButtonColor =
    marketCoin.price_change_24h > 0 ? colors.profitGreen : colors.lossRed;

  const onPriceButtonPress = () => {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const onCoinItemPressed = () => {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "COIN", onPress: () => console.log("Coin Pressed") },
    ]);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onCoinItemPressed}>
      <View style={styles.leftColumn}>
        <Image
          source={{
            uri: marketCoin.image,
          }}
          style={styles.coinImage}
        />
        <Text style={styles.title}>{marketCoin.symbol.toUpperCase()}</Text>
      </View>
      <View style={styles.graph}>
        <Text style={styles.graph}>Graph to be placed</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={onPriceButtonPress}
          style={[styles.priceButton, { backgroundColor: priceButtonColor }]}
        >
          <Text style={styles.priceText}>{`$${marketCoin.current_price}`}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CoinItem;
