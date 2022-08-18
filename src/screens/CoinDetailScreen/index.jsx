import { View, Text } from "react-native";
import { Toolbar, Header } from "./components";
import Coin from "../../assets/data/crypto.json";
import styles from "./styles";

const CoinDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Toolbar image={Coin.image.small} symbol={Coin.symbol} />
      <Header />
    </View>
  );
};
export default CoinDetailScreen;
