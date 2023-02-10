import { View, Text } from "react-native";
import React from "react";

export default function HotelSelectedAbout({ description }) {
  return (
    <View className="mt-6">
      <Text className="font-bold text-xl text-primary-text capitalize mb-3">
        About
      </Text>
      <Text className="text-primary-text text-center">
        {description ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nulla  aliquam minima reiciendis ipsa est dignissimos, tenetur itaque vitae deleniti, corporis, illo sapiente consectetur adipisci esse magni impedit natus facere."}
      </Text>
    </View>
  );
}
