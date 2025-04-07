import NewNavbar from "../../components/NewNavbar/navbar";
import Footer from "../../components/Footer/footer";
import ProductEngineeringSection1 from "../../components/ProductEngineeringComponents/ProductEngineeringSection1/ProductEngineeringSection1";
import ProductEngineeringSection2 from "../../components/ProductEngineeringComponents/ProductEngineeringSection2/ProductEngineeringSection2";
import "./proe.css";

export default function ProductEngineering() {
  return (
    <div className="product-engineering-main-div">
      <NewNavbar />
      <ProductEngineeringSection1 />
      <ProductEngineeringSection2 />
      <Footer />
    </div>
  );
}
