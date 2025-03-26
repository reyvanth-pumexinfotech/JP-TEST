
"use client"
import "./aboutus.css";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/NewNavbar/navbar";
import Herosection from "@/components/aboutUsComponents/HeroSection/herosection";
import TextSection from "@/components/aboutUsComponents/AboutUSText/aboutUsText";
import FoundingMemebers from "@/components/aboutUsComponents/FoundingMembers/foundingMemebers";
import LifeAtPumex from "@/components/aboutUsComponents/LifeAtPumex/lifeatpumex";
import Loader from "@/components/Loader/Loader";
// import TextScroll from "@/components/aboutUsComponents/TextScroll/TextScroll";

export default function AboutUs() {
  return (
    <div className="about-main-container">
      <Loader duration={2000} />
      <Navbar />
      <Herosection />
      <TextSection />
      <FoundingMemebers />
      {/* <TextScroll /> */}
      {/* <div className="line-div-for-about-us"></div> */}
      <LifeAtPumex />
      <Footer />
    </div>
  );
}
