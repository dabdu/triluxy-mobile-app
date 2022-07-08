import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { colors, SIZES } from "../../constants/theme";

const DateInput = ({ dateInput, setDateInput, title, width }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChangeIncomeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();
    setDateInput(fDate);
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 5,
        width: width ? width : "100%",
        borderColor: colors.darkSecondary,
        borderWidth: 1,
        borderRadius: 10,
      }}
    >
      <Text style={{ color: "gray" }}>{title}</Text>
      <TouchableOpacity onPress={() => setShow(true)}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontWeight: "600",
            color: colors.primary,
            paddingVertical: 5,
          }}
        >
          {dateInput}
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          display="default"
          onChange={onChangeIncomeDate}
        />
      )}
    </View>
  );
};

export default DateInput;
