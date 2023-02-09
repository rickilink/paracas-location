import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import HotelSectionCard from "./HotelSectionCard";
import { useSelector } from "react-redux";

export default function HotelSectionsHero() {
  const hotels = useSelector((state) => state.hotel.hotels);
  const hotelsWithDiscount = hotels?.filter((hot) => hot.discount);

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
        {hotelsWithDiscount?.map((hotel) => (
          <HotelSectionCard key={hotel.id} {...hotel} />
        ))}
      </View>
    </View>
  );
}
