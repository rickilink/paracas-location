import { View, Text } from "react-native";
import React from "react";
import SectionCardWrapper from "./SectionCardWrapper";
import SectionFilterModal from "./SectionFilterModal";

export default function SectionPopularStays({ type, Items }) {
  return (
    <View className="pt-3 ">
      {/* header */}
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-xl font-bold ">Popular Stays</Text>

        <SectionFilterModal type={type} Items={Items} />
      </View>
      {/* Cards */}
      <View>
        <SectionCardWrapper Items={Items} type={type} />
      </View>
    </View>
  );
}