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

export default function ModalFilterByFeature({ type, filter, Items }) {
  let FeaturesToFilter = filter;
  let allFeatures = Items?.reduce(
    (features, item) => [...features, ...item.features],
    []
  ); //get all features in all items

  /* switch (type) {
    case "hotel":
      allFeatures = Items?.reduce(
        (features, item) => [...features, ...item.features],
        []
      );

      break;
    case "restaurant":
      allFeatures = Items?.reduce(
        (features, item) => [...features, ...item.features],
        []
      );
      break;
    case "tour":
      allFeatures = Items?.reduce(
        (features, item) => [...features, ...item.features],
        []
      );
      break;
    default:
      console.warn("UNknow modalfilterByFeature 30");
      break;
  } */

  const dispatch = useDispatch();
  const uniqueFeatures = [...new Set(allFeatures)];

  const handleAddFeature = (feature) => {
    switch (type) {
      case "hotel": // Case Hotel
        if (FeaturesToFilter.includes(feature)) {
          dispatch(
            setFeaturesToFilter(FeaturesToFilter.filter((f) => f !== feature))
          );
        } else {
          dispatch(setFeaturesToFilter([...FeaturesToFilter, feature]));
        }
        dispatch(setFilter());

        break;
      case "restaurant": // Case Restaurant
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
      case "tour": // Case Restaurant
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

      <View className="items-start flex-row space-x-2 flex-wrap space-y-2 gap-2">
        {uniqueFeatures &&
          uniqueFeatures.map((ft, i) => (
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
  );
}
