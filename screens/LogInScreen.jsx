import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/AntDesign";
import IconButton from "react-native-vector-icons/Entypo";
import { WideButton } from "../components/WideButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export default function LogInScreen() {
  const navigation = useNavigation();

  const { user, loading } = useSelector((state) => state.user);

  return (
    <View className=" mt-10 flex-1 bg-primary-background">
      <View className="mt-3 mx-5 flex-1 rounded-md ">
        {/* Welcome  */}
        <View className="items-center p-12">
          <Text className=" text-2xl font-bold text-primary-text tracking-[1px]">
            Hello Again!
          </Text>
          <Text className="text-md font-semibold text-primary-text mt-3 ">
            Welcome back!{" "}
            <Text className="font-normal">you've been missed!</Text>
          </Text>
        </View>
        {/* Inputs */}

        <View className="space-y-6 mt-12">
          <TextInput
            className="bg-white w-full px-3 rounded-md h-[60px] text-primary-text"
            placeholder="email"
          ></TextInput>

          <View className="flex-row items-center bg-white w-full px-3 rounded-md h-[60px] justify-between">
            <TextInput
              className=" text-primary-text flex-1  h-full "
              placeholder="password"
            ></TextInput>
            <TouchableOpacity>
              <IconButton name="eye-with-line" color="#1BC4B9" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Button */}

        <View className="mt-12">
          <WideButton title="Log in" navigate={"Home"} />
        </View>

        {/* Or Log with google */}

        <View className="items-center mt-6">
          <View></View>
          <Text className="text-primary-text">Or Continue With</Text>
          <View></View>
        </View>

        {/* Icons google, ios, facebook */}

        <View className="mt-12 mx-6 flex-row justify-between">
          <TouchableOpacity className="w-[70px] h-[55px] bg-black rounded-md items-center justify-center">
            <Icon name="google" size={30} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity className="w-[70px] h-[55px] bg-black rounded-md items-center justify-center">
            <Icon name="google" size={30} color={"white"} />
          </TouchableOpacity>

          {/* <SignInWithGoogle /> */}
        </View>
        {/* Already have an acc */}

        <View className="items-center mt-12 flex-row justify-center">
          <Text className="text-primary-text">Don't have an account ? </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            className="bg-none border-none"
          >
            <Text className="text-primary-contrast font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar />
    </View>
  );
}
