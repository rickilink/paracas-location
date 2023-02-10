import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function ModalFilterPrice() {
  return (
    <View className="">
      <View className="flex-row justify-between items-center pb-3">
        <Text className="text-primary-text">Starting price per night</Text>
        <Text className="text-primary-contrast font-bold text-md">
          $20 - $1400
        </Text>
      </View>
      <View>
        <View className="relative bg-primary-background h-[100px] border-b border-primary-text">
          <View className=" flex-row h-full items-end justify-center space-x-2  ">
            <View className="  w-3 h-10 bg-secondary-background rounded-md"></View>
            <View className="   w-3 h-10 bg-secondary-background rounded-md"></View>
            <View className="   w-3 h-14 bg-secondary-background rounded-md"></View>
            <View className="   w-3 h-8 bg-secondary-background rounded-md"></View>
            <View className="   w-3 h-6 bg-secondary-background rounded-md"></View>
            <View className="   w-3 h-10 bg-secondary-background rounded-md"></View>
            <View className="   w-3 h-10 bg-secondary-background rounded-md"></View>
            <View className="   w-3 h-12 bg-secondary-background rounded-md"></View>
            <View className="   w-3 h-8 bg-secondary-background rounded-md"></View>
            <View className="   w-3 h-6 bg-secondary-background rounded-md"></View>
            <View className="   w-3 h-10 bg-secondary-background rounded-md"></View>
            <View className="   w-3 h-10 bg-secondary-background rounded-md"></View>
            <View className="   w-3 h-12 bg-secondary-background rounded-md"></View>
          </View>
        </View>

        <View className="flex-row items-center absolute -bottom-4 left-20">
          <View className="w-8 h-8 rounded-full bg-primary-contrast"></View>
          <View className="w-32 h-1 bg-primary-contrast"></View>
          <View className="w-8 h-8 rounded-full bg-primary-contrast"></View>
        </View>
      </View>

      <View className="pt-3">
        <View className="flex-row justify-between">
          <Text className="text-primary-text">$24</Text>
          <Text className="text-primary-text">$1300+</Text>
        </View>
      </View>
    </View>
  );
}
