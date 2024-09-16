import React from "react";
import { Tabs } from "expo-router";

const TabRoot = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="about" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabRoot;
