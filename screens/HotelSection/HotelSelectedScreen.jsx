import { View, Text, ScrollView } from "react-native";
import React from "react";
import HotelSelectedHeader from "../../components/Hotels/HotelSelected/HotelSelectedHeader";
import HotelSelectedImages from "../../components/Hotels/HotelSelected/HotelSelectedImages";
import HotelSelectedFeatures from "../../components/Hotels/HotelSelected/HotelSelectedFeatures";
import HotelSelectedAbout from "../../components/Hotels/HotelSelected/HotelSelectedAbout";
import { WideButton } from "../../components/WideButton";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function HotelSelectedScreen() {
  const {
    params: { props },
  } = useRoute();

  return (
    <View className="relative pt-8 px-6 flex-1 bg-primary-background">
      <ScrollView>
        <View className=" pb-10 ">
          <HotelSelectedHeader name={props.name} rating={props.rating} />
          <HotelSelectedImages
            image={props.image}
            location={props.location}
            gallery={props.gallery}
          />
          <HotelSelectedFeatures features={props.features} />
          <HotelSelectedAbout description={props.description} />
        </View>
      </ScrollView>
      <View className="static bottom-0  w-full">
        <WideButton title={`Book for ${props.price}`} navigate="Home" />
      </View>
    </View>
  );
}
