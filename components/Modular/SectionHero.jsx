import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SectionHeroCard from "./SectionHeroCard";

export default function SectionHero({ filteredByDiscount }) {
  return (
    <View>
      <View className="flex-row space-x-3">
        <TouchableOpacity>
          <Text className="text-xl">Current</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-xl">Executed</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-xl">All</Text>
        </TouchableOpacity>
      </View>
      {/* Cards */}
      <View className="pt-3 ">
        {filteredByDiscount?.map((item) => (
          <SectionHeroCard key={item.id} {...item} />
        ))}
      </View>
    </View>
  );
}
