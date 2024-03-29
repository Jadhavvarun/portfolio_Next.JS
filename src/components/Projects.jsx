import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className="bg-white-1 min-h-screen py-10 sm:py-20 md:py-24 px-4 sm:px-10 md:px-20 lg:px-32">
            <div className="flex justify-center items-center">
                <h2 className="text-blue-2 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-center">
                    Innovation Surpasses Understanding!
                </h2>
            </div>
            <br /> <br />
            <h2 className="text-blue-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                My Projects
            </h2>
            <div className="flex flex-wrap justify-center mt-12">
                <div className="max-w-sm rounded-lg overflow-hidden shadow-2xl m-4 border-2 border-blue-2 p-4">
                    <img
                        className="w-full h-48 object-cover object-center"
                        src="/portfolio.png"
                        alt="Project 1"
                    />
                    <hr />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-blue-2">Portfolio Site</div>
                        <p className="text-blue-2 text-base">
                            Experience innovation firsthand. Portfolio embodies a fusion of creativity and code, delivering solutions that redefine user experiences. Explore how technology meets imagination.
                        </p>
                    </div>
                    <div>
                        <a href="https://varuns-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-blue-2 text-white-1 rounded-full px-4 py-2 text-sm font-semibold flex items-center justify-center hover:bg-blue-1 focus:bg-gray-300 transition duration-300 ease-in-out">
                            <FaGithub className="mr-2" /> Visit Project
                        </a>
                    </div>
                </div>

                {/* Add more similar card components for other projects */}
            </div>
        </div>
    );
};

export default Projects;
