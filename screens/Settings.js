import React from "react";
import { View, StyleSheet } from "react-native";
import ContactRow from "../components/ContactRow";
import Separator from "../components/Separator";
import Cell from "../components/Cell";
import { colors } from "../config/constants";

const Settings = () => {
  return (
    <View>
      <ContactRow
        name="Yaman KATBY"
        subtitle="me@yamankatby.com"
        style={styles.contactRow}
      />
      <Separator />
      <Cell />

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
});

export default Settings;
