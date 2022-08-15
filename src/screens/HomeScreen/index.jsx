import { Text, View, FlatList } from "react-native";
import { CoinItem } from "../../components";
import styles from "./styles";
import cryptoData from "../../assets/data/cryptocurrencies.json";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Market</Text>
      <FlatList
        data={cryptoData}
        renderItem={({ item }) => <CoinItem coin={item} />}
      />

      {/* <CoinItem /> */}
    </View>
  );
};
export default HomeScreen;
