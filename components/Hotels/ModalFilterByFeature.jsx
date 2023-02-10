import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Features from "../Features";
import { useDispatch, useSelector } from "react-redux";
import { setFeaturesToFilter, setFilter } from "../../redux/slices/hotelSlice";

export default function ModalFilterByFeature() {
  const featuresInAllHotels = useSelector((state) => state.hotel.hotels);
  const allFeatures = featuresInAllHotels.reduce(
    (features, hotel) => [...features, ...hotel.features],
    []
  );
  const dispatch = useDispatch();
  const uniqueFeatures = [...new Set(allFeatures)];
  const FeaturesToFilter = useSelector((state) => state.hotel.FeaturesToFilter);
  const hotelsFiltered = useSelector((state) => state.hotel.filter);

  const handleAddFeature = (feature) => {
    if (FeaturesToFilter.includes(feature)) {
      dispatch(
        setFeaturesToFilter(FeaturesToFilter.filter((f) => f !== feature))
      );
    } else {
      dispatch(setFeaturesToFilter([...FeaturesToFilter, feature]));
    }

    dispatch(setFilter());
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
