import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import ContactRow from "../components/ContactRow";

const Chats = () => {
  return (
    <SafeAreaView style={styles.marginTop}>
      <ContactRow 
        name="Yaman KATBY" 
        subtitle="React Native Couse" 
        onPress={() => {
          alert('Hi, Yaman KATBY Touched')
        }}
      />
      <View style={styles.serprator} />
      <ContactRow 
        name="Mehmet Enfa" 
        subtitle="Lorem ipsum"
        onPress={() => {
          alert('Hi, Yaman Mehmet Enfa Touched')
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 35,
  },
  serprator: {
    height: StyleSheet.hairlineWidth, 
    backgroundColor: "#E2E2E2",
    marginStart: 16,
  },
});

export default Chats;
