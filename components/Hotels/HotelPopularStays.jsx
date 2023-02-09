import { View, Text } from "react-native";
import React from "react";
import IconIoicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import HotelCard from "./HotelCard";
import HotelCardWrapper from "./HotelCardWrapper";
import HotelFilterModal from "./HotelFilterModal";
export default function HotelPopularStays() {
  const { primaryContrast } = useSelector((state) => state.theme.colors);

  return (
    <View className="pt-3 ">
      {/* header */}
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-xl font-bold ">Popular Stays</Text>

        <HotelFilterModal />
      </View>
      {/* Cards */}
      <View>
        <HotelCardWrapper />
      </View>
    </View>
  );
}
