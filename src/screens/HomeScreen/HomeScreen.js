import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { TEXT } from "../../data/text";
import { useSelector } from "react-redux";
import Feather from "@expo/vector-icons/Feather";

export default function HomeScreen() {
  const currentLanguage = useSelector((state) => state.language.lan);
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.root}>
      <View style={styles.navBar}>
        <Text>{user.userInfo.name}</Text>
        <TouchableOpacity>
          <Feather name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
