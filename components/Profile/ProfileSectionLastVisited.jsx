import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import IconEntypo from "react-native-vector-icons/Entypo";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import ProfileModal from "./ProfileModal";

export default function ProfileSectionLastVisited({ currentUser }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { primaryContrast } = useSelector((state) => state.theme.colors);

  let visitedArrayFirst2 = [];
  if (currentUser) {
    visitedArrayFirst2 = currentUser.visited && currentUser.visited.slice(-2);
  }
  const navigation = useNavigation();

  const handleNavigation = (prop) => {
    const ItemDetails = prop;

    navigation.navigate("SelectedSection", {
      ItemDetails,
    });
  };

  return (
    <View>
      <View>
        <View className="flex-row items-center justify-between px-6">
          <Text className="text-primary-text text-xl font-semibold capitalize">
            Last visited
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text className="text-primary-contrast font-semibold italic text-lg">
              see all
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Body Section */}

      {currentUser && (
        <View className="mt-3 px-3 space-y-3 ">
          <ProfileModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            items={currentUser.visited}
          />
          <View className="flex-row h-[268px] justify-between">
            {visitedArrayFirst2?.map((visited, index) => (
              <TouchableOpacity
                onPress={() => handleNavigation(visited)}
                key={index}
                className=" bg-secondary-background w-[49%] rounded-tl-3xl    rounded-br-3xl"
              >
                {/*Item Image */}
                <View className="relative bg-white rounded-br-3xl rounded-tl-3xl  h-[150px]">
                  <Image
                    source={{
                      uri: visited.image,
                    }}
                    className="w-full h-full rounded-br-3xl rounded-tl-3xl"
                  />
                  {/* TopRightHeart */}
                  <View className="absolute w-8 h-8 bg-primary-background rounded-bl-xl  top-0 right-0 items-center justify-center">
                    {currentUser.favorite?.some(
                      (el) => el.name === visited.name
                    ) ? (
                      <IconEntypo
                        name="heart"
                        size={30}
                        color={primaryContrast}
                      />
                    ) : (
                      <IconEntypo
                        name="heart-outlined"
                        size={30}
                        color={primaryContrast}
                      />
                    )}
                  </View>
                  {/*bottom Left Effect */}
                  {/*  <View className="absolute w-[70px] h-[70px] bg-primary-background  rounded-br-3xl -bottom-[70px] left-0"></View> */}
                </View>
                <View className="px-3 pt-2">
                  {/*Title */}
                  <Text className="text-primary-text text-lg font-bold">
                    {visited.name || "Hotel Sunset Paracas"}
                  </Text>
                </View>

                <View className="flex-row space-x-3 px-3 pt-2 items-center">
                  <IconEntypo
                    name="location-pin"
                    size={20}
                    color={primaryContrast}
                  />
                  <Text className="text-primary-text max-w-[130px]">
                    {visited.location || "Av. Paracas - 265 - Ica"}
                  </Text>
                </View>

                <View className="flex-row space-x-3 px-3 pt-2 items-center">
                  <IconEntypo name="star" size={20} color={primaryContrast} />

                  <Text>{visited.rating || "4.9"}</Text>
                  <Text>120 reviews</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}
