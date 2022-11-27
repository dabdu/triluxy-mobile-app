import { View, TouchableOpacity, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome, Ionicons, Octicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { v4 as uuidv4 } from "uuid";
import Spinner from "react-native-loading-spinner-overlay";
import Toast from "react-native-toast-message";
import axios from "axios";
import { Storage } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import { InputField, PrimaryBtn } from "../../../components/Forms";
import baseURL from "../../../../constants/baseURL";
import { useAuthContext } from "../../../../context/AuthContext";
import { containerMedium } from "../../../../constants/layouts";
import { colors } from "../../../../constants/theme";

const AddRestaurantDetails = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [fImg, setFImg] = useState("");
  const [address, setAddress] = useState(0);
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [lat, setLat] = useState("");
  const [openDaysStart, setOpenDaysStart] = useState("");
  const [openDaysEnd, setOpenDaysEnd] = useState("");
  const [lng, setLng] = useState("");
  const [description, setDescription] = useState("");
  const [terms, setTerms] = useState("");
  const [onLoading, setOnLoading] = useState(false);

  const navigation = useNavigation();
  const { userId, config } = useAuthContext();

  const pickRestaurantImg = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
      allowsEditing: true,
    });
    if (!result.cancelled) {
      setCarImage(result.uri);
    } else {
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "Something Went wrong, While uploading Car Image",
        text2: "Please Try Again",
      });
    }
  };

  const onSubmitForm = async () => {
    setOnLoading(true);
    // Validation
    if (
      restaurantName === "" ||
      fImg === "" ||
      address === "" ||
      state === "" ||
      town === "" ||
      openDaysStart === "" ||
      openDaysEnd === "" ||
      description === ""
    ) {
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "Empty Fields",
        text2: "Please Filled all Fields",
      });
      setOnLoading(false);
    }
    // Get and Arrange Data
    let restaurantDetails = {
      restaurantName,
      fImg,
      address,
      state,
      town,
      lat,
      lng,
      openDaysStart,
      openDaysEnd,
      description,
      terms,
      userId,
    };
    // Upload Images
    carDetails.fImg = await uploadRestaurantImage(fImg);
    // Save to db
    await axios
      .post(`${baseURL}/restaurant/admin`, restaurantDetails, config)
      .then((res) => {
        if (res.status == 201) {
          Toast.show({
            topOffset: 60,
            type: "success",
            text1: "Restaurant Details Added Succesfully",
            text2: "You can now Manage Car Details",
          });
          setOnLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        Toast.show({
          topOffset: 60,
          type: "error",
          text1: "Something Went wrong",
          text2: "Please Try Again",
        });
        setOnLoading(false);
      });
  };
  // Car Image Upload Function

  const uploadRestaurantImage = async (fileUri) => {
    try {
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const key = `${uuidv4()}.png`;
      await Storage.put(key, blob, {
        contentType: "image/png", // contentType is optional
      });
      return key;
    } catch (err) {
      console.log("Error uploading file:", err);
    }
  };

  return (
    <ScrollView
      style={{ paddingHorizontal: 40, paddingVertical: 50, width: "100%" }}
      showsHorizontalScrollIndicator={false}
    >
      <Spinner visible={onLoading} />
      {/* Car Image */}
      <View
        style={{
          width: "100%",
          height: 250,
          marginVertical: 10,
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          style={[
            containerMedium,
            {
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // paddingVertical: 40,
              height: "100%",
            },
          ]}
          onPress={pickRestaurantImg}
        >
          {fImg ? (
            <Image
              source={{ uri: fImg }}
              style={{ height: "100%", width: "80%" }}
            />
          ) : (
            <>
              <Ionicons name="images" size={80} color={colors.secondary} />
              <Text>Upload Restaurant Featured Image</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
      <InputField
        value={restaurantName}
        placeholder="Enter Restaurant Name"
        Icon={FontAwesome}
        iconName="car"
        setInput={setRestaurantName}
      />
      <InputField
        value={address}
        placeholder="Restaurant Address"
        Icon={FontAwesome}
        iconName="opencart"
        setInput={setAddress}
      />
      {/* Town  nput Container*/}
      <InputField
        value={openDaysStart}
        placeholder="Restaurant Opening Day"
        Icon={Ionicons}
        iconName="color-filter-outline"
        setInput={setOpenDaysStart}
      />
      <InputField
        value={openDaysEnd}
        placeholder="Restaurant Closing Day"
        Icon={Ionicons}
        iconName="color-filter-outline"
        setInput={setOpenDaysEnd}
      />
      <InputField
        value={description}
        placeholder="More Info About Restaurant"
        Icon={Ionicons}
        iconName="color-filter-outline"
        setInput={setDescription}
      />
      <InputField
        value={terms}
        placeholder="Terms and Conditions (Optional)"
        Icon={Ionicons}
        iconName="color-filter-outline"
        setInput={setTerms}
      />
      {/* Submit Btn */}
      <PrimaryBtn text={"Add Restaurant Details"} onBtnPress={onSubmitForm} />
      <View style={{ height: 80, width: "100%" }} />
    </ScrollView>
  );
};

export default AddRestaurantDetails;
