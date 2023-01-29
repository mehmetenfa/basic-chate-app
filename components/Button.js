import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "black",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
  },
  buttonLabel: {
    color: "white",
    fontSize: 15,
  },
});

export default Button;
