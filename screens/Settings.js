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
      <Cell
        title="Logout"
        icon="chevron-forward-outline"
        tintColor={colors.red}
        onPress={() => {
            alert("don't touch me again")
        }}
      />
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
