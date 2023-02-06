import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";

export function ProfileScreen() {
  return (
    <View className="flex-1 mt-10 justify-center items-center">
      <Text>ProfileScreen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")}></Button>
      <Button
        title="Profile"
        onPress={() => navigation.navigate("Profile")}
      ></Button>
    </View>
  );
}
