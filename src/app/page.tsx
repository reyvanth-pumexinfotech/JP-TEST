"use client";

import { useState, lazy, Suspense } from "react";
import "./page.css";
import Loader from "@/components/Loader/Loader";

import Navbar from "@/components/NewNavbar/navbar";
import Footer from "@/components/Footer/footer";

import LandingLoader from "@/components/LandingLoader/LandingLoader";
const Section1 = lazy(
  () => import("@/components/Landing/LandingSection1/landingSection")
);
const Section2 = lazy(
  () => import("@/components/Landing/LandingSection2/sectiontwo")
);
const Section3 = lazy(
  () => import("@/components/Landing/LandingSection3/sectionThree")
);
const Section4 = lazy(
  () => import("@/components/Landing/LandingSection4/sectionFour")
);
const Section5 = lazy(
  () => import("@/components/Landing/LandingSection5/sectionFive")
);
const Section6 = lazy(
  () => import("@/components/Landing/LandingSection6/sectionSix")
);

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

  if (loading) {
    return <LandingLoader onLoadingComplete={() => setLoading(false)} />;
  }

  return (
    <>
      <div className="landing-container-main">
        <Navbar />
        <Suspense fallback={<Loader duration={5000} />}>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default Page;
