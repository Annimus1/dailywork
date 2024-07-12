import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";

export default function CustomButton({ title, onPress, round = false }) {

  return (
    <Pressable onPress={onPress} style={[CustomButtonStyle.container, (round ? { width: 50, height: 50, alignItems: 'center', borderRadius: 100 } : {})]}>
      <Text style={CustomButtonStyle.text}>{title}</Text>
    </Pressable>
  );
}

const CustomButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    padding: 10,
    borderRadius: 2,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  }
});
