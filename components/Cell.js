import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/constants";


const Cell = ({title, icon, tintColor, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.cell}
      onPress={onPress}
    >
      <View style={[styles.iconsContainer, {backgroundColor: tintColor}]}>
        <Ionicons name="log-out-outline" size={24} color={"white"} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name={icon} size={20} />
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
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cell;
