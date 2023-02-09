import { View, Text, ScrollView } from "react-native";
import React from "react";
import IconEntypo from "react-native-vector-icons/Entypo";
import { useSelector } from "react-redux";

export default function HotelSelectedImages() {
  const { primaryContrast } = useSelector((state) => state.theme.colors);
  return (
    <View className="pt-3">
      {/* Images */}
      <ScrollView>
        {/*TODO: add scroll*/}
        <View className="w-[90%] h-[300px] bg-secondary-background rounded-md"></View>
      </ScrollView>
      {/* Location */}
      <View className="flex-row space-x-3 items-center pt-3">
        <IconEntypo name="location-pin" size={30} color={primaryContrast} />
        <Text className="text-primary-text font-semibold">
          Paracas 503 - Ica
        </Text>
      </View>
    </View>
  );
}
