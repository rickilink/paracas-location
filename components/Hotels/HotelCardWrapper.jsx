import { View, Text } from "react-native";
import React from "react";
import HotelCard from "./HotelCard";

export default function HotelCardWrapper() {
  return (
    <View className="flex-row  justify-between">
      <View className="">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </View>
      <View className="mt-10">
        <HotelCard side="right" />
        <HotelCard side="right" />
        <HotelCard side="right" />
        <HotelCard side="right" />
      </View>
    </View>
  );
}
