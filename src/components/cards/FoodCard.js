import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";

export default function FoodCard({ mealTime, dataa }) {
  const data = [
    { foodName: "Apple", calori: 95 },
    { foodName: "Banana", calori: 105 },
    { foodName: "Orange", calori: 62 },
    { foodName: "Grapes", calori: 104 },
    { foodName: "Pineapple", calori: 50 },
    { foodName: "Apple", calori: 95 },
    { foodName: "Banana", calori: 105 },
    { foodName: "Orange", calori: 62 },
  ];

  const totalCalories = data.reduce((acc, item) => acc + item.calori, 0);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.renderItem}>
        <View style={styles.hSc}>
          <Text style={styles.foodName} numberOfLines={1}>
            {item.foodName}
          </Text>
        </View>
        <View style={styles.hSc}>
          <Text style={styles.caloriText}>{item.calori} kcal</Text>
        </View>
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
      <Text style={styles.totalCaloriesText}>Total: {totalCalories} kcal</Text>
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
    padding: 10,
  },
  mealTimeText: {
    color: COLORS.white,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
    textAlign: "center",
  },
  innerContiner: {
    width: "100%",
    paddingTop: 10,
    justifyContent: "space-evenly",
    flex: 1,
  },
  foodName: {
    color: COLORS.white,
    fontSize: 14,
    textAlign: "center",
  },
  caloriText: {
    color: COLORS.white,
    fontSize: 12,
    textAlign: "center",
  },
  totalCaloriesText: {
    marginTop: 10,
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  renderItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hSc: {
    width: "50%",
  },
});
