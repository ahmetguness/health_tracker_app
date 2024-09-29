import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  ScrollView,
} from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Calendar } from "react-native-calendars";
import { COLORS } from "../../theme/colors";
import { styles } from "./styles";
import { daysOfWeek, monthsOfYear } from "../../data/date";
import FoodCard from "../../components/cards/FoodCard";

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.user);
  const today = new Date().toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(today);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const [day, setDay] = useState("");

  const formatSelectedDate = useCallback((dateString) => {
    const selectedDay = new Date(dateString);
    const formatted = `${
      daysOfWeek[selectedDay.getDay()]
    }, ${selectedDay.getDate()} ${
      monthsOfYear[selectedDay.getMonth()]
    } ${selectedDay.getFullYear()}`;
    return { formatted, dayOfWeek: daysOfWeek[selectedDay.getDay()] };
  }, []);

  const handleDayPress = ({ dateString }) => {
    const { formatted, dayOfWeek } = formatSelectedDate(dateString);
    setSelectedDate(dateString);
    setFormattedDate(formatted);
    setDay(dayOfWeek);
    setIsModalVisible(true);
  };

  const renderManagementItem = (icon, iconName, text, onPress) => (
    <TouchableOpacity style={styles.managementListItem} onPress={onPress}>
      {React.createElement(icon, { name: iconName, size: 24, color: "white" })}
      <Text style={styles.managementText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      <View style={styles.navBar}>
        <Text>{userInfo.name}</Text>
        <TouchableOpacity>
          <Feather name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={{
              [selectedDate]: {
                selected: true,
                marked: true,
                selectedColor: COLORS.primary,
              },
            }}
          />
        </View>

        <View style={styles.managementContainer}>
          <Text style={styles.managementTitle}>Management:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {renderManagementItem(Entypo, "list", "See Task List", () => {
              console.log("Task list pressed");
            })}
          </ScrollView>
        </View>

        <View style={styles.foodListContainer}>
          <Text style={styles.managementTitle}>Food List:</Text>
          <View style={styles.foodCardContainer}>
            <FoodCard mealTime="Breakfast" />
            <FoodCard mealTime="Lunch" />
            <FoodCard mealTime="Dinner" />
          </View>
        </View>

        <Modal
          visible={isModalVisible}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={{ justifyContent: "space-between", flex: 1 }}>
            <View style={styles.modalTitleContainer}>
              <Text>{formattedDate}</Text>
            </View>
            <Button title="Close" onPress={() => setIsModalVisible(false)} />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
