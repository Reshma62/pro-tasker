"use client";

import { disableNavWithFooter } from "@/utils/DisalbleNav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const Header = () => {
  const path = usePathname();

  const handleLogout = () => {
    console.log("first");
  };

  return (
    <div>
      {!disableNavWithFooter.includes(path) && (
        <Sidebar className="h-screen pt-6">
          <h2 className="text-center px-5 mb-3 font-bold text-2xl text-purple-800">
            ProTasker
          </h2>
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
