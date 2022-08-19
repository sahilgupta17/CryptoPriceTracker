import React, { useState } from "react";

import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import Coin from "../../assets/data/crypto.json";

const CurrencyConverter = () => {
  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState(
    Coin.market_data.current_price.usd.toString()
  );

  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value) || 0;
    setUsdValue(
      (floatValue * Coin.market_data.current_price.usd).toFixed(2).toString()
    );
  };
  const changeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value) || 0;
    setCoinValue((floatValue / Coin.market_data.current_price.usd).toString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.currencyContainer}>
        <Text style={styles.currencyText}>{Coin.symbol.toUpperCase()}</Text>
        <TextInput
          style={styles.currencyTextInput}
          value={coinValue}
          onChangeText={changeCoinValue}
          keyboardType="numeric"
          returnKeyType="done"
        />
      </View>
      <View style={styles.currencyContainer}>
        <Text style={styles.currencyText}>USD</Text>
        <TextInput
          style={styles.currencyTextInput}
          value={usdValue}
          onChangeText={changeUsdValue}
          keyboardType="numeric"
          returnKeyType="done"
        />
      </View>
    </View>
  );
};

export default CurrencyConverter;
