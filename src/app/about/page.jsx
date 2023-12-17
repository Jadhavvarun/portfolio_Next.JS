import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import EducationComponent from "@/components/Education";
import ExperienceComponent from "@/components/Experience";

const about = () => {
    return(
        <div>
            <Navbar />
            <About />
            <ExperienceComponent />
            <EducationComponent />
            <Footer />

        </div>
    )
}
export default about;