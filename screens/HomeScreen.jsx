import { SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/HomeScreen/Header.jsx";
import ImageSection from "../components/HomeScreen/ImageSection.jsx";
import Sections from "../components/HomeScreen/Sections.jsx";
import { useSelector } from "react-redux";
import { fetchHotels } from "../redux/services/hotels.js";

export default function HomeScreen() {
  const hotels = useSelector((state) => state.hotel.hotels);
  if (hotels.length <= 0) {
    console.log("recuperando hoteles de la base de datos");
    fetchHotels();
  }

  return (
    <SafeAreaView className="bg-primary-background]">
      <Header />
      <ImageSection />
      <Sections />
      <StatusBar />
    </SafeAreaView>
  );
}
