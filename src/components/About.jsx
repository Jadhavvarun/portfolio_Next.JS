'use client'
import Image from 'next/image';

const skills = ['JavaScript', 'React', 'CSS', 'HTML', 'Node.js', 'Next.js', 'Tailwind CSS', 'Express.js', 'SQL', 'Figma'];

const About = () => {
    const radius = 200; // Radius of the circular pattern
    const angleIncrement = (2 * Math.PI) / skills.length; // Angle between each skill

    return (
        <div>
            <div className="bg-black">
                <div className="text-center mt-20 md:mt-28">
                    <h2 className="text-4xl md:text-8xl font-bold text-white">Passion Fuels Purpose!</h2>
                </div>
                <div className="flex flex-col md:flex-row px-6 md:px-28 py-12 md:py-28">
                    <div className="md:w-1/2">
                        <h4 className="text-xl font-semibold text-white">BIOGRAPHY</h4> <br />
                        <p className="text-white">
                            Hi, I'm Varun Jadhav, a web developer and UI/UX designer with a passion for creating beautiful, functional,
                            and user-centered digital experiences. With 1 year of experience in the field. I am always looking for new
                            and innovative ways to bring my clients visions to life.
                        </p>
                        <br />
                        <p className="text-white">
                            I believe that design is about more than just making things look pretty it is about solving problems and
                            creating intuitive, enjoyable experiences for users.
                        </p>
                        <br />
                        <p className="text-white">
                            Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design
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
            <div className="bg-black h-screen py-12 md:py-24">
                <h2 className="text-4xl md:text-7xl font-bold text-center text-white mb-20">Skills</h2>
                <div className="universe justify-center items-center flex">
                    {skills.map((skill, index) => {
                        const angle = index * angleIncrement;
                        const x = radius * Math.cos(angle);
                        const y = radius * Math.sin(angle);


                        return (
                            <div
                                className="skill mb-4 md:mb-8"
                                key={index}
                                style={{ transform: `translate(${x}px, ${y}px)` }} // Convert this to a CSS class
                            >
                                {skill}
                            </div>
                        );
                    })}
                </div>
            </div>
            <style jsx>{`
  .universe {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .skill {
    background-color: #ffffff;
    color: #000000;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease; 
  }
`}</style>
        </div>
    );
};

export default About;
