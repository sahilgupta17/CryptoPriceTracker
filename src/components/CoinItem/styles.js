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
    marginHorizontal: 20,
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
});

export default styles;
