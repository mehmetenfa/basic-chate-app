import React from "react";
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";

const Chats = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.name}>User Name</Text>
        <Text style={styles.subtitle}>Hi, I am waiting for you for dinner</Text>
      </TouchableOpacity>

      <View style={styles.serprator}/>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.name}>User Name</Text>
        <Text style={styles.subtitle}>Hi, I am waiting for you for dinner</Text>
      </TouchableOpacity>

      <View style={styles.serprator}/>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.name}>User Name</Text>
        <Text style={styles.subtitle}>Hi, I am waiting for you for dinner</Text>
      </TouchableOpacity>

      <View style={styles.serprator}/>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.name}>User Name</Text>
        <Text style={styles.subtitle}>Hi, I am waiting for you for dinner</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row:{
    paddingHorizontal: 16,
    paddingVertical: 20
  },
  name: {
    fontSize: 16,
  },
  subtitle: {
    marginTop: 2,
    color: '#565656'
  },
  serprator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#E2E2E2',
    marginStart: 16
  }
})

export default Chats;
