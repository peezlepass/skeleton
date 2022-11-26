import * as type from "./types";

export function register(user) {
  return { type: type.REGISTER, payload: user };
}

export function login(user) {
  return { type: type.LOGIN, payload: user };
}

export function logout() {
  return { type: type.LOGOUT };
}
