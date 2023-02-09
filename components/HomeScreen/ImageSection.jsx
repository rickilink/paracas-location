import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import IconEntypo from "react-native-vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";
import { getSponsorHotel } from "../../redux/slices/hotelSlice";

export default function ImageSection() {
  const { primaryContrast } = useSelector((state) => state.theme.colors);
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotel.hotels);
  const Sponsors = hotels?.filter((ht) => ht.isSponsor);

  return (
    <View className="mt-3 px-6">
      {/* Images container */}
      <View>
        {/*  //TODO: scrollView horizontal */}

        {/* Image 1 */}
        <View className="relative w-full h-[300px] bg-secondary-background rounded-md">
          <Image
            source={{
              uri: Sponsors[0]?.image,
            }}
            className="w-full h-full rounded-md"
          />
          <View className="absolute w-full h-[40px] bottom-0 rounded-t-2xl rounded-b-md bg-black opacity-40"></View>
          {/* Bottom left marker */}
          <View className="absolute bottom-0 left-0">
            <View className="flex-row items-center p-3">
              <IconEntypo name="bookmark" color={primaryContrast} size={20} />
              <Text className="text-primary-contrast font-bold italic">
                Located
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* slider pagination */}
      <View className="items-center justify-center flex-row space-x-2 pt-3 ">
        <View className="w-10 h-1 bg-primary-contrast rounded-full"></View>
        <View className="w-10 h-1 bg-secondary-background rounded-full"></View>
        <View className="w-10 h-1 bg-secondary-background rounded-full"></View>
      </View>
    </View>
  );
}
