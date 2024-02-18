"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import { global } from 'styled-jsx/css';

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textVariants = ['Hello There!', 'Varun Jadhav Here.....'];

  const openResume = () => {
    window.open('/Varun-Resume_1223.pdf', '_blank');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textVariants.length);
    }, 3000); // Change the duration as needed

    return () => clearInterval(intervalId);
  }, [textVariants.length]);

  return (
    <div className="h-auto">
      {/* Introduction Section */}
      <div className={`bg-blue-2 flex justify-center items-center py-20 min-h-screen`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white-1 mb-4 md:text-left">
            Welcome to my Portfolio!
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center mb-4 md:text-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/intro.webp"
                alt="programmer"
                width={500}
                height={500}
                priority
                className=""
              />
            </div>
            <div className="w-full md:w-1/2 md:text-left text-white-1 mt-4 md:mt-0">
              <h1 className="text-6xl md:text-7xl font-bold mb-4">Hello There! 👋</h1>
              <h2 className="text-5xl md:text-6xl font-bold mb-4">Varun Jadhav</h2>
              <h3 className="text-2xl md:text-3xl font-semibold">Software Developer</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content Section */}
      <div className="min-h-screen bg-white-1 flex flex-col relative">
        <div className="flex-1 flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center items-center mt-8">
            <Image
              src="https://i.giphy.com/qgQUggAC3Pfv687qPC.webp"
              alt="programmer"
              width={450}
              height={500}
              priority
              className=""
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center px-6 py-12 md:py-0">
            <h2 className="text-4xl md:text-4xl font-semibold text-center md:text-left mb-8 text-blue-2">
              Ideas Transform into Code.
            </h2>
            <p className="text-xl md:text-start text-center mb-8 text-blue-2">
              As a skilled Software developer, I am dedicated to turning ideas into innovative web applications.
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.
            </p>
            <button
              onClick={openResume}
              className="bg-white px-6 py-2 text-xl text-black font-semibold border-2 border-black flex items-center self-center md:self-start"
            >
              <span>Resume</span>
              <MdArrowOutward className="h-6 w-6 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
