import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/HomeScreen/Header.jsx";
import ImageSection from "../components/HomeScreen/ImageSection.jsx";
import Sections from "../components/Modular/Sections.jsx";
import { useSelector } from "react-redux";
import { fetchHotels, useHotels } from "../hooks/useHotels.js";
import { fetchRestaurants, useRestaurants } from "../hooks/useRestaurant.js";
import { fetchUsers, useUsers } from "../hooks/useUsers.js";
import TopNavigationButton from "../components/HomeScreen/TopNavigationButton.jsx";
import { fetchTours, useTours } from "../hooks/useTours.js";
import { fetchMarkets, useMarkets } from "../hooks/useMarkets.js";
import { fetchTransports, useTransports } from "../hooks/useTransport.js";
import { fetchExchanges, useExchanges } from "../hooks/useExchange.js";
import { fetchServices, useServices } from "../hooks/useService.js";

export default function HomeScreen() {
  const { primaryContrast } = useSelector((state) => state.theme.colors);
  const Buttons = [
    { title: "Hotels", navigationUrl: "Hotels" },
    { title: "Restaurants", navigationUrl: "Restaurants" },
    { title: "Tours", navigationUrl: "Tours" },
    { title: "Markets", navigationUrl: "Markets" },
    { title: "Transports", navigationUrl: "Transports" },
    { title: "Exchange", navigationUrl: "Exchanges" },
    { title: "Services", navigationUrl: "Services" },
  ];

  let users = useUsers();

  let tours = useTours();

  let markets = useMarkets();

  let transports = useTransports();

  let exchanges = useExchanges();

  let services = useServices();

  let hotels = useHotels();
  const topPlacesHotels = hotels?.filter((hot) => hot.topPlace);
  const topReservedHotels = hotels?.filter((hot) => hot.topReserved);
  const topVisitedHotels = hotels?.filter((hot) => hot.topVisited);

  let restaurants = useRestaurants();
  const topPlacesRestaurants = restaurants?.filter((item) => item.topPlace);
  const topReservedRestaurants = restaurants?.filter((hot) => hot.topReserved);
  const topVisitedRestaurants = restaurants?.filter((hot) => hot.topVisited);

  const TopPlaces = [...topPlacesHotels, ...topPlacesRestaurants];
  const topVisited = [...topVisitedHotels, ...topVisitedRestaurants];
  const topReserved = [...topReservedHotels, ...topReservedRestaurants];

  /*  const hotelsFilteredByName = useSelector((state) => state.search.hotels); */

  if (hotels.length <= 0) {
    fetchHotels();
  }
  if (restaurants.length <= 0) {
    fetchRestaurants();
  }
  if (users.length <= 0) {
    fetchUsers();
  }
  if (tours.length <= 0) {
    fetchTours();
  }
  if (markets.length <= 0) {
    fetchMarkets();
  }
  if (transports.length <= 0) {
    fetchTransports();
  }
  if (exchanges.length <= 0) {
    fetchExchanges();
  }
  if (services.length <= 0) {
    fetchServices();
  }
  return (
    <SafeAreaView className="bg-primary-background">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header contains search input */}
        <Header
          hotels={hotels}
          restaurants={restaurants}
          currentUser={users[0]}
          tours={tours}
          markets={markets}
          transports={transports}
          exchanges={exchanges}
          services={services}
        />
        <View className="pb-32">
          <ImageSection hotels={hotels} />
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
      <StatusBar backgroundColor={primaryContrast} />
    </SafeAreaView>
  );
}
