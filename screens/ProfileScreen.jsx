import { View, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";

import ProfileHeader from "../components/Profile/ProfileHeader";

import ProfileSections from "../components/Profile/ProfileSections";
import { DateStamp } from "../components/dateStamp";

export default function ProfileScreen() {
  const {
    params: { currentUser },
  } = useRoute();

  return (
    <View className="flex-1">
      <ScrollView>
        <ProfileHeader currentUser={currentUser} />

        {/* Sections  */}
        <View className=" pt-6">
          <ProfileSections currentUser={currentUser} />
        </View>
      </ScrollView>
      <StatusBar />
    </View>
  );
}
