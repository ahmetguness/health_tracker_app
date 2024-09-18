import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function InformationScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Button title="Next" onPress={() => navigation.navigate("HomeScreen")} />
    </View>
  );
}
