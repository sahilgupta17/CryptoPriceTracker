import { StyleSheet } from "react-native";

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
    marginHorizontal: 10,
    marginTop: 20,
    padding: 10,
  },
  leftColumn: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    color: "white",
    fontSize: 16,
  },
  graph: {
    color: "white",
    fontSize: 16,
  },
  priceButton: {
    color: "green",
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default styles;
