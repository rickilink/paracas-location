import { View, Text, ScrollView } from "react-native";
import React from "react";
import HotelSelectedHeader from "../../components/Hotels/HotelSelected/HotelSelectedHeader";
import HotelSelectedImages from "../../components/Hotels/HotelSelected/HotelSelectedImages";
import HotelSelectedFeatures from "../../components/Hotels/HotelSelected/HotelSelectedFeatures";
import HotelSelectedAbout from "../../components/Hotels/HotelSelected/HotelSelectedAbout";
import { WideButton } from "../../components/WideButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import HotelBookModal from "../../components/Hotels/HotelBookModal";

export default function HotelSelectedScreen() {
  const {
    params: { props },
  } = useRoute();

  return (
    <View className="relative pt-8 flex-1 bg-primary-background">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className=" pb-10  ">
          <View className=" px-6">
            <HotelSelectedHeader
              name={props.name || "name"}
              rating={props.rating || "rating"}
            />
          </View>
          <View className=" px-1">
            <HotelSelectedImages
              image={props.image || "image"}
              location={props.location || "location"}
              gallery={props.gallery || "gallery"}
            />
          </View>
          <View className=" px-6">
            <HotelSelectedFeatures features={props.features || "features"} />
            <HotelSelectedAbout description={props.description || "features"} />
          </View>
        </View>
      </ScrollView>

      <HotelBookModal />
    </View>
  );
}
