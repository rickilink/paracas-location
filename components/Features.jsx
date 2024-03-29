import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Features({ name, color }) {
  return (
    <View
      className={
        color ? "bg-primary-contrast rounded-md" : " bg-white rounded-md"
      }
    >
      <Text
        className={
          color
            ? "p-2 text-button-text capitalize"
            : "p-2 text-primary-text capitalize"
        }
      >
        {name || "Feature"}
      </Text>
    </View>
  );
}
