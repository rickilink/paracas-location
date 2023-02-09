import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Features({ name }) {
  return (
    <View className=" bg-white rounded-md">
      <Text className="p-3 text-primary-text capitalize">
        {name || "Feature"}
      </Text>
    </View>
  );
}
