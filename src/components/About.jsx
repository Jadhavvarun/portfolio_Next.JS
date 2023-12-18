'use client'
import Image from "next/image";

const skills = ['JavaScript', 'React', 'CSS', 'HTML', 'Node.js', 'Next.js', 'Tailwind CSS', 'Express.js', 'SQL', 'Figma'];

const About = () => {
    const radius = 200; // Radius of the circular pattern
    const angleIncrement = (2 * Math.PI) / skills.length; // Angle between each skill

    return (
        <div>
            <div className="h-auto bg-black">
                <div className="text-center mt-28">
                    <h2 className="text-8xl font-bold text-white">Passion Fuels<br /> Purpose! </h2>
                </div>
                <div className="flex px-28 py-28">
                    <div className="w-1/3">
                        <h4 className="text-xl font-semibold text-white">BIOGRAPHY</h4> <br />
                        <p className="text-white">Hi, I&apos;m Varun Jadhav, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients&apos; visions to life.</p> <br />
                        <p className="text-white">I believe that design is about more than just making things look pretty – it&apos;s about solving problems and creating intuitive, enjoyable experiences for users.</p> <br />
                        <p className="text-white">Whether I&apos;m working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                    </div>
                    <div className="w-1/3 flex justify-center items-center ml-14">
                        <div className="h-[430px] w-[350px] bg-black border-white border-4 rounded-lg shadow-white shadow-xl">

                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="mb-20 text-center mt-20">
                            <p className="text-7xl font-bold mb-1 text-white">5+</p>
                            <p className="text-2xl font-semibold text-white">Projects Completed</p>
                        </div>
                        <div className="text-center">
                            <p className="text-7xl font-bold mb-1 text-white">1+</p>
                            <p className="text-2xl font-semibold text-white">Years Of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-screen bg-black">
                <h2 className="text-7xl font-bold text-center text-white">Skills</h2>
                <div className="universe justify-center items-center flex">
                    {skills.map((skill, index) => {
                        const angle = index * angleIncrement;
                        const x = radius * Math.cos(angle);
                        const y = radius * Math.sin(angle);

                        return (
                            <div
                                className="skill"
                                key={index}
                                style={{ transform: `translate(${x}px, ${y}px)` }}
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
        }
      `}</style>
      </div>
    )
}
export default About;