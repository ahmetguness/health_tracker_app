import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";

export default function FoodCard({ mealTime }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{mealTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.primary,
    width: "31%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: 15,
  },
  text: {
    color: COLORS.white,
  },
});
