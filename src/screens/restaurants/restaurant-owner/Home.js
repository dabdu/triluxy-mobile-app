import { View, Text } from "react-native";
import React from "react";
import Footer from "../../../components/Layouts/Footer";
import { NewPreviousTab } from "../../../components";
import { RestaurantBookingContainer } from "../../../components/booking-components";
import { useState } from "react";
import { useRestaurantContext } from "../../../../context/RestaurantContext";
import { useEffect } from "react";
import { useAuthContext } from "../../../../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
import baseURL from "../../../../constants/baseURL";
import axios from "axios";
import { UserBookingContainer } from "../../../components/booking-components/restaurant-admin";

const Home = () => {
  const [onNew, setOnNew] = useState(true);
  const [onPrevious, setOnPrevious] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reservations, setReservations] = useState([]);

  const { authUser } = useAuthContext();
  const { restaurants, currentRestaurant, setCurrentRestaurant } =
    useRestaurantContext();
  useEffect(() => {
    const tempRes = restaurants.filter((item) => item.user === authUser?._id);
    setCurrentRestaurant(tempRes[0]);
  }, []);
  // useEffect(() => {
  //   if (currentRestaurant) {
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${authUser?.token}`,
  //       },
  //     };
  //     axios
  //       .get(
  //         `${baseURL}/restaurant/admin/res/reservations/${currentRestaurant?._id}`,
  //         config
  //       )
  //       .then((res) => {
  //         setReservations(res.data);
  //         setIsLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     return () => {
  //       setReservations([]);
  //       setIsLoading(false);
  //     };
  //   }
  // }, [currentRestaurant]);
  // console.log("Current Restaurant", currentRestaurant);
  console.log("Reservations", reservations);
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <Spinner visible={isLoading} />
      <View>
        <NewPreviousTab
          onNew={onNew}
          setOnNew={setOnNew}
          onPrevious={onPrevious}
          setOnPrevious={setOnPrevious}
          newTabText="New Reservations"
          prevTabText="Previous Reservations"
        />
      </View>
      {onNew ? (
        <UserBookingContainer
          data={reservations}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          tab="new"
        />
      ) : (
        <UserBookingContainer
          data={reservations}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          tab="previous"
        />
      )}
      <Footer active={"reservations"} searchPath={"Home"} />
    </View>
  );
};

export default Home;
