import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import SectionHeader from "../../components/Modular/SectionHeader";

import SectionHero from "../../components/Modular/SectionHero";
import SectionPopularStays from "../../components/Modular/SectionPopularStays";
import { useHotels, useFilterByFiltered } from "../../hooks/useHotels";

import { filterRestaurantsByDiscount } from "../../redux/slices/restaurantSlice";
import { useRestaurants } from "../../hooks/useRestaurant";

// query import { collection, query, where, getDocs } from "firebase/firestore";

export default function RestaurantScreen() {
  const restaurants = useRestaurants(); //TODO: change Name
  const filteredRestaurants = filterRestaurantsByDiscount(restaurants); //TODO: change Name

  return (
    <View className="pt-8 px-6 bg-primary-background flex-1">
      <View>
        <SectionHeader title="restaurant" />
        {/*TODO: Change Name */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <SectionHero filteredByDiscount={filteredRestaurants} />
          <SectionPopularStays type="restaurant" Items={restaurants} />
        </ScrollView>
      </View>
    </View>
  );
}
