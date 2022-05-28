import React from "react";
import styles from "./styles";
import { Image, View, Text } from "react-native";
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
      <View style={styles.price}>
        <Text style={styles.price}>$2.3</Text>
      </View>
    </View>
  );
};

export default CoinItem;
