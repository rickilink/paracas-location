import { View, Text } from "react-native";
import React from "react";
import ProfileSectionLastVisited from "./ProfileSectionLastVisited";
import ProfileSectionMyFavorite from "./ProfileSectionMyFavorite";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function ProfileSections() {
  const navigation = useNavigation();
  const currentUser = useSelector((state) => state.auth.currentUser);

  if (!currentUser?.name) {
    navigation.navigate("Home");
  }
  return (
    <View className="space-y-3">
      {currentUser && (
        <View>
          <ProfileSectionLastVisited currentUser={currentUser} />
        </View>
      )}

      {currentUser && (
        <View className="pt-3">
          <ProfileSectionMyFavorite currentUser={currentUser} />
        </View>
      )}
    </View>
  );
}
