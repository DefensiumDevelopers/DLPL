import React, { useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoImg from "../assets/logo.png";
const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.classList.remove("responsive_nav");
    }
  }, []);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className=" h-[88px] flex justify-between items-center sm:px-16 px-8 py-2 mx-auto fixed top-0 left-0 right-0 backdrop-blur-[20px] z-[9999]">
      <Link to="/" className="nav-logo">
        <img
          src={LogoImg}
          alt="logo"
          className="w-[60px] h-[60px] object-cover rounded-3xl drop-shadow-lg logo duration-150"
        />
        <span></span>
        <h2 className="font-bold text-4xl text-blue-700 tracking-tighter">
          Defensium
        </h2>
      </Link>

      <button
        onClick={showNavbar}
        className="hidden nav-btn bg-white rounded-xl p-3 shadow-md  text-[1.5rem]"
      >
        <FaBars />
      </button>
      <nav
        ref={navRef}
        className="flex text-lg gap-[10rem] font-medium md-device"
      >
        <div className="nav-mobile flex gap-10">
          <Link
            onClick={showNavbar}
            exact
            to="/"
            className="h-10 items-center justify-center flex font-bold duration-200"
          >
            Home
          </Link>
          <Link
            onClick={showNavbar}
            exact
            to="/services"
            className="h-10 items-center justify-center flex font-bold duration-200"
          >
            Services
          </Link>
          <Link
            onClick={showNavbar}
            exact
            to="/pricing"
            className="h-10 items-center justify-center flex font-bold duration-200"
          >
            Pricing
          </Link>
          <Link
            onClick={showNavbar}
            exact
            to="/blogs"
            className="h-10 items-center justify-center flex font-bold duration-200"
          >
            Blogs
          </Link>
          <Link
            onClick={showNavbar}
            to="/about"
            className="h-10 items-center justify-center flex font-bold duration-200"
          >
            About
          </Link>
          <Link
            onClick={showNavbar}
            to="/contact"
            className="h-10 items-center justify-center flex font-bold duration-200"
          >
            Contact
          </Link>
          <span className="animation start-home"></span>
        </div>

        <button
          onClick={showNavbar}
          className="bg-white rounded-xl p-3 shadow-md nav-btn nav-close-btn absolute z-[999] top-0 right-0 m-5 text-[1.5rem]"
        >
          <FaTimes />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
