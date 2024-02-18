'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';

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
    <div>
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
