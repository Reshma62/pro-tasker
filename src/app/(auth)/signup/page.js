import { Input } from "@nextui-org/react";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div
      className="-ml-10 p-0 font-sans flex justify-center items-center min-h-screen bg-gradient-to-br  from-white to-gray-300 bg-no-repeat  bg-cover overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBsb2dpbnxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      <div className="max-w-2xl w-full bg-opacity-20 bg-white backdrop-blur-md rounded-lg px-10 py-10">
        <h2 className="text-3xl font-bold text-white  capitalize text-center mb-6">
          Sign up
        </h2>
        <form className="">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-6 text-white">
            <Input
              classNames={{ label: "!text-white !font-semibold !text-xl" }}
              labelPlacement={"outside"}
              type="email"
              label="Email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-6 text-white">
            <Input
              classNames={{ label: "!text-white !font-semibold !text-xl" }}
              labelPlacement={"outside"}
              type="email"
              label="Password"
              placeholder="Enter your password"
            />
          </div>
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
