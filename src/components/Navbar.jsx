'use client'
import { useState } from 'react';
import Link from 'next/link';
import { CiMenuBurger } from "react-icons/ci";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="h-20 bg-black">
        <div className="flex justify-between items-center py-6 px-6 md:px-32">
          {/* Mobile Menu Button */}
          <CiMenuBurger 
            onClick={toggleMenu}
            className="block md:hidden"
            />

          {/* Off-canvas Menu */}
          <div className={`md:hidden fixed top-0 left-0 h-screen w-full bg-gray-900 outline-none z-50 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col items-center justify-center h-full">
              <Link href="/" passHref>
                <h2 className="text-2xl cursor-pointer font-semibold text-white my-4">Home</h2>
              </Link>
              <Link href="/about" passHref>
                <h2 className="text-2xl cursor-pointer font-semibold text-white my-4">About</h2>
              </Link>
              <Link href="/projects" passHref>
                <h2 className="text-2xl cursor-pointer font-semibold text-white my-4">Projects</h2>
              </Link>
              <div className="flex gap-x-4 mt-6">
                <a href="https://linkedin.com/in/varun-jadhav-620814152" className="text-white cursor-pointer">
                  <FaLinkedin size={30} color="#1877f2" />
                </a>
                <a href="https://twitter.com/varun_jadhav67" className="text-white cursor-pointer">
                  <FaTwitter size={30} color="#1DA1F2" />
                </a>
                <a href="#" className="text-white cursor-pointer">
                  <FaInstagram size={30} color="#E4405F" />
                </a>
                <a href="https://github.com/Jadhavvarun/" className="text-white cursor-pointer">
                  <FaGithub size={30} color="#FFFFFF" />
                </a>
              </div>
            </div>
          </div>

          {/* Regular Menu */}
          <div className="hidden md:flex gap-x-20">
            <Link href="/" passHref>
              <h2 className="text-2xl cursor-pointer font-semibold text-white">Home</h2>
            </Link>
            <Link href="/about" passHref>
              <h2 className="text-2xl cursor-pointer font-semibold text-white">About</h2>
            </Link>
            <Link href="/projects" passHref>
              <h2 className="text-2xl cursor-pointer font-semibold text-white">Projects</h2>
            </Link>
          </div>
          <div className="hidden md:flex gap-x-10">
            <a href="https://linkedin.com/in/varun-jadhav-620814152" className="text-black cursor-pointer">
              <FaLinkedin size={30} color="#1877f2" />
            </a>
            <a href="https://twitter.com/varun_jadhav67" className="text-black cursor-pointer">
              <FaTwitter size={30} color="#1DA1F2" />
            </a>
            <a href="#" className="text-black cursor-pointer">
              <FaInstagram size={30} color="#E4405F" />
            </a>
            <a href="https://github.com/Jadhavvarun/" className="text-black cursor-pointer">
              <FaGithub size={30} color="#FFFFFF" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
