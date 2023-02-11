import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

export default function ModalBookRoom() {
  const [destinationValue, onChangeDestination] = useState("");
  const [dateValue, onChangeDate] = useState("");
  const [nightsValue, onChangeNights] = useState("");
  const [guestsValue, onChangeGuests] = useState("");
  const [bedroomsValue, onChangeBedrooms] = useState("");
  const [typeValue, onChangeType] = useState("");

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
          <TextInput
            onChangeText={onChangeDate}
            keyboardType="default"
            placeholder="Date"
            className="bg-primary-background w-[48%] h-14 px-6 rounded-md"
            value={dateValue}
          />
          <TextInput
            onChangeText={onChangeNights}
            keyboardType="default"
            placeholder="Nights"
            className="bg-primary-background w-[48%]  h-14 px-6 rounded-md"
            value={nightsValue}
          />
        </View>
        <View className="flex-row items-center justify-between pt-3">
          <TextInput
            onChangeText={onChangeGuests}
            keyboardType="default"
            placeholder="Guests"
            className="bg-primary-background w-[48%] h-14 px-6 rounded-md"
            value={guestsValue}
          />
          <TextInput
            onChangeText={onChangeBedrooms}
            keyboardType="default"
            placeholder="Bedrooms"
            className="bg-primary-background w-[48%]  h-14 px-6 rounded-md"
            value={bedroomsValue}
          />
        </View>
        <View className="pt-3">
          <TextInput
            onChangeText={onChangeType}
            keyboardType="default"
            placeholder="Type"
            className="bg-primary-background px-6 h-14 rounded-md"
            value={typeValue}
          />
        </View>
      </View>
    </View>
  );
}
