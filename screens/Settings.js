import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import ContactRow from "../components/ContactRow";
import Separator from "../components/Separator";
import { colors } from "../config/constants";
import { Ionicons } from "@expo/vector-icons";

const Settings = () => {
  return (
    <View>
      <ContactRow
        name="Yaman KATBY"
        subtitle="me@yamankatby.com"
        style={styles.contactRow}
      />
      <Separator />
      <TouchableOpacity
        style={styles.cell}
        onPress={() => {
          alert("Hi, You touched me");
        }}
      >
        <View style={styles.iconsContainer}>
          <Ionicons 
          name="log-out-outline" 
          size={24} 
          color={"white"} />
        </View>
        <Text style={styles.title}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contactRow: {
    backgroundColor: "white",
    marginTop: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  cell: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    marginStart: 16,
  },
  iconsContainer: {
    width: 32,
    height: 32,
    backgroundColor: "red",
    borderRadius: 6,
  },
});

export default Settings;
