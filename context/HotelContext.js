import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import baseURL from "../constants/baseURL";
const HotelContext = createContext({});

const HotelContextProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseURL}/hotel/allhotels`)
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setHotels([]);
    };
  }, []);
  return (
    <HotelContext.Provider value={{ hotels }}>{children}</HotelContext.Provider>
  );
};

export default HotelContextProvider;

export const useHotelContext = () => useContext(HotelContext);
