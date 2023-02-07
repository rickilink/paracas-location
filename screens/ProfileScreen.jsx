import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 mt-10 justify-center items-center">
      <Text>ProfileScreen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")}></Button>

      <StatusBar />
    </View>
  );
}
