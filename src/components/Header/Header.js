"use client";

import axiosPublic from "@/Hooks/axiosPublic";
import useAuthContext from "@/Hooks/useAuthContext";
import { disableNavWithFooter } from "@/utils/DisalbleNav";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const Header = () => {
  const axios = axiosPublic();
  const path = usePathname();
  const { push } = useRouter();
  const { user } = useAuthContext();
  const handleLogout = async () => {
    console.log("first");
    localStorage.removeItem("token");
    const { data } = await axios.post("/auth/logout");
    push("/login");
  };

  return (
    <div>
      {!disableNavWithFooter.includes(path) && (
        <Sidebar className="h-screen pt-6 md:w-[250px] !w-full">
          <h2 className="text-center px-5 mb-3 font-bold text-2xl text-purple-800">
            ProTasker
          </h2>
          {user && <p>{user.name}</p>}
          <Menu
            menuItemStyles={{
              button: {
                [`&.ps-active`]: {
                  backgroundColor: "#13395e",
                  color: "#b6c8d9",
                },
              },
            }}
          >
            <MenuItem active={path === "/"} component={<Link href="/" />}>
              Dashboard
            </MenuItem>
            <MenuItem
              active={path === "/tasklists"}
              component={<Link href="/tasklists" />}
            >
              TaskLists
            </MenuItem>
            <MenuItem
              active={path === "/pending-task"}
              component={<Link href="/pending-task" />}
            >
              Pending Tasks
            </MenuItem>
            <MenuItem
              active={path === "/complete-task"}
              component={<Link href="/complete-task" />}
            >
              Complete Tasks
            </MenuItem>
            <MenuItem
              active={path === "/settings"}
              component={<Link href="/settings" />}
            >
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogout}> Logout </MenuItem>
          </Menu>
        </Sidebar>
      )}
    </div>
  );
};

export default Header;
