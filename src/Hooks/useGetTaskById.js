"use client";

import { useQuery } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";

const useGetTaskById = (id) => {
  const axios = axiosPublic();
  const queryKey = ["taskById", id];

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey,
    enabled: !!id, // Only run if the `id
    queryFn: async () => {
      const url = `/task/getTasksById/${id}`;
      const { data } = await axios.get(url);

      return data.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetTaskById;
