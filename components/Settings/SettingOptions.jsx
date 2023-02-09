import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";

import { useSelector } from "react-redux";

export default function SettingOptions({ title }) {
  const { primaryContrast, darkSecondaryBackground } = useSelector(
    (state) => state.theme.colors
  );
  return (
    <View className="pt-6">
      {/* Options */}

      <View>
        {/* Option1 */}
        <TouchableOpacity className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-6">
            <IconAnt name="user" size={30} color={primaryContrast} />
            <Text className="text-lg text-primary-text">
              {title || "Your Info"}
            </Text>
          </View>
          <IconEvilIcons
            name="chevron-right"
            size={30}
            color={darkSecondaryBackground}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
