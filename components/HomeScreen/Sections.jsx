import { View, Text } from "react-native";
import React from "react";
import TopPlacesSection from "./TopPlacesSection";

export default function Sections({ TopPlaces, topVisited, topReserved }) {
  return (
    <View className="mt-8 ">
      <View>
        <TopPlacesSection TopPlaces={TopPlaces} type="Top Places" />
      </View>
      <View className="pt-6">
        <TopPlacesSection topReserved={topReserved} type="Top Reserved" />
      </View>
      <View className="pt-6">
        <TopPlacesSection topVisited={topVisited} type="Top Visited" />
      </View>
    </View>
  );
}
