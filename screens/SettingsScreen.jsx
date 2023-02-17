import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SettingHeader from "../components/Settings/SettingHeader";
import SettingOptions from "../components/Settings/SettingOptions";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import { useCurrentUser, useUsers } from "../hooks/useUsers";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setCurrentUser } from "../redux/slices/authSlice";
import { app } from "../firebase.config";

export default function SettingsScreen() {
  let currentUser = useCurrentUser();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
        dispatch(
          setCurrentUser({
            name: null,
            phoneNumber: null,
            email: null,
            photoURL: null,
          })
        );
        navigation.navigate("Login");
        // clear user information from your app
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  const { primaryDanger } = useSelector((state) => state.theme.colors);
  return (
    <SafeAreaView className=" bg-primary-background flex-1">
      <View className="px-6">
        <SettingHeader currentUser={currentUser} />
        <ScrollView>
          <View className="pb-6">
            <SettingOptions title="Your Info" />
            <SettingOptions title="Sharing" />
            <SettingOptions title="Notifications" />
            <SettingOptions title="Password" />
            <SettingOptions title="face ID & PIN" />
          </View>
          {/* Separation */}
          <View>
            <SettingOptions title="Security Center" />
            <SettingOptions title="Terms & Privacy" />
            <SettingOptions title="Support & Feedback" />
          </View>
          {/* LogOut */}
          <View className=" pt-12">
            <TouchableOpacity
              onPress={() => handleLogout()}
              className="flex-row items-center "
            >
              <View className="flex-row items-center space-x-6">
                <IconMaterialIcons
                  name="logout"
                  size={30}
                  color={primaryDanger}
                />
                <Text className="text-lg text-primary-danger">Log Out</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
