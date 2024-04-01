import axiosPublic from "@/Hooks/axiosPublic";

const axiosInstance = axiosPublic(); // Initialize axios instance

exports.getData = async (url) => {
  try {
    const response = await axiosInstance.get(url); // Use axios's get method
    return response.data; // Axios automatically parses JSON response
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // or handle the error in a different way
  }
};
