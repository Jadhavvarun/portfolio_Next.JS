import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { global } from "styled-jsx/css";

const Page = () => {
  return (
    <div className={global.container}>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Page;
