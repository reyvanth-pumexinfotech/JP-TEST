"use client";
import NewNavbar from "../../components/NewNavbar/navbar";
import Footer from "../../components/Footer/footer";
import VisualizationSection2 from "../../components/VisualizationComponents/VisualizationSection2/VisualizationSection2";
import "./visualization.css";

export default function Visualization() {
  return (
    <div className="visualization-main-div">
      <NewNavbar />
      <VisualizationSection2 />
      <Footer />
    </div>
  );
}
