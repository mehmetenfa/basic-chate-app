import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import ContactRow from "../components/ContactRow";

const Chats = () => {
  return (
    <SafeAreaView>
      <ContactRow />

      <View style={styles.serprator} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  serprator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#E2E2E2",
    marginStart: 16,
  },
});

export default Chats;
