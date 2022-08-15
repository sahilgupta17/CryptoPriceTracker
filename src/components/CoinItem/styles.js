import { StyleSheet } from "react-native";
import theme from "../../config/themes";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
    paddingVertical: 15,
    marginHorizontal: 15,
  },
  logo: {
    height: 30,
    width: 30,
    marginRight: 10,
    alignSelf: "center",
  },
  title: {
    color: theme.textPrimary,
    fontSize: 14,
    marginBottom: 5,
  },
  ticker: {
    color: theme.textSecondary,
    fontSize: 12,
  },
  leftColumn: {
    flexDirection: "row",
  },
  priceText: {
    color: "black",
  },
  priceButton: {
    borderRadius: 5,
    padding: 10,
  },
});

export default styles;
