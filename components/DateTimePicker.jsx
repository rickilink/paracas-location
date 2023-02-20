import React, { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ value, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (event, selectedDate) => {
    /* setShowPicker(Platform.OS === "ios"); */
    onChange(selectedDate);
  };

  return (
    <>
      <DateTimePicker
        value={value}
        mode="date"
        display={Platform.OS === "ios" ? "spinner" : "default"}
        onChange={handleChange}
        style={styles.picker}
      />
    </>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: "100%",
  },
});

export default DatePicker;
