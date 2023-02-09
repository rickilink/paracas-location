import { Alert, Button, SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/HomeScreen/Header.jsx";
import ImageSection from "../components/HomeScreen/ImageSection.jsx";
import Sections from "../components/HomeScreen/Sections.jsx";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-primary-background]">
      <Header />
      <ImageSection />
      <View className="pt-3">
        <Button title="Hotel" onPress={() => navigation.navigate("Hotels")} />
      </View>
      <Sections />
      <StatusBar />
    </SafeAreaView>
  );
}
