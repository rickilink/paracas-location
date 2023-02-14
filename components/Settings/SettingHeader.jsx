import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function SettingHeader({ currentUser }) {
  return (
    <View className="pt-12 ">
      <View className="pt-3 ">
        {/* Header */}
        <View className=" flex-row  items-center space-x-2">
          {currentUser?.photoURL ? (
            <Image
              source={{
                uri: currentUser?.photoURL,
              }}
              className="w-12 h-12 rounded-full "
            />
          ) : (
            <View className="w-12 h-12 rounded-full bg-secondary-background"></View>
          )}

          <Text className="text-primary-text text-xl font-bold capitalize ">
            {currentUser?.name || "username"}
          </Text>
        </View>
      </View>
    </View>
  );
}
