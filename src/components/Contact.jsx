'use client'
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';

const handleSendEmail = () => {
    const mailToLink = 'mailto:jadhavvarun67@gmail.com';
    window.open(mailToLink);
    alert('Mail sent successfully!');
};

const ContactMe = () => {
    return (
        <div className="bg-white-1 min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-start">
                {/* Left column with profile image */}
                <div className="md:w-1/2 mb-8 md:mb-0 sm:mr-12 mt-8">
                    <img src="https://img.freepik.com/premium-vector/boy-working-desk-flat-illustration_671039-836.jpg" alt="Profile" className="w-full h-auto" />
                </div>
                
                {/* Right column with Contact Me form and social links */}
                <div className="md:w-1/2 mx-auto p-8 rounded-lg shadow-2xl bg-white text-black mb-8 mt-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
                    <form className="flex flex-col space-y-4">
                        {/* Your form inputs */}
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="p-3 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
                        ></textarea>
                        <button
                            type="button"
                            onClick={handleSendEmail}
                            className="bg-indigo-500 text-white py-3 rounded-md flex items-center justify-center hover:bg-indigo-600 transition duration-300 ease-in-out text-center"
                        >
                            Send <RiSendPlaneFill className="ml-2" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Connect with Me section */}
            <div className="text-center mb-10 md:text-left">
                <h2 className="text-3xl font-bold mb-6 text-blue-2">Connect with Me</h2>
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
                        <FaGithub size={30} color="#000000" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
