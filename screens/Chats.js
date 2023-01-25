import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import ContactRow from "../components/ContactRow";

const Chats = () => {
  return (
    <SafeAreaView style={styles.marginTop}>
      <ContactRow 
        name="Yaman KATBY" 
        subtitle="React Native Couse" 
      />
      <View style={styles.serprator} />
      <ContactRow 
        name="User Name" 
        subtitle="Lorem ipsum"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 25,
  },
  serprator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#E2E2E2",
    marginStart: 16,
  },
});

export default Chats;
