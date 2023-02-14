import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ViewBase,
} from "react-native";
import React from "react";
import { Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import ProfileHeader from "../components/Profile/ProfileHeader";
import { logOut } from "../redux/slices/userSlice";
import ProfileSections from "../components/Profile/ProfileSections";

export default function ProfileScreen() {
  const dispatch = useDispatch();

  const {
    params: { currentUser },
  } = useRoute();

  const navigation = useNavigation();

  function handleLogout() {
    dispatch(logOut());
    navigation.navigate("Home");
  }
  return (
    <View className="flex-1">
      <ScrollView>
        <ProfileHeader currentUser={currentUser} />

        {/* Sections  */}
        <View className=" pt-6">
          <ProfileSections currentUser={currentUser} />
        </View>

        {/* <View className="p-12">
        <Button onPress={handleLogout} title="logout" />
      </View> */}
      </ScrollView>
      <StatusBar />
    </View>
  );
}
