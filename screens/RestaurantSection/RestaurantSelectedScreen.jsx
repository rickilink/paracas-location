import { View, ScrollView } from "react-native";
import React from "react";
import SectionSelectedHeader from "../../components/Modular/SectionSelectedHeader";
import SectionSelectedImages from "../../components/Modular/SectionSelectedImages";
import SectionSelectedFeatures from "../../components/Modular/SectionSelectedFeatures";
import SectionSelectedAbout from "../../components/Modular/SectionSelectedAbout";
import { useRoute } from "@react-navigation/native";
import HotelBookModal from "../../components/Hotels/HotelBookModal";
import SectionSelectedOpeningHours from "../../components/Modular/SectionSelectedOpeningHours";
import SectionSelectedReviews from "../../components/Modular/SectionSelectedReviews";

export default function RestaurantSelectedScreen() {
  const {
    params: { ItemDetails },
  } = useRoute();

  return (
    <View className="relative pt-8 flex-1 bg-primary-background">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className=" pb-10  ">
          <View className=" px-6">
            <SectionSelectedHeader
              name={ItemDetails.name || "name"}
              rating={ItemDetails.rating || "rating"}
              type={ItemDetails.type || "type"}
            />
          </View>
          <View className="px-1 ">
            <SectionSelectedImages
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
    </View>
  );
}
