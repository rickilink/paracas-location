import { View, Text } from "react-native";
import React from "react";
import TopPlacesSection from "./TopPlacesSection";

export default function Sections() {
  return (
    <View className="mt-8 px-6">
      <View>
        <TopPlacesSection />
      </View>
    </View>
  );
}
