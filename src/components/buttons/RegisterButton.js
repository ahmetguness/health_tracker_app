import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";

export default function RegisterButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%",
  },
  title: {
    color: COLORS.darkGreen,
    fontSize: 15,
    fontWeight: "bold",
  },
});
