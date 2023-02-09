import { View, Text } from "react-native";
import React from "react";
import Features from "../../Features";

export default function HotelSelectedFeatures() {
  return (
    <View className="pt-3">
      <Text className="text-xl font-bold text-primary-text mb-3">Features</Text>
      <View className="items-start flex-row space-x-2">
        <View>
          <Features name="Wi-FI" />
        </View>
        <View>
          <Features name="open pool" />
        </View>
        <View>
          <Features name="Breakfast" />
        </View>
        <View>
          <Features name="Bar" />
        </View>
        <View>
          <Features name="restaurant" />
        </View>
      </View>
    </View>
  );
}
