"use client";

import { useState } from "react";
import "./page.css";

import LandingLoader from "@/components/LandingLoader/LandingLoader";
import Navbar from "@/components/NewNavbar/navbar";
import Footer from "@/components/Footer/footer";
import Section1 from "@/components/Landing/LandingSection1/landingSection";
import Section2 from "@/components/Landing/LandingSection2/sectiontwo";
import Section3 from "@/components/Landing/LandingSection3/sectionThree";
import Section4 from "@/components/Landing/LandingSection4/sectionFour";
import Section5 from "@/components/Landing/LandingSection5/sectionFive";
import Section6 from "@/components/Landing/LandingSection6/sectionSix";

// const Page = () => {
//   const [loading, setLoading] = useState(true);

//   return (
//     <>
//       {loading && <LandingLoader onLoadingComplete={() => setLoading(false)} />}
//       {!loading && (
//         <div className="landing-container-main">
//           <Navbar />
//           {/* <Section1 /> */}
//           <Section2 />
//           <Section3 />
//           <Section4 />
//           <Section5 />
//           <Section6 />
//           <Footer />
//         </div>
//       )}
//     </>
//   );
// };

// export default Page;

const Page = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div
        className={`landing-container-main ${loading ? "hidden-content" : ""}`}
      >
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>

      {loading && <LandingLoader onLoadingComplete={() => setLoading(false)} />}
    </>
  );
};

export default Page;
