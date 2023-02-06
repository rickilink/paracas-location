import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { selectCounter, setCounter } from "../redux/slices/counterSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen() {
  const navigation = useNavigation();
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  const updateValue = () => {
    dispatch(setCounter({ counter: counter + 1 }));
  };
  return (
    <SafeAreaView className="flex-1 mt-10 justify-center items-center">
      <Text className=" my-3">{counter}</Text>
      <Button title="Press" onPress={updateValue}></Button>
      <Button
        title="Profile"
        onPress={() => navigation.navigate("Profile")}
      ></Button>
      <Button
        title="FetchUsers"
        onPress={() => navigation.navigate("Users")}
      ></Button>
    </SafeAreaView>
  );
}
