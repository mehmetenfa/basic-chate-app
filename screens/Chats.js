import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextBase,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
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
  row: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 56,
    height: 56,
    backgroundColor: "#2196f3",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarLabel: {
    fontSize: 20,
    color: "white",
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
  serprator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#E2E2E2",
    marginStart: 16,
  },
});

export default Chats;
