"use client";

import { useQuery } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";

const useGetTask = (currentPage = 0, itemsPerPage = 10, status = null) => {
  const axios = axiosPublic();
  const queryKey = status
    ? ["task", itemsPerPage, currentPage, status]
    : ["task", itemsPerPage, currentPage];

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey,
    queryFn: async () => {
      const url = status
        ? `/task/getTasks?page=${
            currentPage - 1
          }&size=${itemsPerPage}&status=${status}`
        : `/task/getTasks?page=${currentPage - 1}&size=${itemsPerPage}`;
      const { data } = await axios.get(url);

      return data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetTask;
