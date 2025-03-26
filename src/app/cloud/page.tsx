"use client";
import NewNavbar from "../../components/NewNavbar/navbar";
import Footer from "../../components/Footer/footer";
import CloudSection1 from "../../components/CloudComponents/CloudSection1/CloudSection1";
import CloudSection2 from "../../components/CloudComponents/CloudSection2/CloudSection2";
import "./cloud.css";

export default function Cloud() {
  return (
    <div className="cloud-main-div">
      <NewNavbar />
      <CloudSection1 />
      <CloudSection2 />
      <Footer />
    </div>
  );
}
