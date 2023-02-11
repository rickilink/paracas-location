import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import IconEntypo from "react-native-vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";
import { getSponsorHotel } from "../../redux/slices/hotelSlice";
import { useNavigation } from "@react-navigation/native";

export default function ImageSection() {
  const navigation = useNavigation();
  const { primaryContrast } = useSelector((state) => state.theme.colors);
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotel.hotels);
  const Sponsors = hotels?.filter((ht) => ht.isSponsor);

  function handleSelectedHotel(props) {
    let ItemDetails = props;
    navigation.navigate("HotelSelected", {
      ItemDetails,
    });
  }

  return (
    <View className="mt-3 ">
      {/* Images container */}
      <View>
        {/*  //TODO: scrollView horizontal */}
        <View className="relative w-full h-[300px]  rounded-md">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-3 px-6  ">
              {Sponsors.map((hotel, i) => (
                <TouchableOpacity
                  onPress={() => handleSelectedHotel(hotel)}
                  key={i}
                >
                  <Image
                    source={{
                      uri: hotel.image,
                    }}
                    className="relative w-[300px] h-[300px] bg-secondary-background rounded-md  object-contain "
                  />
                  {/* sponsored icon */}
                  <View className="absolute w-[100px] h-[40px] bottom-0 rounded-tl-xl rounded-bl-md rounded-br-xl bg-black opacity-40"></View>
                  <View className="absolute bottom-0 left-0">
                    <View className="flex-row items-center p-3">
                      <IconEntypo
                        name="bookmark"
                        color={primaryContrast}
                        size={20}
                      />
                      <Text className="text-primary-contrast font-bold italic">
                        Located
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        {/*  <View className="relative w-full h-[300px] bg-secondary-background rounded-md">
          <Image
            source={{
              uri: Sponsors[0]?.image,
            }}
            className="w-full h-full rounded-md"
          />
          <View className="absolute w-full h-[40px] bottom-0 rounded-t-2xl rounded-b-md bg-black opacity-40"></View>
           Bottom left marker 
          <View className="absolute bottom-0 left-0">
            <View className="flex-row items-center p-3">
              <IconEntypo name="bookmark" color={primaryContrast} size={20} />
              <Text className="text-primary-contrast font-bold italic">
                Located
              </Text>
            </View>
          </View>
        </View> */}
      </View>
      {/* slider pagination */}
      <View className="items-center justify-center flex-row space-x-2 pt-3 ">
        {/*TODO: add color to current image in screen */}
        {Sponsors.map((el, i) => (
          <TouchableOpacity
            key={i}
            className="w-10 h-1 bg-secondary-background rounded-full"
          ></TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
