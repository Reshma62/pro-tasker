"use client";

import { useQuery } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";

const useGetSingleUserData = () => {
  const axiosPublic = axiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["user", userData],
    enabled: !!userData,

    queryFn: async () => {
      const response = await axiosPublic.get(
        `/user/getSingleUser?email=${userData?.user?.userEmail}`
      );
      console.log(response, "single user ");

      return response.data.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetSingleUserData;
