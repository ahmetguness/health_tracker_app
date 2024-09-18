import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStackNav from "./AppStackNav";

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <AppStackNav />
    </NavigationContainer>
  );
}
