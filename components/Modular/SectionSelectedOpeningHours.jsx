import { View, Text } from "react-native";
import React from "react";

export default function SectionSelectedOpeningHours() {
  return (
    <View className="mt-6">
      <Text className="font-bold text-xl text-primary-text capitalize mb-3">
        Opening Hours
      </Text>
      <View className="flex-row justify-between space-x-2 px-6">
        {/* Mon - Fry */}
        <View className="flex-row  bg-secondary-background rounded-tr-3xl rounded-bl-3xl p-2 ">
          <View className="w-2 h-2 rounded-full bg-primary-contrast self-center  mr-2"></View>
          <View className=" space-y-2">
            <Text className="text-sm font-medium text-primary-text">
              Monday - Friday
            </Text>
            <Text className="text-primary-text font-extrabold text-md">
              05:00 am - 06:00pm
            </Text>
          </View>
        </View>
        {/* Mon - Fry */}
        <View className="flex-row bg-secondary-background rounded-tl-3xl rounded-br-3xl p-2">
          <View className="w-2 h-2 rounded-full bg-primary-contrast self-center mr-2"></View>
          <View className=" space-y-2">
            <Text className="text-sm font-medium text-primary-text">
              Saturday - Sunday
            </Text>
            <Text className="text-primary-text font-extrabold text-md">
              08:00 am - 04:00pm
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
