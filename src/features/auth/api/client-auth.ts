/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { configureAuth } from "react-query-auth";

import { loginWithEmailAndPassword } from "./login";
import storage from "@/lib/storage";
import { LoginDto, RegisterDto, AuthUser } from "../schema";
import { registerWithEmailAndPassword } from "./register";
// import { error } from "console";

async function handleUserResponse({ data }: any) {
  const accessToken = data?.accessToken;
  storage.setToken(accessToken);
  storage.setUserData(data?.user);
  return accessToken;
}

async function userFn() {
  if (storage.getUserData()) {
    const user = storage.getUserData();
    return user;
  }
  return null;
}

async function loginFn(data: LoginDto) {
  const response = await loginWithEmailAndPassword(data);
  console.log(response);

  const token = response?.data?.accessToken;
  if (!token) return;

  try {
    const apiResponse = await fetch("/api/auth/set-cookie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    storage.setUserData(response?.data?.user)
    const result = await apiResponse.json();
    console.log("API Response:", result);
  } catch (error) {
    console.error("Error sending token:", error);
  }

  return token;
}

async function logoutFn() {
  try{
    const response = await fetch("/api/auth/logout", {method: "POST"})
    const result = await response.json()
    console.error("Logout failed:", result)

    window.location.replace("/auth")
  }catch(error){
    console.error("Logout failed", error)
  }
}

async function registerFn(data: any) {
  const response = registerWithEmailAndPassword(data);
  return await response;
}

const authConfig = {
  userFn,
  loginFn,
  registerFn,
  logoutFn,
};

export const { useLogin, useUser, useRegister, useLogout, AuthLoader } =
  configureAuth<AuthUser | null, unknown, LoginDto, RegisterDto>(authConfig);
