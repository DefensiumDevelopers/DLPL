import React from "react";
import { Link } from "react-router-dom";

import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
  const footer_link =
    "text-white hover:bg-white hover:text-blue-600 hover:py-1 hover:px-2 hover:rounded-md duration-200 hover:font-semibold";
  const footer_icon =
    "cursor-pointer text-2xl hover:bg-white hover:text-blue-600 hover:p-[2px] hover:rounded-md duration-200";
  return (
    <footer className="w-full bg-blue-600 text-white pt-10 pb-3 mt-auto">
      <div className="max-w-7xl mx-auto grid justify-items-center grid-cols-1 md:grid-cols-4 gap-8 pb-2 footer-content">
        <div>
          <h3 className="text-lg font-bold mb-4">
            Defensium Labs Privated Limited
          </h3>
          <p className="text-white mb-4 w-[17rem]">
            Defensium Labs was founded with the motive of securing cyber space
            and creating skilled cyber warriors to protect the applications
            against cyber threats. We believe in delivering the quality results
            and client's security first mentality.
          </p>
          <a
            href="/about"
            className="bg-white text-blue-700 font-semibold py-1 px-2 rounded-lg"
          >
            More about us
          </a>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className={footer_link}>
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="/services" className={footer_link}>
                User Agreement
              </a>
            </li>
            <li>
              <a href="/pricing" className={footer_link}>
                Desclaimer Agreement
              </a>
            </li>
            <li>
              <a href="/blogs" className={footer_link}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/about" className={footer_link}>
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className={footer_link}>
                Penetration Testing
              </a>
            </li>
            <li>
              <a href="#" className={footer_link}>
                Continuous Security Scanning
              </a>
            </li>
            <li>
              <a href="#" className={footer_link}>
                Content-as-a-Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-white mb-2 flex gap-2 items-center">
            <IoLocation /> India
          </p>
          <p className="text-white mb-2 flex justify-start items-center gap-2">
            <IoCall /> <a href="tel:917906075750">(+91)-xxxxxxxxxx</a>
          </p>
          <p className="text-white mb-2 flex justify-start items-center gap-2">
            <MdEmail />
            <a href="mailto:thegrandviewresort@gmail.com">
              Email: hello@defensiumlabs.com
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <IoLogoWhatsapp className={footer_icon} />
            <BiLogoInstagram className={footer_icon} />
            <FaFacebook className={footer_icon} />
            <BsTwitterX className={footer_icon} />
          </div>
        </div>
      </div>
      <hr className="w-full mt-3" />
      <p className="text-white text-center mt-3">
        <small>
          &copy; {new Date().getFullYear()} Defensium Labs Private Limited. All
          rights reserved.
        </small>
      </p>
    </footer>
  );
};

export default Footer;
