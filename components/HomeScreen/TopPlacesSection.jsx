import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Features from "../Features";
import IconsMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function TopPlacesSection() {
  const navigation = useNavigation();
  const { primaryContrast } = useSelector((state) => state.theme.colors);
  return (
    <View>
      {/* Top left Button */}
      <View className="flex-row items-center space-x-2">
        <TouchableOpacity className=" w-1/3 h-[40px] rounded-md bg-primary-contrast items-center justify-center">
          <Text className="text-button-text font-semibold capitalize">
            Top Places
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Hotels")}
          className=" bg-secondary-background p-2 rounded-md"
        >
          <Text>Hotels</Text>
        </TouchableOpacity>
      </View>

      {/* Body Section */}
      <View className="mt-3">
        {/* Section Item */}
        <View className=" relative bg-secondary-background w-full h-[200px] rounded-md p-3">
          <View className="flex-row justify-between ">
            <Text className="font-semibold capitalize text-primary-text">
              Title Hotel
            </Text>
            <View className="flex-row space-x-1 items-center">
              <IconsMaterialCommunityIcons
                name="fire"
                size={20}
                color={primaryContrast}
              />
              <Text className="font-semibold capitalize text-primary-text">
                3 offers
              </Text>
            </View>
          </View>
          <Text className="font-light">Nov 30, 2023 - Dec 24, 2023</Text>
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
      </View>
    </View>
  );
}
