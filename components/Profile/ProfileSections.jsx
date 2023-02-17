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
      {currentUser.visited.length > 0 && (
        <View>
          <ProfileSectionLastVisited currentUser={currentUser} />
        </View>
      )}

      {currentUser.favorite.length > 0 && (
        <View className="pt-3">
          <ProfileSectionMyFavorite currentUser={currentUser} />
        </View>
      )}
    </View>
  );
}
