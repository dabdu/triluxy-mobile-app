import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import baseURL from "../constants/baseURL";
import Toast from "react-native-toast-message";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(true);
  const navigation = useNavigation();
  // const Stack = createStackNavigator();
  // const getUser = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem("user");
  //     if (!jsonValue) {
  //       setAuthUser(null);
  //       console.log("error");
  //       // navigation.navigate("LoginScreen");
  //       navigation.reset({
  //         index: 0,
  //         routes: [{ name: "LoginScreen" }],
  //       });
  //     } else {
  //       await setAuthUser(JSON.parse(jsonValue));
  //       RNRestart.Restart();
  //     }
  //     // return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     console.log(e);
  //     // error reading value
  //   }
  // };
  // const getUserInfo = async () => {
  //   if (authUser) {
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${authUser?.token}`,
  //       },
  //     };
  //     await axios
  //       .get(`${baseURL}/user/get-user-info`, config)
  //       .then((res) => {
  //         setUserInfo(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };
  const saveUser = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      // console.log(jsonValue);
      await AsyncStorage.setItem("user", jsonValue);
      if (value.userRole === "resAdmin") {
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      }
    } catch (e) {
      // saving error
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "Error occur!!!",
        text2: "Please Try Again",
      });
      console.log(e);
    }
  };
  const onLogout = async () => {
    try {
      setIsLoading(true);
      await AsyncStorage.removeItem("user");
      setAuthUser(null);
      console.log(authUser);
      setIsLoading(false);

      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }],
      });

      Toast.show({
        topOffset: 60,
        type: "success",
        text1: "User Logout Succesfully",
        text2: "Please Login to Access Your Account",
      });
    } catch (error) {
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "Error Occured",
        text2: "Please Try Again",
      });
      console.log(error);
      setIsLoading(false);
    }
  };
  const Login = (user) => {
    setIsLoading(true);
    axios
      .post(`${baseURL}/user/login`, user)
      // .then((res) => res.json())
      .then((res) => {
        // let tempUser = res.data;
        saveUser(res.data);
        setAuthUser(res.data);
        // console.log("User From Login", tempUser);
        // const jsonValue = JSON.stringify(tempUser);
        // await AsyncStorage.setItem("authUser", jsonValue);
        // saveUser(tempUser);
        // await AsyncStorage.setItem(
        //   "authUser",
        //   JSON.stringify(authUser)
        // );
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        Toast.show({
          topOffset: 60,
          type: "error",
          text1: "Invalid Emaill or Password",
          text2: "Please Try Again",
        });
        setIsLoading(false);
      });
  };
  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let tempUserInfo = await AsyncStorage.getItem("user");
      // console.log(tempUserInfo);
      // tempUserInfo = JSON.parse(tempUserInfo);
      // console.log("User Fron Async", tempUserInfo);
      if (tempUserInfo) {
        setAuthUser(JSON.parse(tempUserInfo));
      }
      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log("is Logged Error ", e);
    }
  };
  // console.log(authUser);
  useEffect(() => {
    // getUser();
    // getUserInfo();
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
        userInfo,
        onLogout,
        isLoading,
        Login,
        authUser,
        splashLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
