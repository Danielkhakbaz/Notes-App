"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = ({ theme, setTheme }) => {
  const path = usePathname().slice(1);

  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost font-bold text-2xl" href="/">
            The Note App
          </Link>
        </div>
        <div className="flex gap-3">
          <Link href="/">
            <button className="btn btn-ghost">Home</button>
          </Link>
          <Link href="/notes">
            <button className="btn btn-ghost">Notes</button>
          </Link>
          {path === "notes" && (
            <label htmlFor="modal-add" className="btn btn-success">
              Add Note
            </label>
          )}
          <label className="swap swap-rotate btn btn-ghost text-xl">
            <input
              type="checkbox"
              onClick={() => setTheme(theme === "light" ? "dracula" : "light")}
            />
            <MdLightMode className="swap-off fill-current" />
            <MdDarkMode className="swap-on fill-current" />
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
