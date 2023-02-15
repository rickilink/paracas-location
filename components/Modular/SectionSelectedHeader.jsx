import { View, Text } from "react-native";
import React from "react";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import useTheme from "../../hooks/useTheme";

export default function SectionSelectedHeader({ name, rating, type }) {
  const { primaryContrast } = useTheme();

  return (
    <View className="mt-3">
      <Text className="text-3xl font-bold text-primary-text capitalize">
        {name || " selected name"}
      </Text>

      <View className="flex-row space-x-3 items-center pt-3">
        <IconAntDesign name="star" size={24} color={primaryContrast} />
        <Text className="font-bold text-md text-primary-text">
          {rating || "4.9"}
        </Text>
        <Text className="font-thin text-primary-text flex-1">100 reviews</Text>
        <Text className="capitalize font-semibold text-primary-text">
          {type || "type"}
        </Text>
      </View>
    </View>
  );
}
