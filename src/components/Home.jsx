'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';

const Home = () => {
  const openResume = () => {
    window.open('/Varun-Resume_1223.pdf', '_blank');
  };

  return (
    <div>
      <div className='bg-black h-auto px-14'>
        <div className='flex flex-col md:flex-row md:mt-28'>
          <div className='w-full md:w-1/2 ml-0 md:ml-40 py-14'>
            <h2 className='text-white font-bold text-4xl mb-8'>Hello There ! <br /> <br /> Varun Jadhav Here.....</h2>
            <p className="text-white">Software Developer</p>
          </div>
          <div className='w-full md:w-1/2 mt-8 md:mt-0 ml-10 md:ml-96'>
            <Image
              src="/hie.webp"
              alt="programmer"
              width={200}
              height={500}
              priority
            />
          </div>
        </div>
      </div>


      <div className="min-h-screen bg-black flex flex-col relative">
        <div className="flex-1 flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center items-center mt-8">
            <Image
              src="https://camo.githubusercontent.com/40165a147c3dcea0fa1db780bb533fc5f98546ccfb9d5d05ddb2f429277f5348/68747470733a2f2f616e616c7974696373696e6469616d61672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f31322f646576656c6f7065722d6472696262626c652e676966"
              alt="programmer"
              width={450}
              height={500}
              priority
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center px-6 py-12 md:py-0">
            <h2 className="text-4xl md:text-6xl font-semibold text-center md:text-left mb-8 text-white">
              Ideas Transform into Code.
            </h2>
            <p className="text-xl md:text-start text-center mb-8 text-white">
              As a skilled Software developer, I am dedicated to turning ideas into innovative web applications.
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.
            </p>
            <button
              onClick={openResume}
              className="bg-white px-6 py-3 text-xl text-black font-semibold hover:border-white hover:border-2 hover:bg-black hover:text-white flex items-center self-center md:self-start"
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
