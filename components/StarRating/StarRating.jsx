import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import IconEntypo from "react-native-vector-icons/Entypo";
import useTheme from "../../hooks/useTheme";

const Star = ({ color }) => (
  <TouchableOpacity>
    <IconEntypo name="star" size={14} color={color} />
  </TouchableOpacity>
);

export const StarRating = ({ totalStars }) => {
  const { primaryContrast } = useTheme();
  return (
    <View className="flex-row">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          className="bg-primary-contrast text-primary-contrast"
          color={primaryContrast}
        />
      ))}
    </View>
  );
};
