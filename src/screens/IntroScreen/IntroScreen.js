import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function IntroScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="GO TO LOGIN SCREEN"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </View>
  );
}
