import { View, Text } from "react-native";
import React from "react";
import TopSections from "./TopSections";

export default function Sections({ TopPlaces, topVisited, topReserved }) {
  return (
    <View className="mt-8 ">
      <View>
        <TopSections TopPlaces={TopPlaces} type="Top Places" />
      </View>
      <View className="pt-6">
        <TopSections topReserved={topReserved} type="Top Reserved" />
      </View>
      <View className="pt-6">
        <TopSections topVisited={topVisited} type="Top Visited" />
      </View>
    </View>
  );
}
