import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  titleContainer: {
    marginTop: "20%",
    marginHorizontal: "12%",
  },
  title1: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  title2: {
    fontSize: 18,
    marginLeft: 90,
    marginTop: 6,
    color: COLORS.primary,
  },
  title3: {
    fontSize: 18,
    color: COLORS.darkGreen,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "10%",
  },
  textInput: {
    borderBottomWidth: 1,
    fontSize: 18,
  },
  inputInnerContainer: {
    marginBottom: "8%",
  },
});
