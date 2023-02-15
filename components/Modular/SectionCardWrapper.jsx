import { View } from "react-native";
import React from "react";
import SectionCard from "./SectionCard";
import { useFilter } from "../../hooks/useHotels";
import { useRestaurantFilter } from "../../hooks/useRestaurant";
import { useTourFilter } from "../../hooks/useTours";
import { useMarketFilter } from "../../hooks/useMarkets";
import { useTransportFilter } from "../../hooks/useTransport";
import { useExchangeFilter } from "../../hooks/useExchange";
import { useServiceFilter } from "../../hooks/useService";

export default function SectionCardWrapper({ Items, type }) {
  let FilteredItems = [];
  let leftItems = [];
  let rightItems = [];

  switch (type) {
    case "hotel":
      FilteredItems = useFilter();
      break;
    case "restaurant":
      FilteredItems = useRestaurantFilter();
      break;
    case "tour":
      FilteredItems = useTourFilter();
      break;
    case "market":
      FilteredItems = useMarketFilter();
      break;
    case "transport":
      FilteredItems = useTransportFilter();
      break;
    case "exchange":
      FilteredItems = useExchangeFilter();
      break;
    case "service":
      FilteredItems = useServiceFilter();
      break;

    default:
      console.warn("UNknow SectionCardWrapper 21");

      break;
  }

  if (FilteredItems.length > 0) {
    leftItems = FilteredItems.filter((hotel, index) => index % 2 === 1);
    rightItems = FilteredItems.filter((hotel, index) => index % 2 !== 1);
  } else {
    leftItems = Items.filter((hotel, index) => index % 2 === 1);
    rightItems = Items.filter((hotel, index) => index % 2 !== 1);
  }

  return (
    <View className="flex-row justify-between pb-16">
      <View className="">
        {rightItems?.map((item, index) => (
          <SectionCard type={type} key={index} item={item} />
        ))}
      </View>
      <View className="mt-10">
        {leftItems?.map((item, index) => (
          <SectionCard type={type} side="right" key={index} item={item} />
        ))}
      </View>
    </View>
  );
}
