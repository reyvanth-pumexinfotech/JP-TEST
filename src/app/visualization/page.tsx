"use client";
// import NewNavbar from "../../components/NewNavbar/navbar";
// import Footer from "../../components/Footer/footer";
import VisualizationSection1 from "../../components/VisualizationComponents/VisualizationSection1/VisualizationSection1";
import VisualizationSection2 from "../../components/VisualizationComponents/VisualizationSection2/VisualizationSection2";
import "./visualization.css";

export default function Visualization() {
  return (
    <div className="visualization-main-div">
      {/* <NewNavbar /> */}

      <VisualizationSection1 />
      <VisualizationSection2 />
      {/* <Footer /> */}
    </div>
  );
}
