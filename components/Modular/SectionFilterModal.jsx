import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import IconFeather from "react-native-vector-icons/Feather";
import IconIoicons from "react-native-vector-icons/Ionicons";
import useTheme from "../../hooks/useTheme";

import ModalFilterByFeature from "./ModalFilterByFeature";
import ModalFilterPrice from "../Hotels/ModalFilterPrice";
import { useFilterByFilteredFeatures } from "../../hooks/useHotels";
import { useRestaurantFilterByFilteredFeatures } from "../../hooks/useRestaurant";
import { useTourFilterByFilteredFeatures } from "../../hooks/useTours";
import { useMarketFilterByFilteredFeatures } from "../../hooks/useMarkets";
import { useTransportFilterByFilteredFeatures } from "../../hooks/useTransport";
import { useExchangeFilterByFilteredFeatures } from "../../hooks/useExchange";
import { useServiceFilterByFilteredFeatures } from "../../hooks/useService";

export default function SectionFilterModal({ type, Items }) {
  let filter = [];
  const { primaryContrast } = useTheme();

  switch (type) {
    case "hotel":
      filter = useFilterByFilteredFeatures();

      break;
    case "restaurant":
      filter = useRestaurantFilterByFilteredFeatures();
      break;
    case "tour":
      filter = useTourFilterByFilteredFeatures();
      break;
    case "market":
      filter = useMarketFilterByFilteredFeatures();
      break;
    case "transport":
      filter = useTransportFilterByFilteredFeatures();
      break;
    case "exchange":
      filter = useExchangeFilterByFilteredFeatures();
      break;
    case "service":
      filter = useServiceFilterByFilteredFeatures();
      break;
    default:
      console.warn("UNknow sectionFilterModal 25");

      break;
  }

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleFilter = () => {
    setModalVisible(false);
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
                <ModalFilterByFeature
                  type={type}
                  filter={filter}
                  Items={Items}
                />
              </View>
              {/* <View>
                <ModalFilterPrice />
              </View> */}
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
        <View className=" items-center justify-center">
          <IconIoicons name="filter" size={30} color={primaryContrast} />
          {filter.length > 0 && (
            <View className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full items-center justify-center ">
              <Text className="font-bold text-button-text">
                {filter.length}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      {/* //Modal Initial Button End*/}
    </View>
  );
}
