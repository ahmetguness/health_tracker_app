import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
import LoginButton from "../../components/buttons/LoginButton";
import RegisterButton from "../../components/buttons/RegisterButton";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>Welcome</Text>
        <Text style={styles.title2}>Please Log In</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputInnerContainer}>
          <Text style={styles.title3}>UserName</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.inputInnerContainer}>
          <Text style={styles.title3}>Password</Text>
          <TextInput style={styles.textInput} />
        </View>
        <LoginButton
          title={"Log In"}
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <RegisterButton title={"Register"} />
      </View>
    </View>
  );
}
