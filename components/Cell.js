import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/constants";


const Cell = () => {
  return (
    <TouchableOpacity
      style={styles.cell}
      onPress={() => {
        alert("Hi, You touched me");
      }}
    >
      <View style={styles.iconsContainer}>
        <Ionicons name="log-out-outline" size={24} color={"white"} />
      </View>
      <Text style={styles.title}>Logout</Text>
      <Ionicons name="chevron-forward-outline" size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  title: {
    fontSize: 16,
    marginStart: 16,
    flex: 1,
  },
  iconsContainer: {
    width: 32,
    height: 32,
    backgroundColor: colors.red,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cell;
