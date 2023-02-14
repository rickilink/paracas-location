import { View, Text } from "react-native";
import React from "react";
import Review from "../Review";

export default function SectionSelectedReviews({ reviews }) {
  return (
    <View className="mt-6 ">
      <Text className="font-bold text-xl text-primary-text capitalize mb-3">
        Reviews
      </Text>
      <View>
        {reviews && (
          <View className="space-y-6">
            {reviews.map((rev, index) => (
              <View
                key={index}
                className="bg-secondary-background p-2 rounded-t-3xl rounded-br-3xl"
              >
                <Review data={rev} />
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}
