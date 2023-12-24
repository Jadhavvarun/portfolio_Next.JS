
const About = () => {

    return (
        <div>
            <div className="bg-black">
                <div className="text-center py-20 md:mt-28">
                    <h2 className="text-4xl md:text-8xl font-bold text-white">Passion Fuels Purpose!</h2>
                </div>
                <div className="flex flex-col md:flex-row px-6 md:px-28 py-12 md:py-28">
                    <div className="md:w-1/2">
                        <h4 className="text-xl font-semibold text-white">BIOGRAPHY</h4> <br />
                        <p className="text-white">
                            Hi, I&apos;m Varun Jadhav, a web developer and UI/UX designer with a passion for creating beautiful, functional,
                            and user-centered digital experiences. With 1 year of experience in the field. I am always looking for new
                            and innovative ways to bring my clients&apos; visions to life.
                        </p>
                        <br />
                        <p className="text-white">
                            I believe that design is about more than just making things look pretty it is about solving problems and
                            creating intuitive, enjoyable experiences for users.
                        </p>
                        <br />
                        <p className="text-white">
                            Whether I&apos;m working on a website, mobile app, or other digital product, I bring my commitment to design
                            excellence and usercentered thinking to every project I work on. I look forward to the opportunity to bring
                            my skills and passion to your next project.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                        <div className="h-[250px] md:h-[430px] w-[250px] md:w-[350px] bg-black border-white border-4 rounded-lg shadow-white shadow-xl">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
