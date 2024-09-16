import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tab)" />
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
    </Stack>
  );
};

export default RootLayout;
