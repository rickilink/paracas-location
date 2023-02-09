import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HotelCard(props) {
  const navigation = useNavigation();
  const shadowHeigh = props.name.length > 20 ? 12 : 10;

  const handleNavigation = () => {
    navigation.navigate("HotelSelected", {
      props,
    });
  };
  return (
    <TouchableOpacity
      onPress={() => handleNavigation()}
      className={
        props.side === "right"
          ? "relative w-40 h-40 bg-secondary-background  rounded-tl-xl rounded-br-xl p-3 m-1 mb-3 "
          : "relative w-40 h-40 bg-secondary-background  rounded-tr-xl rounded-bl-xl p-3 m-1 mb-3"
      }
    >
      {props?.image && (
        <Image
          source={{
            uri: props?.image,
          }}
          className={
            props.side === "right"
              ? "absolute w-40 h-40 bg-secondary-background rounded-tl-xl rounded-br-xl object-cover   "
              : "absolute w-40 h-40 bg-secondary-background  rounded-tr-xl rounded-bl-xl  object-cover  "
          }
        />
      )}
      <View
        className={
          props.side === "right"
            ? `absolute w-40  bg-black rounded-tl-xl rounded-bl-2xl opacity-30  h-${shadowHeigh}`
            : `absolute w-40  bg-black  rounded-tr-xl rounded-bl-2xl  opacity-30 h-${shadowHeigh}`
        }
      ></View>

      <View
        className={
          props.side === "right"
            ? "absolute w-16 h-14 bg-black bottom-0 rounded-tr-xl  opacity-30 "
            : "absolute w-16 h-14 bg-black bottom-0 rounded-tr-xl rounded-bl-xl  opacity-30"
        }
      ></View>
      <View
        className={
          props.side === "right"
            ? "absolute bg-primary-contrast w-8 h-8 top-0 right-0  rounded-bl-xl items-center justify-center"
            : "absolute bg-primary-contrast w-8 h-8 top-0 right-0 rounded-tr-xl rounded-bl-xl items-center justify-center"
        }
      >
        <Text className="text-button-text font-bold">
          {props?.rating || "4.9"}
        </Text>
      </View>

      <Text className="font-semibold text-button-text capitalize max-w-[115px] decoration-clone ">
        {props?.name || "HotelCard"}
      </Text>

      <View className="absolute bottom-0 left-0  m-3 space-y-0">
        <Text className="text-button-text text-lg ">
          {props?.price || "$99"}
        </Text>
        <Text className="text-button-text font-thin">per night</Text>
      </View>
    </TouchableOpacity>
  );
}
