import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  navBar: {
    height: 60,
    backgroundColor: COLORS.primary,
    justifyContent: "space-between",
    paddingHorizontal: "6%",
    margin: "2%",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  calendarContainer: {
    marginTop: "5%",
    width: "96%",
    marginHorizontal: "2%",
    borderWidth: 0.75,
    borderColor: COLORS.primary,
    borderRadius: 15,
    overflow: "hidden",
  },
  modalTitleContainer: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    marginTop: "3%",
  },
  managementContainer: {
    width: "96%",
    marginHorizontal: "2%",
    marginTop: "5%",
  },
  managementTitle: {
    fontSize: 18,
    color: COLORS.darkGreen,
    marginBottom: "3%",
  },
  managementListItem: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  managementText: {
    marginTop: "3%",
    color: COLORS.white,
  },
  foodListContainer: {
    width: "96%",
    marginHorizontal: "2%",
    marginTop: "5%",
    marginBottom: "2%",
  },
  foodCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // More consistent spacing
    paddingHorizontal: "2%", // Added horizontal padding for more uniform spacing on screen
    marginTop: 10, // Added margin for spacing from the Food List title
  },
  totalCaloriesContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  totalCaloriesText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.darkGreen,
  },
});
