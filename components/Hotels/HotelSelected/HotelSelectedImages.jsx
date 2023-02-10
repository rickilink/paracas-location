import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import IconEntypo from "react-native-vector-icons/Entypo";
import { useSelector } from "react-redux";

export default function HotelSelectedImages({ image, location, gallery }) {
  const { primaryContrast } = useSelector((state) => state.theme.colors);

  return (
    <View className="pt-3 ">
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
      <ScrollView horizontal className="">
        <View className="flex-row space-x-3  ">
          {gallery &&
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
            ))}
        </View>
      </ScrollView>

      {/* Location */}
      <View className="flex-row space-x-3 items-center pt-3 px-3">
        <IconEntypo name="location-pin" size={30} color={primaryContrast} />
        <Text className="text-primary-text font-semibold">
          {location || "Paracas - Ica"}
        </Text>
      </View>
    </View>
  );
}
