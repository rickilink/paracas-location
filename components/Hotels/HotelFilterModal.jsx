import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import IconFeather from "react-native-vector-icons/Feather";
import IconIoicons from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import ModalContent from "./ModalContent";

export default function HotelFilterModal() {
  const { primaryContrast } = useSelector((state) => state.theme.colors);

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleFilter = () => {
    setModalVisible(false);
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

            <View className="m-6 h-screen rounded-lg ">
              <ModalContent />
            </View>
            <View className="absolute bottom-3 items-center justify-center w-screen px-6">
              <TouchableOpacity
                onPress={() => handleFilter()}
                className="bg-primary-contrast h-[70px] rounded-lg w-full justify-center items-center"
              >
                <Text className="font-bold text-button-text text-lg ">
                  Filter
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* //Modal Body End*/}
        </View>
      </Modal>

      {/* Modal Initial Button */}

      <TouchableOpacity onPress={() => handleOpenModal()}>
        <IconIoicons name="filter" size={30} color={primaryContrast} />
      </TouchableOpacity>
      {/* //Modal Initial Button End*/}
    </View>
  );
}
