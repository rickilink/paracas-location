import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Features from "../Features";
import { useDispatch } from "react-redux";
import { setFeaturesToFilter, setFilter } from "../../redux/slices/hotelSlice";
import {
  setRestaurantFeaturesToFilter,
  setRestaurantFilter,
} from "../../redux/slices/restaurantSlice";
import {
  setTourFeaturesToFilter,
  setTourFilter,
} from "../../redux/slices/tourSlice";
import {
  setTransportFeaturesToFilter,
  setTransportFilter,
} from "../../redux/slices/transportSlice";
import {
  setMarketFeaturesToFilter,
  setMarketFilter,
} from "../../redux/slices/marketSlice";
import {
  setExchangeFeaturesToFilter,
  setExchangeFilter,
} from "../../redux/slices/exchangeSlice";
import {
  setServiceFeaturesToFilter,
  setServiceFilter,
} from "../../redux/slices/serviceSlice";

export default function ModalFilterByFeature({ type, filter, Items }) {
  let FeaturesToFilter = filter;
  let allFeatures = Items?.reduce(
    (features, item) => [...features, ...item.features],
    []
  ); //get all features in all items

  const dispatch = useDispatch();
  const uniqueFeatures = [...new Set(allFeatures)];

  //! TODO:   REFACTOR THIS!!!

  const handleAddFeature = (feature) => {
    switch (type) {
      case "Hotels": // Case Hotel
        if (FeaturesToFilter.includes(feature)) {
          dispatch(
            setFeaturesToFilter(FeaturesToFilter.filter((f) => f !== feature))
          );
        } else {
          dispatch(setFeaturesToFilter([...FeaturesToFilter, feature]));
        }
        dispatch(setFilter());

        break;
      case "Restaurants": // Case Restaurant
        if (FeaturesToFilter.includes(feature)) {
          dispatch(
            setRestaurantFeaturesToFilter(
              FeaturesToFilter.filter((f) => f !== feature)
            )
          );
        } else {
          dispatch(
            setRestaurantFeaturesToFilter([...FeaturesToFilter, feature])
          );
        }
        dispatch(setRestaurantFilter());

        break;
      case "Tours": // Case Restaurant
        if (FeaturesToFilter.includes(feature)) {
          dispatch(
            setTourFeaturesToFilter(
              FeaturesToFilter.filter((f) => f !== feature)
            )
          );
        } else {
          dispatch(setTourFeaturesToFilter([...FeaturesToFilter, feature]));
        }
        dispatch(setTourFilter());

        break;
      case "Markets": // Case Restaurant
        if (FeaturesToFilter.includes(feature)) {
          dispatch(
            setMarketFeaturesToFilter(
              FeaturesToFilter.filter((f) => f !== feature)
            )
          );
        } else {
          dispatch(setMarketFeaturesToFilter([...FeaturesToFilter, feature]));
        }
        dispatch(setMarketFilter());

        break;
      case "Transport": // Case Restaurant
        if (FeaturesToFilter.includes(feature)) {
          dispatch(
            setTransportFeaturesToFilter(
              FeaturesToFilter.filter((f) => f !== feature)
            )
          );
        } else {
          dispatch(
            setTransportFeaturesToFilter([...FeaturesToFilter, feature])
          );
        }
        dispatch(setTransportFilter());

        break;

      case "Exchanges": // Case Restaurant
        if (FeaturesToFilter.includes(feature)) {
          dispatch(
            setExchangeFeaturesToFilter(
              FeaturesToFilter.filter((f) => f !== feature)
            )
          );
        } else {
          dispatch(setExchangeFeaturesToFilter([...FeaturesToFilter, feature]));
        }
        dispatch(setExchangeFilter());

        break;
      case "Services": // Case Restaurant
        if (FeaturesToFilter.includes(feature)) {
          dispatch(
            setServiceFeaturesToFilter(
              FeaturesToFilter.filter((f) => f !== feature)
            )
          );
        } else {
          dispatch(setServiceFeaturesToFilter([...FeaturesToFilter, feature]));
        }
        dispatch(setServiceFilter());

        break;
      default:
        console.warn("UNknow modalfilterByFeature 66");

        break;
    }
  };

  return (
    <View>
      <View className="pb-3">
        <Text className="text-2xl font-bold text-primary-text">Filter by</Text>
      </View>

      <View className=" ">
        {uniqueFeatures && (
          <View>
            <View className="py-3">
              <Text className="font-bold text-primary-text text-xl capitalize">
                features
              </Text>
            </View>
            <View className="items-start  flex-row space-x-2 flex-wrap  space-y-2 gap-2">
              {uniqueFeatures.map((ft, i) => (
                <TouchableOpacity onPress={() => handleAddFeature(ft)} key={i}>
                  {FeaturesToFilter.includes(ft) ? (
                    <Features name={ft} color={true} />
                  ) : (
                    <Features name={ft} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
