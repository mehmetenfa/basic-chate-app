import React from "react";
import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";


const ContactRow = () => {
  return (
    <TouchableOpacity style={styles.row}>
        <View style={styles.avatar}>
          <Text style={styles.avatarLabel}>UN</Text>
        </View>
         
        <View style={styles.textsContainer}>
          <Text style={styles.name}>User Name</Text>
          <Text style={styles.subtitle}>
            Hi, I am waiting for you for dinner
          </Text>
        </View>

        <Ionicons size={20} name="chevron-forward-outline" />
      </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
    row: {
        marginTop: 25,
        paddingHorizontal: 16,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      avatar: {
        width: 56,
        height: 56,
        backgroundColor: '#2196f3',
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
      },
      avatarLabel: {
        fontSize: 20,
        color: 'white',
      },
      textsContainer: {
        flex: 1, 
        marginStart: 16,   
      },
      name: {
        fontSize: 16,
      },
      subtitle: {
        marginTop: 2,
        color: "#565656",
      },
  });
  

export default ContactRow;