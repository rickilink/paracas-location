import { View, Text } from "react-native";
import React from "react";
import Features from "../Features";

export default function ModalContent() {
  return (
    <View>
      <View className="pb-3">
        <Text className="text-2xl font-bold text-primary-text">Filter by</Text>
      </View>
      <View className="items-start flex-row space-x-2 flex-wrap space-y-2 gap-2">
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
        <View>
          <Features name="restaurant" />
        </View>
        <View>
          <Features name="restaurant" />
        </View>
        <View>
          <Features name="restaurant" />
        </View>
      </View>
    </View>
  );
}
