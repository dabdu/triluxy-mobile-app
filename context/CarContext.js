import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import baseURL from "../constants/baseURL";
import { useAuthContext } from "./AuthContext";
const CarContext = createContext({});

const CarContextProvider = ({ children }) => {
  const [rides, setRides] = useState(null);
  const [dropOff, setDropOff] = useState({
    location: null,
    description: null,
  });
  const [pickupLocation, setPickupLocation] = useState({
    location: null,
    description: null,
  });
  const [pickupDate, setPickupDate] = useState("Choose Date");
  const [returnDate, setReturnDate] = useState("Choose Date");
  const [travelTimeInformation, setTravelTimeInformation] = useState(null);
  const [travelPrice, setTravelPrice] = useState(null);
  const [availableCars, setAvailableCars] = useState(null);
  const [pickupCity, setPickupCity] = useState(null);
  const { authUser } = useAuthContext();
  useEffect(() => {
    (async () => {
      if (authUser) {
        const config = {
          headers: {
            Authorization: `Bearer ${authUser?.token}`,
          },
        };
        await axios
          .get(`${baseURL}/car/available-cars`, config)
          .then((res) => {
            setAvailableCars(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        return () => {
          setAvailableCars([]);
        };
      }
    })();
  }, [authUser]);
  useEffect(() => {}, []);
  // console.log(availableCars);
  return (
    <CarContext.Provider
      value={{
        availableCars,
        pickupLocation,
        setPickupLocation,
        dropOff,
        setDropOff,
        pickupDate,
        setPickupDate,
        returnDate,
        setReturnDate,
        travelTimeInformation,
        setTravelTimeInformation,
        travelPrice,
        setTravelPrice,
        pickupCity,
        setPickupCity,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;

export const useCarContext = () => useContext(CarContext);
