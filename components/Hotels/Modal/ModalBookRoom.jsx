import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";

import DatePicker from "../../DateTimePicker";

export default function ModalBookRoom({
  destination,
  roomType,
  setDateInserted,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [destinationValue, onChangeDestination] = useState(destination);
  const [dateValue, onChangeDate] = useState("");
  const [nightsValue, onChangeNights] = useState("");
  const [guestsValue, onChangeGuests] = useState("");
  const [typeValue, onChangeType] = useState("");
  const [showTypeOptions, setShowTypeOptions] = useState(false);

  const [bedroomsValue, onChangeBedrooms] = useState("");

  const { primaryContrast } = useSelector((state) => state.theme.colors);

  const optionsDate = { day: "2-digit", month: "2-digit", year: "numeric" };

  const handleDateChange = (date) => {
    const formattedDate = date.toLocaleDateString("es-PE", optionsDate);
    onChangeDate(formattedDate);
    handleModalClose();
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  function handleShowTypeOptions() {
    setShowTypeOptions(true);
  }
  function handleSelectType(selected) {
    onChangeGuests(`${selected.value}`);
    onChangeType(`${selected.key}`);
    setShowTypeOptions(false);
    setDateInserted({
      destinationValue,
      dateValue,
      nightsValue,
      guestsValue: selected.value,
      typeValue: selected.key,
    });
  }

  return (
    <View>
      <View className="mb-3">
        <Text className="font-extrabold text-primary-text text-2xl capitalize">
          Book room
        </Text>
        <Text>
          Create an application to stay in this hotel with the following
          information
        </Text>
      </View>
      {/* Inputs */}
      <View>
        <View>
          <TextInput
            onChangeText={onChangeDestination}
            keyboardType="default"
            placeholder="Destination"
            className="bg-primary-background px-6 h-14 rounded-md"
            value={destinationValue}
          />
        </View>
        <View className="flex-row items-center justify-between pt-3">
          <View className="relative flex-row items-center w-[48%]">
            <TextInput
              onChangeText={onChangeDate}
              keyboardType="default"
              placeholder="Date"
              className="bg-primary-background flex-1  h-14 px-6 rounded-md"
              value={dateValue}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              className="absolute right-2"
            >
              <IconMaterialIcons
                name="date-range"
                size={30}
                color={primaryContrast}
              />
            </TouchableOpacity>
            {modalVisible && (
              <DatePicker value={selectedDate} onChange={handleDateChange} />
            )}
          </View>
          <TextInput
            onChangeText={onChangeNights}
            keyboardType="numeric"
            placeholder="Nights"
            className="bg-primary-background w-[48%]  h-14 px-6 rounded-md"
            value={nightsValue}
          />
        </View>
        <View className="flex-row items-center justify-between pt-3">
          {/* SelectType */}
          <TouchableOpacity
            onPress={() => handleShowTypeOptions()}
            className="bg-primary-background  w-[48%] h-14 rounded-md items-center  justify-center"
          >
            <Text className=" text-primary-text">Room Type</Text>
            {showTypeOptions && (
              <View className="absolute top-4 w-full  bg-secondary-background rounded-md border-2 border-primary-contrast">
                {roomType &&
                  Object.entries(roomType).map(([key, value]) => (
                    <TouchableOpacity
                      onPress={() => handleSelectType({ key, value })}
                      className="py-4 items-center justify-center bg-primary-background rounded-md my-2"
                    >
                      <Text>{key}</Text>
                    </TouchableOpacity>
                  ))}
              </View>
            )}
          </TouchableOpacity>
          <TextInput
            onChangeText={onChangeGuests}
            keyboardType="numeric"
            placeholder="Guests"
            className="bg-primary-background w-[48%] h-14 px-6 rounded-md"
            value={guestsValue}
          />
          {/*   <TextInput
            onChangeText={onChangeBedrooms}
            keyboardType="numeric"
            placeholder="Bedrooms"
            className="bg-primary-background w-[48%]  h-14 px-6 rounded-md"
            value={bedroomsValue}
          /> */}

          {/*  <TextInput
            onChangeText={onChangeType}
            keyboardType="default"
            placeholder="Type"
            className="bg-primary-background px-6 h-14 rounded-md"
            value={typeValue}
          /> */}
        </View>
      </View>
    </View>
  );
}
