import {
  View,
  Text,
  Modal,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function ProfileModal({ modalVisible, setModalVisible, items }) {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg font-bold my-4">Select an option:</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="'p-4 border-b border-b-primary-contrast bg-secondary-background rounded-md  w-full "
                onPress={() => {
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
                  <Text className="text-base text-primary-text">
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <Button title="Cancel" onPress={() => setModalVisible(false)} />
      </View>
    </Modal>
  );
}
