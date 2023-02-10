import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import IconFeather from "react-native-vector-icons/Feather";
import IconIoicons from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import ModalFilterByFeature from "./ModalFilterByFeature";

import ModalFilterPrice from "./ModalFilterPrice";
import { WideButton } from "../WideButton";
import ModalBookRoom from "./Modal/ModalBookRoom";

export default function HotelBookModal({ price }) {
  const { primaryContrast } = useSelector((state) => state.theme.colors);
  const filter = useSelector((state) => state.hotel.FeaturesToFilter);

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleFilter = () => {
    setModalVisible(false);
    Alert.alert("Gracias por Utilizar esta Demo", "Grax");

    navigation.navigate("Home");
  };
  return (
    <View className="relative items-center justify-center  ">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(true)}
      >
        <View className="relative flex-1 mt-20  ">
          {/* Modal Body */}
          <View className="bg-secondary-background flex-1  rounded-t-2xl ">
            {/* Button close */}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className=" absolute top-0 right-0 p-3 z-10"
            >
              <IconFeather name="x" color="white" size={30} />
            </TouchableOpacity>
            {/* //Button close end */}

            <View className="m-6 h-screen rounded-lg  ">
              {/* Body */}
              <View className="pb-3">
                <ModalBookRoom />
              </View>
            </View>
            <View className="absolute bottom-3 items-center justify-center w-screen px-6">
              <TouchableOpacity
                onPress={() => handleFilter()}
                className="bg-primary-contrast h-[70px] rounded-lg w-full justify-center items-center"
              >
                <Text className="font-bold text-button-text text-lg ">
                  Create Application Request
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* //Modal Body End*/}
        </View>
      </Modal>

      {/* Modal Initial Button */}

      <TouchableOpacity
        onPress={handleOpenModal}
        className="w-full mb-3 h-[70px] bg-primary-contrast rounded-md items-center justify-center"
      >
        {/* TODO: fix this button */}
        <Text className="text-button-text font-bold text-xl">
          Book For {price || "$20"}
        </Text>
      </TouchableOpacity>
      {/* //Modal Initial Button End*/}
    </View>
  );
}
