import React from "react";
import logo from "../assets/images/logo.jfif";
import { ArrowDownToLine } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="flex h-[72px] items-center justify-between bg-slate-200 p-5 py-4 shadow-md">
      <div
        onClick={handleLogoClick}
        className="flex cursor-pointer items-center justify-center gap-3"
      >
        <img className="size-10 rounded-lg" src={logo} alt="Logo" />
        <h1 className="text-xl font-bold">LogoMaker</h1>
      </div>

      <nav className="flex items-center gap-8">
        <ul className="hidden items-center gap-5 md:flex">
          <li>
            <Link
              className="font-medium text-gray-600 transition-colors hover:text-gray-800"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-gray-600 transition-colors hover:text-gray-800"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-gray-600 transition-colors hover:text-gray-800"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 p-2 px-4 font-semibold text-white transition-colors hover:bg-blue-500">
          <ArrowDownToLine className="size-5" /> Download
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
