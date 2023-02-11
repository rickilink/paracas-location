import { View, Text } from "react-native";
import React from "react";

export default function HotelsHeader({ title }) {
  return (
    <View className="pt-3">
      <View className="flex-row justify-between items-center">
        <Text className="flex-1 text-3xl font-extrabold text-primary-text capitalize">
          {title || "Title"}
        </Text>
        <View className="flex-row space-x-3 items-center">
          <View className="w-10 h-10 rounded-full bg-secondary-background"></View>
          <View className="w-10 h-10 rounded-full bg-secondary-background"></View>
        </View>
      </View>
    </View>
  );
}
