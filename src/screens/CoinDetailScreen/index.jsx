import { View, Text } from "react-native";
import { CoinToolBar, CoinDetailHeader } from "../../components";
import Coin from "../../assets/data/crypto.json";
import styles from "./styles";

const CoinDetailScreen = () => {
  return (
    <View style={styles.container}>
      <CoinToolBar image={Coin.image.small} symbol={Coin.symbol} />
      <CoinDetailHeader />
    </View>
  );
};
export default CoinDetailScreen;
