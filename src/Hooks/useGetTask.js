"use client";

import { useQuery } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";
import useAuthContext from "./useAuthContext";

const useGetTask = (currentPage = 0, itemsPerPage = 10, status = null) => {
  const axios = axiosPublic();
  const { user } = useAuthContext();
  console.log(user?.data?._id);
  const queryKey = status
    ? ["task", itemsPerPage, currentPage, status, user?.data?._id]
    : ["task", itemsPerPage, currentPage, user?.data?._id];

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey,
    queryFn: async () => {
      const url = status
        ? `/task/getTasks?page=${
            currentPage - 1
          }&size=${itemsPerPage}&status=${status}&userId=${user?.data?._id}`
        : `/task/getTasks?page=${currentPage - 1}&size=${itemsPerPage}&userId=${
            user?.data?._id
          }`;
      const { data } = await axios.get(url);

      return data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetTask;
