import { View, Text, Image } from "react-native";
import React from "react";
import { StarRating } from "./StarRating/StarRating";
export default function Review({ data }) {
  const stars = parseInt(data.stars);

  return (
    <View className="flex-row items-center ">
      <Image
        source={{ uri: data.userPhotoURL }}
        className="w-14 h-14 rounded-full"
      />
      <View className="px-3 space-y-1  w-[260px]">
        <View className="flex-row justify-between">
          <Text className="text-primary-text font-semibold">
            {data.userName || "username"}
          </Text>
          <Text className="text-primary-text">
            {data.date || "Ene 1, 2023"}
          </Text>
        </View>
        <StarRating totalStars={stars} />

        <Text className="max-w-[260px] text-primary-text">
          {data.review || "review"}
        </Text>
      </View>
    </View>
  );
}
