import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <div className="h-20 bg-black">
        <ul className="flex justify-between items-center py-6 px-32">
          {/* Left-aligned items */}
          <div className="flex gap-x-20">
            <Link href="/" passHref>
              <h2 className="text-2xl cursor-pointer font-semibold">Home</h2>
            </Link>
            <Link href="/about" passHref>
              <h2 className="text-2xl cursor-pointer font-semibold">About</h2>
            </Link>
            <Link href="/projects" passHref>
              <h2 className="text-2xl cursor-pointer font-semibold">Projects</h2>
            </Link>
          </div>
          {/* Right-aligned items */}
          <div className="flex gap-x-10">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
