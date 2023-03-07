"use client";
import Link from "next/link";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = ({ theme, setTheme }) => {
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
          <button
            className="btn btn-ghost text-xl"
            onClick={() => setTheme(theme === "light" ? "dracula" : "light")}
          >
            {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
