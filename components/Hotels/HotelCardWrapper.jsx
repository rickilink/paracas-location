import { View, Text } from "react-native";
import React from "react";
import HotelCard from "./HotelCard";
import { useSelector } from "react-redux";

export default function HotelCardWrapper() {
  const hotels = useSelector((state) => state.hotel.hotels);
  const filteredHotels = useSelector((state) => state.hotel.filter);
  let leftHotels = [];
  let rightHotels = [];

  if (filteredHotels.length > 0) {
    leftHotels = filteredHotels.filter((hotel, index) => index % 2 === 1);
    rightHotels = filteredHotels.filter((hotel, index) => index % 2 !== 1);
  } else {
    leftHotels = hotels.filter((hotel, index) => index % 2 === 1);
    rightHotels = hotels.filter((hotel, index) => index % 2 !== 1);
  }

  return (
    <View className="flex-row  justify-between pb-16">
      <View className="">
        {rightHotels?.map((hotel, index) => (
          <HotelCard key={index} {...hotel} />
        ))}
      </View>
      <View className="mt-10">
        {leftHotels?.map((hotel, index) => (
          <HotelCard side="right" key={index} {...hotel} />
        ))}
      </View>
    </View>
  );
}
