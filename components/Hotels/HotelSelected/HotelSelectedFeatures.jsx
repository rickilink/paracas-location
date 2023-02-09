import { View, Text, ScrollView } from "react-native";
import React from "react";
import Features from "../../Features";

export default function HotelSelectedFeatures({ features }) {
  return (
    <View className="pt-3">
      <Text className="text-xl font-bold text-primary-text mb-3">Features</Text>

      <View className="items-start ">
        <View className="flex-row flex-wrap space-x-2 gap-2 ">
          {features &&
            features.map((ft, items) => (
              <View key={items}>
                <Features name={ft} />
              </View>
            ))}
        </View>
      </View>
      {/* 
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
        </View> */}
    </View>
  );
}
