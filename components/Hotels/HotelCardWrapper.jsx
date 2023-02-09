import { View, Text } from "react-native";
import React from "react";
import HotelCard from "./HotelCard";
import { useSelector } from "react-redux";

export default function HotelCardWrapper() {
  const hotels = useSelector((state) => state.hotel.hotels);

  const leftHotels = hotels.filter((hotel, index) => index % 2 === 1);
  const rightHotels = hotels.filter((hotel, index) => index % 2 !== 1);

  return (
    <View className="flex-row  justify-between pb-16">
      <View className="">
        {rightHotels?.map((hotel) => (
          <HotelCard key={hotel.id} {...hotel} />
        ))}
      </View>
      <View className="mt-10">
        {leftHotels?.map((hotel) => (
          <HotelCard side="right" key={hotel.id} {...hotel} />
        ))}
      </View>
    </View>
  );
}
