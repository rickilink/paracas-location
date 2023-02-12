import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import IconEntypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import IconFeather from "react-native-vector-icons/Feather";
import { setSearchResultsByHotel } from "../../redux/slices/searchSlice";

export default function Header({ hotels, restaurants }) {
  const [expanded, setExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigation = useNavigation();
  const { photoURL } = useSelector((state) => state.user.user);
  const { primaryContrast } = useSelector((state) => state.theme.colors);
  const dispatch = useDispatch();
  const arrayOfAll = [...hotels, ...restaurants];

  const foundItemsByName = (nameToMatch) =>
    arrayOfAll.filter((item) =>
      item.name.toLowerCase().includes(nameToMatch.toLowerCase())
    );

  let ItemsFilteredByName = foundItemsByName(searchValue);

  if (!searchValue) {
    ItemsFilteredByName = [];
  }

  /* dispatch(setSearchResultsByHotel(ItemsFilteredByName)); */

  function closeSearch() {
    setExpanded(!expanded);
    setSearchValue("");
  }

  /*  const filteredHotels = state.hotels.filter((hotel) =>
        state.FeaturesToFilter.every((feature) =>
          hotel.features.includes(feature)
        ) */

  function handleNavigation(props) {
    const ItemDetails = props;

    switch (props.type) {
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
  return (
    <View className="mt-8 px-3">
      <View className="p-3 flex-row items-center justify-between">
        {expanded ? (
          <View className="relative bg-secondary-background w-full rounded-full  flex-row items-center justify-between">
            <TextInput
              onChangeText={setSearchValue}
              value={searchValue}
              autoFocus
              className=" h-[40px]  flex-1 px-6"
            />
            <TouchableOpacity
              onPress={closeSearch}
              className="absolute h-[35px] w-[35px] right-0 mr-1  bg-primary-background rounded-full items-center justify-center"
            >
              <IconFeather name="x" color={primaryContrast} size={30} />
            </TouchableOpacity>
          </View>
        ) : (
          <View className=" flex-row justify-between flex-1 items-center ">
            <TouchableOpacity
              onPress={() => navigation.navigate("Profile")}
              className="h-10 w-10 bg-gray-300 rounded-full items-center justify-center"
            >
              <Image
                source={{
                  uri: photoURL,
                }}
                className="w-10 h-10 rounded-full"
              />
            </TouchableOpacity>

            <Text className="text-2xl font-bold text-primary-text">
              Name App
            </Text>

            <TouchableOpacity
              onPress={() => setExpanded(!expanded)}
              className="h-10 w-10 bg-gray-300 rounded-full items-center justify-center"
            >
              <IconEntypo
                name="magnifying-glass"
                color={primaryContrast}
                size={20}
              />
            </TouchableOpacity>
          </View>
        )}
        {/*  {!photoURL ? (
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="items-center justify-center"
          >
            <Text className="text-primary-contrast font-extrabold text-lg italic capitalize">
              Log in
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            className="h-10 w-10 bg-gray-300 rounded-full items-center justify-center"
          >
            <Image
              source={{
                uri: photoURL,
              }}
              className="w-10 h-10 rounded-full"
            />
           
          </TouchableOpacity>
        )} */}

        {/*delete this */}
      </View>

      {ItemsFilteredByName.length > 0 && (
        <View className="p-3 max-h-[400px]">
          <ScrollView showsVerticalScrollIndicator={false}>
            {ItemsFilteredByName.map((el, index) => (
              <View
                key={index}
                className=" h-[50px] bg-secondary-background space-y-2 rounded-b-xl mb-3 justify-center  "
              >
                <TouchableOpacity onPress={() => handleNavigation(el)}>
                  <View className="flex-row items-center justify-between px-6">
                    <Image
                      source={{
                        uri: el.image,
                      }}
                      className=" w-[45px] h-[45px] rounded-md "
                    />
                    <Text className="text-lg font-semibold italic capitalize text-primary-text">
                      {el.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
}
