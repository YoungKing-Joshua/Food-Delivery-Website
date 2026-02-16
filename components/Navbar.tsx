import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4">
        <Link href="/">Homepage</Link>
        <Link href="/">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/*Logo*/}
      <div className="text-xl">
        <Link href="/">Massino</Link>
      </div>
      {/*Mobile Menu*/}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4">
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
