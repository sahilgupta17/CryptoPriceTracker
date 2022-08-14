import { Text, View } from "react-native";
import { CoinItem } from "../../components";
import styles from "./styles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Market</Text>
      <CoinItem />
    </View>
  );
};
export default HomeScreen;
