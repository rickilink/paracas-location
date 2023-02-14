import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import IconEntypo from "react-native-vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";
import { getSponsorHotel } from "../../redux/slices/hotelSlice";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function ImageSection({ hotels }) {
  const navigation = useNavigation();
  const { primaryContrast, buttonText } = useSelector(
    (state) => state.theme.colors
  );
  const dispatch = useDispatch();
  const Sponsors = hotels?.filter((ht) => ht.isSponsor);

  function handleRedirect(to) {
    const linkToNavigate = `${to.type.charAt(0).toUpperCase()}${to.type.slice(
      1
    )}Selected`;
    const ItemDetails = to;

    navigation.navigate(linkToNavigate, {
      ItemDetails,
    });

    /*   switch (to.type) {
      

        break;
      case "restaurant":
        navigation.navigate("RestaurantSelected", {
          ItemDetails,
        });

        break;
      case "tour":
        navigation.navigate("TourSelected", {
          ItemDetails,
        });

        break;
      default:
        console.warn("Header in HOmeScreen line 67");
        break;
    } */
  }

  return (
    <View className="mt-3 ">
      {/* Images container */}
      <View>
        <View className="relative w-full h-[300px]  rounded-md">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-3 px-6  ">
              {Sponsors.map((item, i) => (
                <TouchableOpacity onPress={() => handleRedirect(item)} key={i}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    className="relative w-[300px] h-[300px] bg-secondary-background rounded-md  object-contain "
                  />
                  <LinearGradient
                    colors={["rgba(0,0,0,0.3)", "transparent"]}
                    className="absolute w-full items-center  h-[65px] rounded-b-3xl  rounded-md"
                  ></LinearGradient>
                  <View className="absolute w-full items-center  h-[45px] rounded-b-3xl ">
                    <Text className="text-button-text text-lg font-extrabold top-4 ">
                      {item.name}
                    </Text>
                  </View>
                  {/* sponsored icon */}
                  <View className="absolute w-[100px] h-[40px] bottom-0 rounded-tl-xl rounded-bl-md rounded-br-xl bg-primary-contrast opacity-80"></View>
                  <View className="absolute bottom-0 left-0">
                    <View className="flex-row items-center p-3">
                      <IconEntypo
                        name="bookmark"
                        color={buttonText}
                        size={20}
                      />
                      <Text className="text-button-text font-bold italic">
                        Sponsor
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
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
