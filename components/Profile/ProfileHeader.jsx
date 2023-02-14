import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ItemEntypo from "react-native-vector-icons/Entypo";
import ItemIonicons from "react-native-vector-icons/Ionicons";
import ItemFeather from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
export default function ProfileHeader({ currentUser }) {
  const navigation = useNavigation();
  /*  const { photoURL } = useSelector((state) => state.user.user); */

  return (
    <View className="bg-primary-contrast w-screen h-[200px] rounded-b-xl pt-8 px-6 ">
      <View className="flex-row justify-between pt-3 ">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ItemEntypo name="chevron-small-left" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <ItemIonicons name="settings-sharp" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View className="flex-row space-x-4 pt-6">
        <Image
          source={{
            uri: currentUser.photoURL,
          }}
          className="w-20 h-20 rounded-full"
        />

        <View>
          <Text className="capitalize text-2xl font-bold text-button-text">
            {currentUser.name || "User Name"}
          </Text>
          <View className="pt-3">
            <ItemFeather name="message-square" size={30} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}
