import { View, Text, ScrollView } from "react-native";
import React from "react";
import IconEntypo from "react-native-vector-icons/Entypo";
import { useSelector } from "react-redux";

export default function ImageSection() {
  const { primaryContrast } = useSelector((state) => state.theme.colors);

  return (
    <View className="mt-3 px-6">
      {/* Images container */}
      <View>
        {/*  //TODO: scrollView horizontal */}

        {/* Image 1 */}
        <View className="relative w-full h-[300px] bg-secondary-background rounded-md">
          {/* Bottom left marker */}
          <View className="absolute bottom-0 left-0">
            <View className="flex-row items-center p-3">
              <IconEntypo name="bookmark" color={primaryContrast} size={20} />
              <Text className="text-primary-contrast font-bold italic">
                Located
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* slider pagination */}
      <View className="items-center justify-center flex-row space-x-2 pt-3 ">
        <View className="w-10 h-1 bg-primary-contrast rounded-full"></View>
        <View className="w-10 h-1 bg-secondary-background rounded-full"></View>
        <View className="w-10 h-1 bg-secondary-background rounded-full"></View>
      </View>
    </View>
  );
}
