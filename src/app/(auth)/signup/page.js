"use client";

import axiosPublic from "@/Hooks/axiosPublic";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const axios = axiosPublic();
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const { data: signUpData } = await axios.post(`/auth/signup`, user);
    if (signUpData.status === "success") {
      toast.success("registation successfull");
      reset();
      push("/login");
    } else {
      toast.error(signUpData.error);
    }
  };

  return (
    <div
      className="lg:-ml-10 px-10 lg:p-0 font-sans flex justify-center items-center min-h-screen bg-gradient-to-br  from-white to-gray-300 bg-no-repeat  bg-cover overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBsb2dpbnxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      <div className="max-w-2xl w-full bg-opacity-20 bg-white backdrop-blur-md rounded-lg px-10 py-10">
        <h2 className="text-3xl font-bold text-white  capitalize text-center mb-6">
          Sign up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-6 text-white">
            <Input
              classNames={{
                label: "!text-white !font-semibold !text-xl",
              }}
              labelPlacement={"outside"}
              type="text"
              label="Name"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
          </div>
          {errors.name && (
            <span className="text-red-500 text-xs font-semibold">
              Name is required
            </span>
          )}
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-6 text-white">
            <Input
              classNames={{ label: "!text-white !font-semibold !text-xl" }}
              labelPlacement={"outside"}
              type="email"
              label="Email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-xs font-semibold">
              Email is required
            </span>
          )}
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-6 text-white">
            <Input
              classNames={{ label: "!text-white !font-semibold !text-xl" }}
              labelPlacement={"outside"}
              type="password"
              label="Password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
          </div>
          {errors.password && (
            <span className="text-red-500 text-xs font-semibold ">
              Password is required
            </span>
          )}
          <div className="text-xl  flex justify-center items-center">
            <button
              className="bg-purple-700 text-white px-7 py-2.5 font-medium rounded-lg"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
        <div>
          <p className="text-lg text-white text-center pt-2">
            Already have an account?{" "}
            <Link className="font-bold text-xl" href={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
