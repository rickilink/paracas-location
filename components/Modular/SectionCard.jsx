import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function SectionCard(props) {
  const navigation = useNavigation();
  const shadowHeigh = props.item.name.length > 20 ? 12 : 10;
  const ItemDetails = props.item;

  const handleNavigation = () => {
    const linkToNavigate = `${props.type
      .charAt(0)
      .toUpperCase()}${props.type.slice(1)}Selected`;

    navigation.navigate(linkToNavigate, {
      ItemDetails,
    });
    /*switch (props.type) {
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
      case "tour":
        navigation.navigate("TourSelected", {
          ItemDetails,
        });
        break;
      default:
        console.warn("UNknow SectionCard 23");

        break;
    } */
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
      {props?.item.image && (
        <Image
          source={{
            uri: props?.item.image,
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
      {props.type === "hotel" && (
        <View
          className={
            props.side === "right"
              ? "absolute w-16 h-14 bg-black bottom-0 rounded-tr-xl  opacity-30 "
              : "absolute w-16 h-14 bg-black bottom-0 rounded-tr-xl rounded-bl-xl  opacity-30"
          }
        ></View>
      )}

      <View
        className={
          props.side === "right"
            ? "absolute bg-primary-contrast w-8 h-8 top-0 right-0  rounded-bl-xl items-center justify-center"
            : "absolute bg-primary-contrast w-8 h-8 top-0 right-0 rounded-tr-xl rounded-bl-xl items-center justify-center"
        }
      >
        <Text className="text-button-text font-bold">
          {props?.item.rating || "4.9"}
        </Text>
      </View>

      <Text className="font-semibold text-button-text capitalize max-w-[115px] decoration-clone ">
        {props?.item.name || "HotelCard"}
      </Text>
      {props.type === "hotel" && (
        <View className="absolute bottom-0 left-0  m-3 space-y-0">
          {/* TODO: erase this when is restaurant type */}
          <Text className="text-button-text text-lg ">
            {props?.item.price || "$99"}
          </Text>
          <Text className="text-button-text font-thin">per night</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
