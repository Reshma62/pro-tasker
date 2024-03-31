import { Input } from "@nextui-org/react";

const SettingsPage = () => {
  return (
    <div className="max-w-3xl mt-16">
      <h2 className="text-2xl text-purple-800 font-semibold mb-10">
        Update your Personal infomation
      </h2>
      <form className="">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-6 text-white">
          <Input
            classNames={{
              label: "!text-purple-800  !font-semibold !text-base",
            }}
            labelPlacement={"outside"}
            type="email"
            label="Email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-6 text-white">
          <Input
            classNames={{
              label: "!text-purple-800  !font-semibold !text-base",
            }}
            labelPlacement={"outside"}
            type="email"
            label="Password"
            placeholder="Enter your password"
          />
        </div>
        <div className="text-base  flex justify-start items-center">
          <button
            className="bg-purple-700 text-white px-7 py-2.5 font-medium rounded-lg"
            type="submit"
          >
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
