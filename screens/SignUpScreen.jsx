import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import IconButton from "react-native-vector-icons/Entypo";
import { useState } from "react";
import { app } from "../firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { db } from "../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/slices/authSlice";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const isAllFieldsFilled =
    name.length > 3 &&
    lastName.length > 3 &&
    emailRegex.test(email) &&
    password.length > 5;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const removeSpaces = (text) => {
    return text.replace(/\s/g, "");
  };
  const handleSignUp = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const { uid, email } = user;

        // Create a new document for the user in Firestore
        const userRef = doc(db, "Users", uid);
        setDoc(userRef, {
          email,
          name: `${name} ${lastName}`,
          photoURL:
            "https://firebasestorage.googleapis.com/v0/b/paracas-location.appspot.com/o/Users%2FuserIcon.jpg?alt=media&token=858eb69c-0afb-40cf-adc4-bed0743287dd",
          // add other information here as needed
        })
          .then(() => {
            console.log("User document created successfully");
            dispatch(
              setCurrentUser({
                name,
                email,
                phoneNumber: null,
                photoURL:
                  "https://firebasestorage.googleapis.com/v0/b/paracas-location.appspot.com/o/Users%2FuserIcon.jpg?alt=media&token=858eb69c-0afb-40cf-adc4-bed0743287dd",
              })
            );
            navigation.navigate("Home");
          })
          .catch((error) => {
            console.error("Error creating user document:", error);
          });
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  };

  return (
    <View className=" mt-10 flex-1 bg-primary-background">
      <View className="mt-3 mx-5 flex-1 rounded-md ">
        {/* Welcome  */}
        <View className="items-center p-12">
          <Text className=" text-2xl font-bold text-primary-text tracking-[3px]">
            Welcome
          </Text>
          <Text className="text-md font-semibold text-primary-text mt-3 ">
            Welcome!{" "}
            <Text className="font-normal">
              now you can create a new account
            </Text>
          </Text>
        </View>
        {/* Inputs */}

        <View className="space-y-6 mt-12">
          <View className="flex-row  justify-between ">
            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={(text) => setName(removeSpaces(text))}
              className={
                name.length <= 3 && name.length != 0
                  ? "bg-button-text w-[49%] px-3 rounded-md h-[60px] text-primary-danger border-primary-danger border-2"
                  : "bg-button-text w-[49%] px-3 rounded-md h-[60px] text-primary-contrast font-bold border-primary-contrast border-2 "
              }
            ></TextInput>
            <TextInput
              placeholder="Last Name"
              value={lastName}
              onChangeText={(text) => setLastName(removeSpaces(text))}
              className={
                lastName.length <= 3 && lastName.length != 0
                  ? "bg-button-text w-[49%] px-3 rounded-md h-[60px]  text-primary-danger border-primary-danger border-2"
                  : "bg-button-text w-[49%] px-3 rounded-md h-[60px] text-primary-contrast font-bold border-primary-contrast border-2"
              }
            ></TextInput>
          </View>
          <TextInput
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(removeSpaces(text))}
            className={
              !emailRegex.test(email) && email.length != 0
                ? "bg-white w-full px-3 rounded-md h-[60px] text-primary-danger border-primary-danger border-2"
                : "bg-white w-full px-3 rounded-md h-[60px]   text-primary-contrast font-bold border-primary-contrast border-2"
            }
          ></TextInput>

          <View
            className={
              password.length < 6 && password.length != 0
                ? "flex-row items-center bg-white w-full px-3 rounded-md h-[60px] justify-between border-primary-danger border-2"
                : "flex-row items-center bg-white w-full px-3 rounded-md h-[60px] justify-between border-primary-contrast border-2"
            }
          >
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!isPasswordVisible}
              className={
                password.length < 6 && password.length != 0
                  ? " text-primary-danger flex-1  h-full"
                  : " text-primary-contrast flex-1  h-full"
              }
              placeholder="Password"
              minLength={6}
            ></TextInput>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <IconButton name="eye-with-line" color="#1BC4B9" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Button */}

        <View className="mt-12">
          <TouchableOpacity
            disabled={!isAllFieldsFilled}
            onPress={handleSignUp}
            className={
              isAllFieldsFilled
                ? "w-full h-[70px] bg-primary-contrast rounded-md items-center justify-center"
                : "w-full h-[70px] bg-secondary-background rounded-md items-center justify-center"
            }
          >
            <Text className="text-button-text font-bold text-xl">Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Or Log with google */}

        <View className="items-center mt-6">
          <View></View>
          <Text className="text-primary-text">Or Continue With</Text>
          <View></View>
        </View>

        {/* Icons google, ios, facebook */}

        <View className="mt-12 mx-6 flex-row justify-between">
          <TouchableOpacity className="w-[70px] h-[55px] bg-primary-contrast rounded-md items-center justify-center">
            <Icon name="google" size={30} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity className="w-[70px] h-[55px] bg-primary-contrast rounded-md items-center justify-center">
            <Icon name="google" size={30} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity className="w-[70px] h-[55px] bg-primary-contrast rounded-md items-center justify-center">
            <Icon name="google" size={30} color={"white"} />
          </TouchableOpacity>
        </View>
        {/* Already have an acc */}

        <View className="items-center mt-12 flex-row justify-center">
          <Text className="text-primary-text">Already have an account ? </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="bg-none border-none"
          >
            <Text className="text-primary-contrast font-semibold">Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar />
    </View>
  );
}
