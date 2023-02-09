import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IconsMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Features from "../Features";

import { useSelector } from "react-redux";

export default function HotelSectionCard() {
  const { primaryContrast } = useSelector((state) => state.theme.colors);

  return (
    <TouchableOpacity className="w-full h-[180px] bg-secondary-background rounded-xl">
      <View className=" h-full p-3">
        <View className="flex-row justify-between ">
          <Text className="text-lg font-bold text-primary-text">
            Title Hotel
          </Text>
          <View className="flex-row items-center space-x-1">
            <IconsMaterialCommunityIcons
              name="fire"
              size={20}
              color={primaryContrast}
            />
            <Text className="font-semibold text-primary-text">3 offers</Text>
          </View>
        </View>
        <Text className="font-thin text-primary-text">
          Nov 23 , 2023 - Dec 23 , 2023
        </Text>

        {/* Features */}
        <View className=" absolute bottom-0  p-3 left-0 items-center flex-row flex-wrap space-x-2 gap-2 ">
          <View>
            <Features name="Wi-FI" />
          </View>
          <View>
            <Features name="Open Pool" />
          </View>
          <View>
            <Features name="from $40" />
          </View>
          <View>
            <Features name="Breakfast" />
          </View>
          <View>
            <Features name="Bar" />
          </View>
          <View>
            <Features name="Restaurant" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
