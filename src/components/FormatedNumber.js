import { View, Text } from "react-native";
import React from "react";
import NumberFormat from "react-number-format";
import { colors } from "../../constants/theme";

const FormatedNumber = ({ value, size, color }) => {
  return (
    <View>
      <NumberFormat
        value={value}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"N"}
        renderText={(value) => (
          <Text
            style={{
              color: color,
              fontSize: size,
              fontWeight: "700",
              fontFamily: "OpenSansMedium",
            }}
          >
            {value}
          </Text>
        )}
      />
    </View>
  );
};

export default FormatedNumber;
