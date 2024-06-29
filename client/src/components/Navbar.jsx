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


  //Nav-links CSS

  const nav_links = "h-10 sm:bg-white sm:rounded-xl sm:shadow-lg items-center justify-center flex font-bold duration-200";


  return (
    <header className=" w-full h-[80px] fixed top-0 flex justify-between items-center sm:px-16 px-8 pt-5 mx-auto  left-0 right-0">
      <Link to="/" className="nav-logo bg-white px-5 py-2 rounded-lg shadow-md">
        <img
          src={LogoImg}
          alt="logo"
          className="w-[55px] h-[55px] object-cover rounded-3xl drop-shadow-lg logo duration-150"
        />
        <span></span>
        <h2 className="font-bold text-2xl sm:text-3xl text-blue-700 tracking-tighter">
          Defensium
        </h2>
      </Link>

      <button
        onClick={showNavbar}
        className="hidden nav-btn bg-white rounded-xl p-3 shadow-md  text-[1.5rem]"
      >
        <FaBars />
      </button>
      <nav ref={navRef} className="flex text-lg font-medium md-device">
        <div className="nav-mobile flex gap-8">
          <Link
            onClick={showNavbar}
            exact
            to="/"
            className={nav_links}
          >
            Home
          </Link>
          <Link
            onClick={showNavbar}
            exact
            to="/services"
            className={nav_links}
          >
            Services
          </Link>
          <Link
            onClick={showNavbar}
            exact
            to="/pricing"
            className={nav_links}
          >
            Pricing
          </Link>
          <Link
            onClick={showNavbar}
            exact
            to="/blogs"
            className={nav_links}
          >
            Blogs
          </Link>
          <Link
            onClick={showNavbar}
            to="/about"
            className={nav_links}
          >
            About
          </Link>
          <Link
            onClick={showNavbar}
            to="/contact"
            className={nav_links}
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
