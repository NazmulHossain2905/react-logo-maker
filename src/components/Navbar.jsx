import React from "react";
import logo from "../assets/images/logo.jfif";
import { ArrowDownToLine } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-slate-200 p-5 py-4 shadow-md">
      <div className="flex cursor-pointer items-center justify-center gap-3">
        <img className="size-10 rounded-lg" src={logo} alt="Logo" />
        <h1 className="text-xl font-bold">LogoMaker</h1>
      </div>

      <nav className="flex items-center gap-8">
        <ul className="hidden items-center gap-5 md:flex">
          <li>
            <a
              className="font-medium text-gray-600 transition-colors hover:text-gray-800"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-medium text-gray-600 transition-colors hover:text-gray-800"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="font-medium text-gray-600 transition-colors hover:text-gray-800"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>

        <button className="flex items-center gap-2 rounded-lg bg-purple-600 p-2 px-4 font-semibold text-white transition-colors hover:bg-purple-500">
          <ArrowDownToLine className="size-5" /> Download
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
