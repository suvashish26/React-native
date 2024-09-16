import React from "react";
import { Tabs } from "expo-router";

const TabRoot = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="about" options={{ title: "About Us" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
};

export default TabRoot;
