import { View, Text } from "react-native";
import React from "react";
import ProfileSectionLastVisited from "./ProfileSectionLastVisited";
import ProfileSectionMyFavorite from "./ProfileSectionMyFavorite";
import { useNavigation } from "@react-navigation/native";

export default function ProfileSections({ currentUser }) {
  const navigation = useNavigation();

  if (!currentUser.name) {
    navigation.navigate("Home");
  }
  return (
    <View className="space-y-3">
      {currentUser.Visited && (
        <View>
          <ProfileSectionLastVisited currentUser={currentUser} />
        </View>
      )}

      {currentUser.favorites && (
        <View className="pt-3">
          <ProfileSectionMyFavorite currentUser={currentUser} />
        </View>
      )}
    </View>
  );
}
