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

const CoinItem = () => {
  return (
    <View style={styles.container}>
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
        <Text style={styles.price}>Graph to be placed</Text>
      </View>
      <View style={styles.priceButton}>
        {/* <Text style={styles.price}>$2.3</Text>
         */}
        <TouchableOpacity
          onPress={onPriceButtonPress}
          style={styles.priceButton}
        >
          <Text style={styles.price}>$2.3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoinItem;
