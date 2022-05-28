import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  coinImage: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  title: {
    color: "white",
    fontSize: 14,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
  },
  leftColumn: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    color: "black",
    fontSize: 14,
    alignSelf: "center",
  },
  graph: {
    color: "white",
    fontSize: 14,
  },
  priceButton: {
    // backgroundColor: colors.profitGreen,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 115,
  },
});

export default styles;
