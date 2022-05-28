import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CoinItem from "./src/components/CoinItem";
import colors from "./src/config/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <CoinItem />
      <CoinItem />
      <CoinItem />
      {/* <Text style={{ color: "white" }}>hey</Text> */}
      {/* <HomeScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
    color: "white",
  },
});
