import { View, Text } from "react-native";
import React from "react";
import ProfileSectionLastVisited from "./ProfileSectionLastVisited";
import ProfileSectionMyFavorite from "./ProfileSectionMyFavorite";

export default function ProfileSections({ currentUser }) {
  return (
    <View className="space-y-3">
      <View>
        <ProfileSectionLastVisited currentUser={currentUser} />
      </View>
      <View className="pt-3">
        <ProfileSectionMyFavorite currentUser={currentUser} />
      </View>
    </View>
  );
}
