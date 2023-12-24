import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import EducationComponent from "@/components/Education";
import ExperienceComponent from "@/components/Experience";
import Skills from "@/components/Skills";

const about = () => {
    return(
        <div>
            <Navbar />
            <About />
            <Skills />
            <ExperienceComponent />
            <EducationComponent />
            <Footer />

        </div>
    )
}
export default about;