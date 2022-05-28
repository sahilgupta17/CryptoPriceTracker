import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const CoinDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Ionicons name="chevron-back-sharp" size={30} color="white" />
        <Ionicons name="md-heart" size={30} color="white" />
      </View>
    </View>
  );
};
export default CoinDetailsScreen;
