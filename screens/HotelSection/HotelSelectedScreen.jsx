import { View, Text } from "react-native";
import React from "react";
import HotelSelectedHeader from "../../components/Hotels/HotelSelected/HotelSelectedHeader";
import HotelSelectedImages from "../../components/Hotels/HotelSelected/HotelSelectedImages";
import HotelSelectedFeatures from "../../components/Hotels/HotelSelected/HotelSelectedFeatures";
import HotelSelectedAbout from "../../components/Hotels/HotelSelected/HotelSelectedAbout";
import { WideButton } from "../../components/WideButton";

export default function HotelSelectedScreen() {
  return (
    <View className="relative pt-8 px-6 flex-1 bg-primary-background">
      <HotelSelectedHeader />
      <HotelSelectedImages />
      <HotelSelectedFeatures />
      <HotelSelectedAbout />
      <View className="absolute bottom-4  mx-6 w-full">
        <WideButton title="Book for $1450" navigate="Home" />
      </View>
    </View>
  );
}
