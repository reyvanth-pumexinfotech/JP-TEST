import "./herosection.css";

function Herosection() {
  return (
    <div className="about-us-herosection-main">
      <div className="about-us-heading-and-desc-div">
        <div className="about-us-herosection-main-left">
          <h1>
            Driving business growth
            <br /> through advanced <br />
            <span>technology </span> and <span>expertise</span>.
          </h1>
        </div>
        <div className="about-us-herosection-main-right">
          <h2>
            We deliver expertise and reliability with a client-first approach,
            ensuring seamless modernization, agile execution, and high-quality
            results. With 15 years of experience, we prioritize efficiency,
            integrity, and on-time delivery.
          </h2>
        </div>
      </div>
      <div className="image-about-us-section">
        <img
          src="https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/Banner-pumex.svg"
          alt="Pumex Banner"
        />
      </div>
    </div>
  );
}

export default Herosection;
