import React from "react";
import { Dimensions, View } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
} from "@rainbow-me/animated-charts";
// import Coin from "../../../assets/data/crypto.json";
import styles from "./styles";

const Graph = (props) => {
  const screenWidth = Dimensions.get("window").width;
  let data = props.data;

  return (
    <View style={styles.container}>
      <ChartPathProvider
        data={{ data, smoothingStrategy: props.smoothingStrategy }}
      >
        <ChartPath
          height={screenWidth / 2}
          stroke={props.strokeColor}
          width={screenWidth}
        />
        <ChartDot style={{ backgroundColor: props.chartDotColor }} />
      </ChartPathProvider>
    </View>
  );
};
export default Graph;
