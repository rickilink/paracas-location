import { View, Text } from "react-native";
import React from "react";
import HotelsHeader from "../../components/Hotels/HotelsHeader";
import HotelSectionsHero from "../../components/Hotels/HotelSectionsHero";
import HotelPopularStays from "../../components/Hotels/HotelPopularStays";

export default function HotelsScreen() {
  return (
    <View className="pt-8 px-6 bg-primary-background flex-1">
      <View>
        <HotelsHeader />
        <HotelSectionsHero />
        <HotelPopularStays />
      </View>
    </View>
  );
}
