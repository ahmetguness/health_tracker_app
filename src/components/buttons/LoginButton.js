import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";

export default function LoginButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    backgroundColor: COLORS.darkGreen,
    borderRadius: 15,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: COLORS.secondary,
    fontSize: 16,
  },
});
