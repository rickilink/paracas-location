import { View, Text } from "react-native";
import React from "react";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";

export default function HotelSelectedHeader() {
  const { primaryContrast } = useSelector((state) => state.theme.colors);

  return (
    <View className="mt-3">
      <Text className="text-3xl font-bold text-primary-text capitalize">
        Hotel selected name
      </Text>
      <View className="flex-row space-x-3 items-center pt-3">
        <IconAntDesign name="star" size={24} color={primaryContrast} />
        <Text className="font-bold text-md text-primary-text">4.9</Text>
        <Text className="font-thin text-primary-text">100 reviews</Text>
      </View>
    </View>
  );
}
