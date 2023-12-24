'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';

const Home = () => {
  const openResume = () => {
    window.open('/Varun-Resume_1223.pdf', '_blank');
  };

  useEffect(() => {
    const setFooterPosition = () => {
      const footer = document.querySelector('footer');
      const body = document.body;
      const html = document.documentElement;

      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      const windowHeight = window.innerHeight;
      const footerHeight = footer.offsetHeight;

      if (height < windowHeight) {
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
      } else {
        footer.style.position = 'static';
      }
    };

    setFooterPosition();
    window.addEventListener('resize', setFooterPosition);

    return () => {
      window.removeEventListener('resize', setFooterPosition);
    };
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-black flex flex-col relative">
        <div className="flex-1 flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center items-center">
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
              Turning Vision<br />Into Reality<br />With Code<br />And Design.
            </h2>
            <p className="text-xl md:text-start mb-8 text-white">
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
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
        <div className="p-4 bg-white rounded-full h-28 w-28 z-10 sticky text-black text-xl text-center py-11 font-semibold bottom-0 left-8">
          Hire Me
        </div>
      </div>
      <footer className="bg-black border-t-2 border-white text-white py-4 text-center">
        <div className="container mx-auto">
          <p>2023 © All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
