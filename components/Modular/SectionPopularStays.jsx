import { View, Text } from "react-native";
import React from "react";
import SectionCardWrapper from "./SectionCardWrapper";
import SectionFilterModal from "./SectionFilterModal";

export default function SectionPopularStays({ type, Items }) {
  return (
    <View className="pt-3 ">
      {/* header */}
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-xl font-bold text-primary-text ">Populars</Text>

        <SectionFilterModal type={type} Items={Items} />
        {/* Inside Switch */}
      </View>
      {/* Cards */}
      <View>
        <SectionCardWrapper Items={Items} type={type} />
      </View>
    </View>
  );
}
