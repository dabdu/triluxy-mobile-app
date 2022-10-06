import AsyncStorage from "@react-native-async-storage/async-storage";
import baseURL from "../../constants/baseURL";
import Toast from "react-native-toast-message";
import jwt_decode from "jwt-decode";

const SET_CURRENT_USER = "SET_CURRENT_USER";
const loginUser = (user, dispatch) => {
  fetch(`${baseURL}/user/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "appliction/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        console.log(data);
        const token = data.token;
        // const userData = data;
        AsyncStorage.setItem("jwt", token);
        // AsyncStorage.setItem("userData", userData);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded, user));
      } else {
        // TODO
        logoutUser(dispatch);
      }
    })
    .catch((err) => {
      console.log(err);
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "Incorrect Email or Password",
        text2: "Please Input Correct Email and Password",
      });
      // logoutUser(dispatch);
    });
};
const getUserProfile = (id) => {
  fetch(`${baseURL}/user/user/${id}`, {
    method: "GET",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "appliction/json",
    },
  }).then((res) => res.json().then((data) => console.log(data)));
};

const logoutUser = (dispatch) => {
  AsyncStorage.removeItem("jwt");
  // AsyncStorage.removeItem("userData");
  dispatch(setCurrentUser({}));
};
const setCurrentUser = (decoded, user) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
    userProfile: user,
  };
};
export {
  loginUser,
  SET_CURRENT_USER,
  getUserProfile,
  logoutUser,
  setCurrentUser,
};
