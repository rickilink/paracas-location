import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useCallback, useState } from "react";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconFeather from "react-native-vector-icons/Feather";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import useTheme from "../../hooks/useTheme";
import CarrouselComponent from "../Carrousel/Carrousel";

export default function SectionSelectedImages({ image, location, gallery }) {
  const { primaryContrast } = useTheme();

  const width = Dimensions.get("window").width;

  return (
    <View>
      {/* Images */}

      {/*TODO: add scroll*/}
      {!gallery && (
        <Image
          source={{
            uri: image,
          }}
          className="relative w-[90%] h-[300px] bg-secondary-background rounded-md  object-contain "
        />
      )}

      <View className="flex-row space-x-3  ">
        {/* {gallery &&
            gallery.map((pic, i) => (
              <View key={i}>
                <Image
                  source={{
                    uri: pic,
                  }}
                  className="relative w-[500px] h-[300px] bg-secondary-background rounded-md  object-contain "
                />
                <View className="absolute  bottom-0  mb-5 ml-5 w-12 h-12 rounded-br-3xl rounded-tl-3xl bg-primary-contrast opacity-80 items-center justify-center"></View>
                <Text className="text-button-text font-bold absolute  bottom-0  mb-1 ml-8 w-12 h-12 ">{`${
                  i + 1
                } / ${gallery.length}`}</Text>
              </View>
            ))} */}

        {gallery && (
          <CarrouselComponent images={gallery} autoplayInterval={3000} />
        )}
      </View>

      {/* footImage */}
      <View className=" pt-3 px-6 space-y-1">
        {/* location */}
        <View className="flex-row space-x-3 items-center ">
          <IconEntypo name="location-pin" size={20} color={primaryContrast} />
          <Text className="text-primary-text font-semibold ">
            {location || "Paracas - Ica"}
          </Text>
        </View>

        {/* OpenTime */}
        <View className="flex-row justify-between items-center ">
          <View className="flex-row items-center space-x-3">
            <IconFeather name="clock" size={20} color={primaryContrast} />
            <Text className="text-primary-text font-semibold text-xs">
              Open Today
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <IconFontAwesome name="tags" size={20} color={primaryContrast} />
            <Text className="text-primary-contrast font-bold text-xs">
              -58%
            </Text>
            <Text className="text-primary-text font-semibold text-xs">
              (13 Days Left)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
