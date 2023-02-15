import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import SectionHeader from "../../components/Modular/SectionHeader";

import SectionHero from "../../components/Modular/SectionHero";
import SectionPopularStays from "../../components/Modular/SectionPopularStays";

import { filterToursByDiscount } from "../../redux/slices/tourSlice";
import { useTransports } from "../../hooks/useTransport";
import { filterTransportByDiscount } from "../../redux/slices/transportSlice";
import { useServices } from "../../hooks/useService";
import { filterExchangeByDiscount } from "../../redux/slices/exchangeSlice";
import { filterServiceByDiscount } from "../../redux/slices/serviceSlice";

// query import { collection, query, where, getDocs } from "firebase/firestore";

export default function ServicesScreen() {
  const services = useServices(); //TODO: change Name
  const filteredServices = filterServiceByDiscount(services); //TODO: change Name

  return (
    <View className="pt-8 px-6 bg-primary-background flex-1">
      <View>
        <SectionHeader title="services" Items={services} />
        {/*TODO: Change Name */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <SectionHero filteredByDiscount={filteredServices} />
          <SectionPopularStays type="service" Items={services} />
        </ScrollView>
      </View>
    </View>
  );
}
