import { View, Text } from "react-native";
import { CoinToolBar } from "../../components";

import styles from "./styles";

const CoinDetailScreen = () => {
  return (
    <View style={styles.container}>
      <CoinToolBar />
    </View>
  );
};
export default CoinDetailScreen;
