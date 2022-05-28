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
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginTop: 10,
    padding: 15,
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
    fontSize: 16,
  },
  priceButton: {
    backgroundColor: "green",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 100,
  },
});

export default styles;
