import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HotelCard({ price, hotelName, rate, side }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("HotelSelected")}
      className={
        side === "right"
          ? "relative w-40 h-40 bg-secondary-background  rounded-tl-xl rounded-br-xl p-3 m-1 mb-3"
          : "relative w-40 h-40 bg-secondary-background  rounded-tr-xl rounded-bl-xl p-3 m-1 mb-3"
      }
    >
      <View
        className={
          side === "right"
            ? "absolute bg-primary-contrast w-8 h-8 top-0 right-0  rounded-bl-xl items-center justify-center"
            : "absolute bg-primary-contrast w-8 h-8 top-0 right-0 rounded-tr-xl rounded-bl-xl items-center justify-center"
        }
      >
        <Text className="text-button-text font-bold">{rate || "4.9"}</Text>
      </View>
      <Text className="font-semibold text-primary-text capitalize">
        {hotelName || "HotelCard"}
      </Text>
      <View className="absolute bottom-0 left-0  m-3">
        <Text className="text-primary-text text-lg">{price || "$99"}</Text>
        <Text className="text-primary-text font-thin">per night</Text>
      </View>
    </TouchableOpacity>
  );
}
