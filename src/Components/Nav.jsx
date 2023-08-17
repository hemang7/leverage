import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaSearch, FaPhone, FaUser } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/logo.png";
import "../index.css";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <div className="lg:hidden block absolute top-16 w-full bg-black left-0 right-0 transition">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="Home">
          <li className="my-4 py-4 border-b text-white border-slate-800 hover:bg-slate-800 hover:rounded">
            Study Abroad
          </li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Accomodation
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Services">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Test Prep
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Projects">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Finance
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Community
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Products
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            More
          </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white bg-black lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 md:w-16 cursor-pointer"
          />
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <ul className="flex gap-8 mr-16 text-[16px] whitespace-nowrap">
            <Link spy={true} smooth={true} to="Home">
              <li className="hover:text-blue-600 transition hover:border-blue-600 cursor-pointer">
                Study Abroad
              </li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li className="hover:text-blue-600 transition  hover:border-blue-600 cursor-pointer">
                Accomodation
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
              <li className="hover:text-blue-600 transition  hover:border-blue-600 cursor-pointer">
                Test Prep
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Projects">
              <li className="hover:text-blue-600 transition  hover:border-blue-600 cursor-pointer">
                Finance
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
              <li className="hover:text-blue-600 transition hover:border-blue-600 cursor-pointer">
                Community
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
              <li className="hover:text-blue-600 transition hover:border-blue-600 cursor-pointer">
                Products
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
              <li className="hover:text-blue-600 transition hover:border-blue-600 cursor-pointer">
                More
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:block mr-4 hover:text-blue-600 transition hover:border-blue-600 cursor-pointer">
            <FaSearch />
          </div>
          <div className="hidden lg:block mr-4 mx-2 hover:text-blue-600 transition hover:border-blue-600 cursor-pointer">
            <FaPhone />
          </div>
          <div className="hidden lg:block mx-1 hover:text-blue-600 transition hover:border-blue-600 cursor-pointer">
            <FaUser />
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
