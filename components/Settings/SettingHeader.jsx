import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function SettingHeader() {
  const { photoURL } = useSelector((state) => state.user.user);
  return (
    <View className="pt-12 ">
      <View className="pt-3 ">
        {/* Header */}
        <View className=" flex-row  items-center space-x-2">
          <View className="w-12 h-12 rounded-full bg-secondary-background"></View>
          <Text className="text-primary-text text-xl font-bold capitalize ">
            userName
          </Text>
        </View>
      </View>
    </View>
  );
}
