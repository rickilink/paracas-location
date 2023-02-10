import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/HomeScreen/Header.jsx";
import ImageSection from "../components/HomeScreen/ImageSection.jsx";
import Sections from "../components/HomeScreen/Sections.jsx";
import { useSelector } from "react-redux";
import { fetchHotels } from "../redux/services/hotels.js";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const hotels = useSelector((state) => state.hotel.hotels);
  if (hotels.length <= 0) {
    console.log("recuperando hoteles de la base de datos");
    fetchHotels();
  }

  return (
    <SafeAreaView className="bg-primary-background]">
      <Header />
      <ImageSection />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row pt-3 px-6 space-x-3">
          <TouchableOpacity
            onPress={() => navigation.navigate("Hotels")}
            className=" bg-secondary-background  rounded-md  h-[40px] items-center justify-center "
          >
            <Text className="px-3">Hotels</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" bg-secondary-background p-2 rounded-md  h-[40px] items-center justify-center ">
            <Text className="px-3">Restaurants</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" bg-secondary-background p-2 rounded-md  h-[40px] items-center justify-center ">
            <Text className="px-3">Tours</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" bg-secondary-background p-2 rounded-md  h-[40px] items-center justify-center ">
            <Text className="px-3">Taxis</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" bg-secondary-background p-2 rounded-md  h-[40px] items-center justify-center ">
            <Text className="px-3">Exchanges</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" bg-secondary-background p-2 rounded-md  h-[40px] items-center justify-center ">
            <Text className="px-3">Markets</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" bg-secondary-background p-2 rounded-md  h-[40px] items-center justify-center ">
            <Text className="px-3">Services</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Sections />
      <StatusBar />
    </SafeAreaView>
  );
}
