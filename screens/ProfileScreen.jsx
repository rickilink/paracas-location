import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import ProfileHeader from "../components/Profile/ProfileHeader";
import { logOut } from "../redux/slices/userSlice";

export default function ProfileScreen() {
  const dispatch = useDispatch();

  const { secondaryBackground } = useSelector((state) => state.theme.colors);
  const navigation = useNavigation();

  function handleLogout() {
    dispatch(logOut());
    navigation.navigate("Home");
  }
  return (
    <View className="">
      <ProfileHeader />
      <View className="p-12">
        <Button onPress={handleLogout} title="logout" />
      </View>
      <StatusBar />
    </View>
  );
}
