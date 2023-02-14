import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SectionHeroCard from "./SectionHeroCard";
import { ScrollView } from "react-native-gesture-handler";

export default function SectionHero({ filteredByDiscount }) {
  return (
    <View>
      <View className="flex-row space-x-3">
        <TouchableOpacity>
          <Text className="text-xl">Discounts</Text>
        </TouchableOpacity>
        {/*  <TouchableOpacity>
          <Text className="text-xl">Executed</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-xl">All</Text>
        </TouchableOpacity> */}
      </View>
      {/* Cards */}
      <View className="pt-3 ">
        <ScrollView horizontal>
          <View className="flex-row space-x-3">
            {filteredByDiscount?.map((item, index) => (
              <View key={index} className="w-[330px] ">
                <SectionHeroCard key={item.id} {...item} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
