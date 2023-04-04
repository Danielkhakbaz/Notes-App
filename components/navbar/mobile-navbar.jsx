"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";

const MobileNavbar = ({ theme, setTheme }) => {
  const path = usePathname().slice(1);

  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost font-bold text-xl" href="/">
            The Note App
          </Link>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end">
          <label className="btn m-1" tabIndex={0}>
            <MdMenu fontSize={26} />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52 gap-2"
          >
            {path === "" && (
              <Link href="/notes">
                <li>
                  <label htmlFor="modal-add" className="btn btn-outline">
                    Notes
                  </label>
                </li>
              </Link>
            )}
            {path === "notes" && (
              <label htmlFor="modal-add" className="btn btn-success">
                Add Note
              </label>
            )}
            <label className="swap swap-rotate btn btn-outline text-xl">
              <input
                type="checkbox"
                onClick={() =>
                  setTheme(theme === "light" ? "dracula" : "light")
                }
              />
              <MdLightMode className="swap-off fill-current" />
              <MdDarkMode className="swap-on fill-current" />
            </label>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
