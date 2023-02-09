import { View, Text, TouchableOpacity, Touchable, Image } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import IconEntypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function Header() {
  const navigation = useNavigation();
  const { photoURL } = useSelector((state) => state.user.user);
  const { primaryContrast } = useSelector((state) => state.theme.colors);

  return (
    <View className="mt-8 px-3">
      <View className="p-3 flex-row items-center justify-between">
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

        <Text className="text-2xl font-bold text-primary-text">Name App</Text>
        <TouchableOpacity className="h-10 w-10 bg-gray-300 rounded-full items-center justify-center">
          <IconEntypo
            name="magnifying-glass"
            color={primaryContrast}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
