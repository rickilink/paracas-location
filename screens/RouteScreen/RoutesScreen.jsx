import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
  Image,
} from "react-native";
import React, { useState } from "react";
import IconOcticons from "react-native-vector-icons/Octicons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import useTheme from "../../hooks/useTheme";
import { useSelector } from "react-redux";

export default function RoutesScreen() {
  const [hotel1, setHotel1] = useState({});
  const [agency1, setAgency1] = useState({});
  const [restaurant1, setRestaurant1] = useState({});
  const [agency2, setAgency2] = useState({});
  const [selectedType, setSelectedType] = useState("");

  const agencies = useSelector((state) => state.tour.tours);
  const restaurants = useSelector((state) => state.restaurant.restaurants);
  const hotels = useSelector((state) => state.hotel.hotels);

  const navigation = useNavigation();
  const { primaryContrast, secondaryBackground } = useTheme();

  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = (item) => {
    const mapType = {
      agency1: setAgency1,
      agency2: setAgency2,
      hotel1: setHotel1,
      restaurant1: setRestaurant1,
    };

    return (
      <TouchableOpacity
        className="'p-4 border-b border-b-primary-contrast bg-secondary-background rounded-md  w-full "
        onPress={() => {
          mapType[selectedType](item);
          setModalVisible(false);
        }}
      >
        <View className="flex-row  justify-between px-14 py-4 space-x-4">
          <Image
            source={{
              uri: item.image,
            }}
            className="w-16 h-16 object-cover "
          />
          <Text className="text-base text-primary-text">{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  function handleShowModalAndType(type) {
    setSelectedType(type);
    setModalVisible(true);
  }

  return (
    <View className="relative pt-9 px-6 bg-primary-background flex-1">
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        className="absolute  bottom-5 self-center w-full h-[60px] bg-primary-contrast  z-20 rounded-md items-center justify-center"
      >
        <Text className="text-button-text font-extrabold text-xl">
          buy this route
        </Text>
      </TouchableOpacity>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="pb-14">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="py-6 "
            >
              <IconOcticons
                name="chevron-left"
                size={30}
                color={primaryContrast}
              />
            </TouchableOpacity>

            {/* title */}
            <Text className="text-3xl font-bold text-primary-text">
              Full day Paracas
            </Text>
            {/* sections */}
            <View className="pt-10 px-4">
              {/* item 1 */}
              <View className="flex-row space-x-6  ">
                <View className=" w-10 h-10 rounded-full bg-primary-contrast items-center  ">
                  <View className=" w-[2px] h-[160px] bg-primary-contrast"></View>
                </View>
                <View className="">
                  {Object.keys(hotel1).length > 0 ? (
                    <Text className=" -ml-3 text-primary-text text-xl font-semibold pt-1 min-w-[120px] max-w-[120px]">
                      {hotel1.name}
                    </Text>
                  ) : (
                    <Text className=" -ml-3 text-primary-text text-xl font-semibold pt-1 min-w-[120px] max-w-[120px]">
                      Hotel 1
                    </Text>
                  )}

                  <View className="-ml-5 pt-3 min-w-[100px] max-w-[120px] space-y-1">
                    {Object.keys(hotel1).length > 0 ? (
                      <Text className="text-primary-text">
                        {hotel1.checkIn}
                      </Text>
                    ) : (
                      <Text className="text-primary-text">
                        check-in: 10:00am
                      </Text>
                    )}

                    {Object.keys(hotel1).length > 0 ? (
                      <Text className="text-primary-text">
                        {hotel1.checkOut}
                      </Text>
                    ) : (
                      <Text className="text-primary-text">
                        check-out: 10:00am
                      </Text>
                    )}
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => handleShowModalAndType("hotel1")}
                  className="w-[120px] h-[120px] bg-dark-secondary-background rounded-md items-center justify-center  mx-[30px] mb-[30px]"
                >
                  {Object.keys(hotel1).length > 0 ? (
                    <Image
                      source={{
                        uri: hotel1.image,
                      }}
                      className="w-[120px] h-[120px]  rounded-md "
                    />
                  ) : (
                    <IconFontAwesome
                      name="plus"
                      size={32}
                      color={secondaryBackground}
                    />
                  )}
                </TouchableOpacity>
              </View>

              {/* item 2 */}
              <View className="flex-row space-x-6  ">
                <View className=" w-10 h-10 rounded-full bg-primary-contrast items-center  ">
                  <View className=" w-[2px] h-[160px] bg-primary-contrast"></View>
                </View>
                <View className="">
                  {Object.keys(agency1).length > 0 ? (
                    <Text className=" -ml-3 text-primary-text text-xl font-semibold pt-1 min-w-[120px] max-w-[120px]">
                      {agency1.name}
                    </Text>
                  ) : (
                    <Text className=" -ml-3 text-primary-text text-xl font-semibold pt-1 min-w-[120px] max-w-[120px]">
                      Tour Agency 1
                    </Text>
                  )}

                  <View className="-ml-5 pt-3 min-w-[120px] max-w-[120px] space-y-1">
                    <Text className="text-primary-text text-lg">
                      Ballestas Island
                    </Text>

                    <Text className="text-primary-text">check-in: 10:00am</Text>
                    <Text className="text-primary-text">
                      duration: 02:00hrs
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => handleShowModalAndType("agency1")}
                  className="w-[120px] h-[120px] bg-dark-secondary-background rounded-md items-center justify-center  mx-[30px] mb-[30px]"
                >
                  {Object.keys(agency1).length > 0 ? (
                    <Image
                      source={{
                        uri: agency1.image,
                      }}
                      className="w-[120px] h-[120px]  rounded-md "
                    />
                  ) : (
                    <IconFontAwesome
                      name="plus"
                      size={32}
                      color={secondaryBackground}
                    />
                  )}
                </TouchableOpacity>
              </View>

              {/* item 3 */}
              <View className="flex-row space-x-6  ">
                <View className=" w-10 h-10 rounded-full bg-primary-contrast items-center  ">
                  <View className=" w-[2px] h-[160px] bg-primary-contrast"></View>
                </View>
                <View className="">
                  {Object.keys(restaurant1).length > 0 ? (
                    <Text className=" -ml-3 text-primary-text text-xl font-semibold pt-1 min-w-[120px] max-w-[120px]">
                      {restaurant1.name}
                    </Text>
                  ) : (
                    <Text className=" -ml-3 text-primary-text text-xl font-semibold pt-1 min-w-[120px] max-w-[120px]">
                      Restaurant 1
                    </Text>
                  )}

                  <View className="-ml-5 pt-3 min-w-[120px] max-w-[120px] space-y-1">
                    {/*  <Text className="text-primary-text text-lg">
                    Ballestas Island
                  </Text> */}

                    <Text className="text-primary-text">
                      Lunch time: 12:00pm
                    </Text>
                    <Text className="text-primary-text">
                      duration: 02:00hrs
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => handleShowModalAndType("restaurant1")}
                  className="w-[120px] h-[120px] bg-dark-secondary-background rounded-md items-center justify-center  mx-[30px] mb-[30px]"
                >
                  {Object.keys(restaurant1).length > 0 ? (
                    <Image
                      source={{
                        uri: restaurant1.image,
                      }}
                      className="w-[120px] h-[120px]  rounded-md "
                    />
                  ) : (
                    <IconFontAwesome
                      name="plus"
                      size={32}
                      color={secondaryBackground}
                    />
                  )}
                </TouchableOpacity>
              </View>

              {/* item 4*/}

              <View className="flex-row space-x-6  pb-10 ">
                <View className=" w-10 h-10 rounded-full bg-primary-contrast items-center  ">
                  <View className=" w-[2px] h-[120px] bg-primary-contrast"></View>
                </View>
                <View className="">
                  {Object.keys(agency2).length > 0 ? (
                    <Text className=" -ml-3 text-primary-text text-xl font-semibold pt-1 min-w-[120px] max-w-[120px]">
                      {agency2.name}
                    </Text>
                  ) : (
                    <Text className=" -ml-3 text-primary-text text-xl font-semibold pt-1 min-w-[120px] max-w-[120px]">
                      Tour Agency 2
                    </Text>
                  )}

                  <View className="-ml-5 pt-3 min-w-[120px] max-w-[120px] space-y-1">
                    <Text className="text-primary-text text-lg">
                      National Park
                    </Text>

                    <Text className="text-primary-text">
                      check-in:{" "}
                      {Object.keys(agency2).length > 0 ? "02:00pm" : "03:00pm"}
                    </Text>
                    <Text className="text-primary-text">
                      duration:{" "}
                      {Object.keys(agency2).length > 0
                        ? "02:00hrs"
                        : "03:00hrs"}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => handleShowModalAndType("agency2")}
                  className="w-[120px] h-[120px] bg-dark-secondary-background rounded-md items-center justify-center  mx-[30px] mb-[30px]"
                >
                  {Object.keys(agency2).length > 0 ? (
                    <Image
                      source={{
                        uri: agency2.image,
                      }}
                      className="w-[120px] h-[120px]  rounded-md "
                    />
                  ) : (
                    <IconFontAwesome
                      name="plus"
                      size={32}
                      color={secondaryBackground}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* MODAL BODY */}

      <Modal visible={modalVisible} animationType="slide">
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg font-bold my-4">Select an option:</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {(selectedType === "agency1" || selectedType === "agency2") &&
                agencies.map((item) => renderItem(item))}

              {selectedType === "restaurant1" &&
                restaurants.map((item) => renderItem(item))}

              {selectedType === "hotel1" &&
                hotels.map((item) => renderItem(item))}
            </View>
          </ScrollView>
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
