import { Alert, Button, SafeAreaView, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/HomeScreen/Header.jsx";
import ImageSection from "../components/HomeScreen/ImageSection.jsx";
import Sections from "../components/HomeScreen/Sections.jsx";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  /*  return (
    <SafeAreaView className="flex-1 mt-10 justify-center items-center">
      <Text className=" my-3">{counter}</Text>
      <Button title="Press" onPress={updateValue}></Button>
      {!user.displayName && (
        <Button
          title="Login"
          onPress={() => navigation.navigate("Login")}
        ></Button>
      )}

      <Button
        title="Profile"
        onPress={() => navigation.navigate("Profile")}
      ></Button>
      {!user.displayName && (
        <Button
          title="SignUp"
          onPress={() => navigation.navigate("SignUp")}
        ></Button>
      )}
      {user.displayName && (
        <Button title="LogOut" onPress={() => dispatch(logOut())}></Button>
      )}

      <StatusBar />
    </SafeAreaView>
  ); */

  return (
    <SafeAreaView className="bg-primary-background]">
      <Header />
      <ImageSection />
      <View className="pt-3">
        <Button title="Hotel" onPress={() => navigation.navigate("Hotels")} />
      </View>
      <Sections />
      <StatusBar />
    </SafeAreaView>
  );
}
