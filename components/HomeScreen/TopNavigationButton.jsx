import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function TopNavigationButton({ title, navigationName }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={
        navigationName ? () => navigation.navigate(navigationName) : null
      }
      className={
        navigationName
          ? "bg-secondary-background  rounded-md  h-[40px] items-center justify-center"
          : "bg-secondary-background  rounded-md  h-[40px] items-center justify-center opacity-30"
      }
    >
      <Text className="px-3">{title}</Text>
    </TouchableOpacity>
  );
}
