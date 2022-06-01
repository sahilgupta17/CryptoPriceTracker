import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";
import CoinDetailsScreen from "./src/screens/CoinDetailsScreen";
import colors from "./src/config/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <HomeScreen /> */}
      <CoinDetailsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 50,
    color: "white",
    paddingHorizontal: 5,
  },
});
