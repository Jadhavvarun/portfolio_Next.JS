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
                <div className="md:w-1/2 mb-8 md:mb-0 sm:mr-12 mt-36">
                    <img src="https://images.squarespace-cdn.com/content/v1/56012adce4b0cf12162d2a86/1472569189356-KGD5TAI2VUG58XPLP4TH/ke17ZwdGBToddI8pDm48kJQJVsEtCLppChK_Q1hK7HxZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVH_MrANN8KR8T9Qur-Sqz4nJ4Djo7RP9NLGu1GdMqYHR2bSd6kfRtgWHgNMDgGnmDY/image-asset.gif" alt="Profile" className="w-full h-full" />
                </div>

                {/* Right column with Contact Me form and social links */}
                <div className="w-full mx-auto p-6 rounded-lg shadow-lg bg-gray-50 text-gray-800 mb-8 mt-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block font-medium">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-medium">Your Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-medium">Your Message</label>
                            <textarea
                                id="message"
                                placeholder="Enter your message"
                                rows="4"
                                className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            onClick={handleSendEmail}
                            className="w-full bg-gray-700 text-white py-3 rounded-md flex items-center justify-center hover:bg-blue-2 transition duration-300 ease-in-out"
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
