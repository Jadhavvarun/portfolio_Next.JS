'use client'
import { RiSendPlaneFill } from 'react-icons/ri';

const handleSendEmail = () => {
    const mailToLink = 'mailto:jadhavvarun67@gmail.com';
    window.open(mailToLink);
    alert('Mail sent successfully!');
};

const ContactMe = () => {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <div className="max-w-md mx-auto p-8 rounded-lg shadow-2xl bg-gradient-to-r from-yellow-400 to-blue-500 text-black">
                <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
                <form className="flex flex-col space-y-4">
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
    );
};

export default ContactMe;
