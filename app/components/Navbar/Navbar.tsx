"use client";
import Link from "next/link";
import { useState } from "react";
import CartModal from "../CartModal";
import useUserStore from "../useUserStore";
import Cart from "./Cart";
import DesktopMenu from "./DesktopMenu";
import Drawer from "./Drawer";
import HamburgerMenu from "./HamburgerMenu";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  return (
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-neutral">
          <div className="flex-none lg:hidden">
            <HamburgerMenu />
          </div>
          <div className="flex-1">
            <Link href="/home" className="btn btn-ghost normal-case text-xl">
              tutiHairs
            </Link>
          </div>

          <ThemeToggle />
          <DesktopMenu />
          <div className="flex-none">
            <Cart onCartClick={() => setIsCartModalOpen(true)} />
            {isAuthenticated && <UserMenu />}
          </div>
        </div>
      </div>

      <Drawer closeDrawer={() => setIsDrawerOpen(false)} />
      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      />
    </div>
  );
};

export default Navbar;
