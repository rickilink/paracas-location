import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/AntDesign";
import IconButton from "react-native-vector-icons/Entypo";
import { WideButton } from "../components/WideButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app, db } from "../firebase.config";

import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { ANDROID_CLIENT_ID_DEV, CLIENT_ID, ANDROID_CLIENT_ID_PROD } from "@env";
import { setCurrentUser } from "../redux/slices/authSlice";
import { doc, getDoc } from "firebase/firestore";

/* import firebase from "firebase"; */

export default function LogInScreen() {
  const [accessToken, setAccessToken] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId: CLIENT_ID,
  }); */
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const navigation = useNavigation();
  if (currentUser.name) {
    navigation.navigate("Home");
  }

  /*  const { user, loading } = useSelector((state) => state.user); */

  /* useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      setAccessToken(id_token);
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential).then((data) =>
        dispatch(
          setCurrentUser({
            name: data?.user.displayName,
            email: data?.user.email,
            photoURL: data?.user.photoURL,
            phoneNumber: data?.user.phoneNumber,
          })
        )
      );
    }
  }, [response]); */

  /*  if (currentUser.name) {
    navigation.navigate("Profile", { currentUser });
  } */

  // Listen for changes in the user's authentication state

  function pushUserToState(data) {
    if (!currentUser.name || !currentUser.email || !currentUser.photoURL) {
      dispatch(
        setCurrentUser({
          name: data.name,
          email: data.email,
          phoneNumber: data.phoneNumber || null,
          photoURL: data.photoURL || null,
        })
      );
    }
  }

  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid } = user;

      // Get the user's document from Firestore
      const userRef = doc(db, "Users", uid);
      getDoc(userRef)
        .then((doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            pushUserToState(userData);
            // display user information in your app
          } else {
            console.log("No user data found");
          }
        })
        .catch((error) => {
          console.error("Error getting user data:", error);
        });
    } else {
      console.log("User is not logged in");
      // clear user information from your app
    }
  });

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("User logged in successfully");
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log("Error logging in:", error);
      });
  };

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
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="bg-white w-full px-3 rounded-md h-[60px] text-primary-text"
          ></TextInput>

          <View className="flex-row items-center bg-white w-full px-3 rounded-md h-[60px] justify-between">
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              className=" text-primary-text flex-1  h-full "
              placeholder="Password"
            ></TextInput>
            <TouchableOpacity>
              <IconButton name="eye-with-line" color="#1BC4B9" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Button */}

        <View className="mt-12">
          <TouchableOpacity
            onPress={handleLogin}
            className="w-full h-[70px] bg-primary-contrast rounded-md items-center justify-center"
          >
            <Text className="text-button-text font-bold text-xl">Log in</Text>
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
          {/*  <TouchableOpacity
            onPress={() => promptAsync()}
            className="w-[70px] h-[55px] bg-black rounded-md items-center justify-center"
          >
            <Icon name="google" size={30} color={"red"} />
          </TouchableOpacity> */}
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
