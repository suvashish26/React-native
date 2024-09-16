import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native"; // Import View from react-native
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const Index = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
        Hello WeLcome to code snips
      </Text>
      <Link href={"/about"}>Go To About</Link>
    </View>
  );
};

export default Index;
