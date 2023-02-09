import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export function WideButton({ title, navigate }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigate || "Home")}
      className="w-full h-[70px] bg-primary-contrast rounded-md items-center justify-center"
    >
      <Text className="text-button-text font-bold text-xl">
        {title || "title"}
      </Text>
    </TouchableOpacity>
  );
}
