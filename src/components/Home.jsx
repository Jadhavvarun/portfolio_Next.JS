'use client'
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
    const openResume = () => {
        window.open('/Varun-Resume_1223.pdf', '_blank');
    };

    return (
        <div>
            <div className="h-screen bg-black flex flex-col">
                <div className="flex-1 flex">
                    <div className="md:w-1/2">
                        <div className="flex justify-center items-center py-32">
                            <Image
                                src="https://camo.githubusercontent.com/40165a147c3dcea0fa1db780bb533fc5f98546ccfb9d5d05ddb2f429277f5348/68747470733a2f2f616e616c7974696373696e6469616d61672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f31322f646576656c6f7065722d6472696262626c652e676966"
                                alt="programmer"
                                width={450}
                                height={500}
                                priority
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-7xl font-bold text-start mt-20">Turning Vision<br />Into Reality<br />With Code<br />And Design.</h2>
                        <p className="text-start text-xl py-4">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
                        <br />
                        <button onClick={openResume} className="bg-white px-8 py-3 text-xl text-black font-semibold hover:border-white hover:border-2 hover:bg-black hover:text-white flex items-center">
                            <span>Resume</span>
                            <MdArrowOutward className="h-6 w-6 ml-2" />
                        </button>
                    </div>
                </div>
                <div className="p-4 bg-white rounded-full h-28 w-28 z-50 sticky text-black text-xl text-center py-11 font-semibold bottom-0 left-8">
                    Hire Me
                </div>
            </div>
        </div>
    );
};

export default Home;