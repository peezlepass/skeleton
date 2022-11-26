import * as types from "./types";

//Read the user from local storage when creating the initial state
//If the client thinks the user is logged in, their data will be available
//in localStorage
const localStorageKey = "elbrusGames.user";
const localUser = localStorage.getItem(localStorageKey);
const initialState = {
  user: localUser ? JSON.parse(localUser) : null,
};

export default function userReducer(
  prevState = initialState,
  { type, payload }
) {
  switch (type) {
    case types.REGISTER:
      //We put user in the localStorage so it can be read into initialState
      localStorage.setItem(localStorageKey, JSON.stringify(payload));
      return {
        ...prevState,
        user: payload,
      };

    case types.LOGIN:
      //We put user in the localStorage so it can be read into initialState
      localStorage.setItem(localStorageKey, JSON.stringify(payload));
      return {
        ...prevState,
        user: payload,
      };

    case types.LOGOUT:
      //We remove user in the localStorage so it is not there for initialState
      localStorage.removeItem(localStorageKey);
      return {
        ...prevState,
        user: null,
      };

    default:
      return prevState;
  }
}
