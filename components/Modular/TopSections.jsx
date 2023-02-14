import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import Features from "../Features";
import IconsMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function TopSections(props) {
  let arrayToNavigate = [];
  const navigation = useNavigation();
  const { primaryContrast } = useSelector((state) => state.theme.colors);

  function handleRedirect(to) {
    const ItemDetails = to;

    switch (to.type) {
      case "hotel":
        navigation.navigate("HotelSelected", {
          ItemDetails,
        });

        break;
      case "restaurant":
        navigation.navigate("RestaurantSelected", {
          ItemDetails,
        });

        break;
      default:
        console.warn("Header in HOmeScreen line 67");
        break;
    }
  }

  switch (props.type) {
    case "Top Places":
      arrayToNavigate = props.TopPlaces;
      break;
    case "Top Reserved":
      arrayToNavigate = props.topReserved;
      break;
    case "Top Visited":
      arrayToNavigate = props.topVisited;
      break;
  }

  return (
    <View className="w-screen ">
      {/* Top left Button */}
      <View className="flex-row items-center justify-between px-6">
        <Text className="text-primary-text text-xl font-semibold capitalize">
          {props.type || "Section"}
        </Text>
        <TouchableOpacity>
          <Text className="text-primary-contrast font-semibold italic text-lg">
            see all
          </Text>
        </TouchableOpacity>
      </View>

      {/* Body Section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="mt-3 flex-row space-x-2  pr-10 pl-6">
          {arrayToNavigate.map((tp, index) => (
            <TouchableOpacity
              onPress={() => handleRedirect(tp)}
              key={index}
              className=" relative bg-secondary-background w-[300px] h-[200px] rounded-md p-3"
            >
              <Image
                className=" absolute bg-secondary-background w-[300px] h-[200px] rounded-md "
                source={{
                  uri: tp.image,
                }}
              />
              {tp.topPlace | tp.topReserved | tp.topVisited && (
                <View className="absolute bg-primary-background  w-16 h-8 top-[0px] right-0  rounded-br-xl rounded-tl-xl items-center justify-center z-10 "></View>
              )}

              <View className="absolute bg-black opacity-30  w-[300px] h-16 top-0 left-0  rounded-t-md rounded-b-xl  items-center justify-center "></View>
              <View className="flex-row justify-between ">
                <Text className="font-bold capitalize text-button-text text-xl">
                  {tp.name || "Title Hotel"}
                </Text>
                {tp.topPlace | tp.topReserved | tp.topVisited && (
                  <View className="absolute flex-row space-x-1 items-center z-20 -top-[5px] right-0">
                    <IconsMaterialCommunityIcons
                      name="fire"
                      size={20}
                      color={primaryContrast}
                    />
                    <Text className="font-semibold italic text-primary-text z-20">
                      TOP
                    </Text>
                  </View>
                )}
              </View>
              <Text className="font-light text-button-text">
                Nov 30, 2023 - Dec 24, 2023
              </Text>
              {/* Features */}
              <View className=" absolute bottom-0  p-3 left-0 items-center flex-row flex-wrap space-x-2 gap-2 ">
                {tp.features.map((ft, index) => (
                  <View key={`${index}-${ft}`}>
                    <Features name={ft} />
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
