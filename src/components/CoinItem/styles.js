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
    fontSize: 16,
    fontweight: "bold",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginTop: 20,
    padding: 15,
    bottomborderWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
  },
  leftColumn: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    color: "black",
    fontSize: 16,
  },
  graph: {
    color: "white",
    fontSize: 16,
    fontweight: "bold",
  },
  priceButton: {
    backgroundColor: "green",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
});

export default styles;
