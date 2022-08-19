import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  currencyContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  currencyText: {
    color: "white",
  },
  currencyTextInput: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    color: "white",
  },
});
export default styles;
