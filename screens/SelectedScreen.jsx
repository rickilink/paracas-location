import React, { useRef, useState } from "react";
import { View, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import SectionSelectedHeader from "../components/Modular/SectionSelectedHeader";
import SectionSelectedImages from "../components/Modular/SectionSelectedImages";
import SectionSelectedFeatures from "../components/Modular/SectionSelectedFeatures";
import SectionSelectedAbout from "../components/Modular/SectionSelectedAbout";
import HotelBookModal from "../components/Hotels/HotelBookModal";
import SectionSelectedOpeningHours from "../components/Modular/SectionSelectedOpeningHours";
import SectionSelectedReviews from "../components/Modular/SectionSelectedReviews";
import { useAnimatedScrollHandler } from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function SelectedScreen() {
  const {
    params: { ItemDetails },
  } = useRoute();

  const scrollViewRef = useRef(null);

  const handleScroll = useAnimatedScrollHandler((event) => {
    // desactivar el desplazamiento vertical en el componente principal
    scrollViewRef.current?.scrollTo({ x: 0, animated: false });

    console.log(scrollViewRef.current);
  });
  return (
    <GestureHandlerRootView className="relative pt-8 flex-1 bg-primary-background">
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
        <View className=" pb-10  ">
          <View className=" px-6">
            <SectionSelectedHeader
              name={ItemDetails.name || "name"}
              rating={ItemDetails.rating}
              type={ItemDetails.type || "type"}
            />
          </View>
          <View className="px-1 ">
            <SectionSelectedImages
              handleScroll={handleScroll}
              image={ItemDetails.image || "image"}
              location={ItemDetails.location || "location"}
              gallery={ItemDetails.gallery || "gallery"}
            />
          </View>
          <View className=" px-6 pt-3">
            {ItemDetails.features && (
              <SectionSelectedFeatures
                features={ItemDetails.features || "features"}
              />
            )}
            <SectionSelectedOpeningHours />
            {ItemDetails.description && (
              <SectionSelectedAbout
                description={ItemDetails.description || "features"}
              />
            )}
            {ItemDetails.reviews && (
              <SectionSelectedReviews
                reviews={ItemDetails.reviews || "reviews"}
              />
            )}
          </View>
        </View>
      </ScrollView>

      <HotelBookModal price={ItemDetails.price} />
    </GestureHandlerRootView>
  );
}
