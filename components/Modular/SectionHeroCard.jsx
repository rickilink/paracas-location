import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import IconsMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Features from "../Features";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

export default function SectionHeroCard(props) {
  const { primaryContrast } = useSelector((state) => state.theme.colors);
  const navigation = useNavigation();

  function handleRedirect() {
    const ItemDetails = props;
    navigation.navigate("HotelSelected", {
      ItemDetails,
    });
  }

  return (
    <TouchableOpacity
      onPress={() => handleRedirect()}
      className="relative w-full h-[230px] bg-secondary-background rounded-xl"
    >
      <Image
        source={{
          uri: props.image,
        }}
        className=" absolute w-full h-[230px]  rounded-xl"
      />
      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "transparent"]}
        className="absolute w-full h-[70px] rounded-t-xl rounded-b-xl  "
      ></LinearGradient>
      <View className=" h-full p-3">
        <View className="flex-row justify-between ">
          <Text className="text-lg font-bold text-button-text">
            {props.name || "Title Hotel"}
          </Text>
          <View className="flex-row items-center space-x-1 ">
            <IconsMaterialCommunityIcons
              name="fire"
              size={20}
              color={primaryContrast}
            />
            <Text className="font-semibold text-button-text text-lg">
              {props.discountAmount ? `-${props.discountAmount}%` : "-20%"}
            </Text>
          </View>
        </View>
        <Text className="font-thin text-button-text">
          {props.discountTime || "Nov 23 , 2023 - Dec 23 , 2023"}
        </Text>

        {/* Features */}
        <View className=" absolute bottom-0  p-3 left-0 items-center flex-row flex-wrap space-x-2 gap-2 ">
          <View>
            <Features name="Wi-FI" />
          </View>
          <View>
            <Features name="Open Pool" />
          </View>
          <View>
            <Features name="from $40" />
          </View>
          <View>
            <Features name="Breakfast" />
          </View>
          <View>
            <Features name="Bar" />
          </View>
          <View>
            <Features name="Restaurant" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
