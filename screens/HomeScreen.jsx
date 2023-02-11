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
import {
  fetchHotels,
  useHotels,
  useHotelTopPlaces,
} from "../hooks/useHotels.js";
import { useNavigation } from "@react-navigation/native";
import { fetchRestaurants, useRestaurants } from "../hooks/useRestaurant.js";
import TopNavigationButton from "../components/HomeScreen/TopNavigationButton.jsx";

export default function HomeScreen() {
  const Buttons = [
    { title: "Hotels", navigationUrl: "Hotels" },
    { title: "Restaurants", navigationUrl: "Restaurants" },
    { title: "Taxis" },
    { title: "Tours" },
    { title: "Exchange" },
    { title: "Markets" },
    { title: "Services" },
  ];
  const navigation = useNavigation();
  const hotels = useHotels();
  const topPlacesHotels = hotels?.filter((hot) => hot.topPlace);
  const topReservedHotels = hotels?.filter((hot) => hot.topReserved);
  const topVisitedHotels = hotels?.filter((hot) => hot.topVisited);

  const restaurants = useRestaurants();
  const topPlacesRestaurants = restaurants?.filter((item) => item.topPlace);
  const topReservedRestaurants = restaurants?.filter((hot) => hot.topReserved);
  const topVisitedRestaurants = restaurants?.filter((hot) => hot.topVisited);

  const TopPlaces = [...topPlacesHotels, ...topPlacesRestaurants];
  const topVisited = [...topVisitedHotels, ...topVisitedRestaurants];
  const topReserved = [...topReservedHotels, ...topReservedRestaurants];

  if (hotels.length <= 0) {
    fetchHotels();
  }
  if (restaurants.length <= 0) {
    fetchRestaurants();
  }

  return (
    <SafeAreaView className="bg-primary-background">
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="pb-32">
          <ImageSection />
          {/* Buttons */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row pt-3 px-6 space-x-3">
              {Buttons.map((button, index) => (
                <View key={index}>
                  <TopNavigationButton
                    title={button.title}
                    navigationName={button.navigationUrl}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
          <Sections
            TopPlaces={TopPlaces}
            topVisited={topVisited}
            topReserved={topReserved}
          />
        </View>
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
}
