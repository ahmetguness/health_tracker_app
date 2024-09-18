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
});
