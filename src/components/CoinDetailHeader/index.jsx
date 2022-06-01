import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Image, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const CoinDetailHeader = (props) => {
  console.log(props);
  return (
    <View style={styles.navigation}>
      <Ionicons name="chevron-back-sharp" size={30} color="white" />
      <View style={styles.coinHeader}>
        <Image source={{ uri: props.image }} style={styles.tinylogo} />
        <Text style={{ color: "white", fontSize: 16 }}>
          {props.symbol.toUpperCase()}
        </Text>
      </View>
      <Ionicons name="md-heart" size={30} color="white" />
    </View>
  );
};
export default CoinDetailHeader;
