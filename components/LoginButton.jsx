import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

export function LoginButton({ promptAsync }) {
  return (
    <TouchableOpacity
      onPress={() => {
        promptAsync();
      }}
      className="w-[70px] h-[55px] bg-primary-contrast rounded-md items-center justify-center"
    >
      <Icon name="google" size={30} color={"white"} />
    </TouchableOpacity>
  );
}
