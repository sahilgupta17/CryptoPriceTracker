import React from "react";
import styles from "./styles";
import { Image, View, Text, TouchableOpacity, Alert } from "react-native";

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

const CoinItem = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={onCoinItemPressed}>
      <View style={styles.leftColumn}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/1024px-Ethereum_logo_translucent.svg.png",
          }}
          style={styles.coinImage}
        />
        <Text style={styles.title}>ETH</Text>
      </View>
      <View style={styles.graph}>
        <Text style={styles.graph}>Graph to be placed</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={onPriceButtonPress}
          style={styles.priceButton}
        >
          <Text style={styles.priceText}>$200.38</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CoinItem;
