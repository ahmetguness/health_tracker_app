import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";

export default function FoodCard({ mealTime }) {
  const data = [
    { foodName: "Apple", calori: 95 },
    { foodName: "Banana", calori: 105 },
    { foodName: "Orange", calori: 62 },
    { foodName: "Grapes", calori: 104 },
    { foodName: "Pineapple", calori: 50 },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.foodName}>{item.foodName}</Text>
        <Text style={styles.caloriText}>{item.calori}</Text>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <Text style={styles.mealTimeText}>{mealTime}</Text>
      <View style={styles.innerContiner}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.primary,
    width: "31%",
    alignItems: "center",
    height: 270,
    borderRadius: 15,
  },
  mealTimeText: {
    color: COLORS.white,
    marginVertical: "6%",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  },
  innerContiner: {
    width: "100%",
    padding: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foodName: {
    color: COLORS.white,
  },
  caloriText: {
    color: COLORS.white,
  },
});
