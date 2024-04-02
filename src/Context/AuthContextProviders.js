"use client";
import axiosPublic from "@/Hooks/axiosPublic";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProviders = ({ children }) => {
  const axios = axiosPublic();
  const [user, setUser] = useState(null);
  console.log(user);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("token"));
    console.log(currentUser, "auth user");
    const observer = async () => {
      setUser(currentUser);
      if (currentUser) {
        const { data } = await axios.post("/auth/createToken", {
          email: currentUser?.data.email || user?.data?.email,
          _id: currentUser?.data._id || user?.data?._id,
        });

        console.log("data", data);
      } else {
        const { data } = await axios.post("/auth/logout");
        console.log("token", data);
        if (data.status === "success") {
          // Remove "token" from local storage here
          localStorage.removeItem("token");
        }
        console.log("data", data);
      }
    };

    observer();
  }, [axios, user?.data?._id, user?.data?.email]);

  const authInfo = { user, setUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProviders;
