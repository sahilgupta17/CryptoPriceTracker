import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {},
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    color: "white",
  },
  currentPrice: {
    fontSize: 28,
    color: "white",
  },
  headerContainer: {
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    padding: 20,
  },
  percentageChange: {
    color: "white",
    fontSize: 18,
  },
  priceChange: {
    marginLeft: 5,
    fontSize: 13,
  },
  percentagePriceChangeButton: {
    backgroundColor: colors.profitGreen,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  priceChangeDisplay: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
