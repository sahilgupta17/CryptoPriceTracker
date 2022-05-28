import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";
import colors from "./src/config/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#121212",
    backgroundColor: "black",
    paddingTop: 50,
    color: "white",
  },
});
