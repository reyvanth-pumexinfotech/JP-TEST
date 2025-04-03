import "./sectiontwo.css";
function LandingSectionTwo() {
  return (
    <div
      className="landing-section-two-main-div"
      style={{
        backgroundImage: `url("https://d2l4gl47o0xxs9.cloudfront.net/landing-assets/Landing-section-two-bg.svg")`,
      }}
    >
      <div className="landing-section-two-aniamte-top">
        {/* <h3>
          Powering tools and integrations from companies all around the world
        </h3> */}
        <h3>世界中の企業をサポートするツールと統合</h3>
      </div>
      <div className="landing-section-two-animate-bottom">
        <div className="number-section-two-left left">
          {/* <h1>15+</h1>
          <h2>Years in Business</h2> */}
          <h1>15+</h1>
          <h2>営業年数</h2>
        </div>
        <div className="number-section-two-left">
          {/* <h1>24+</h1>
          <h2>Delighted Clients</h2> */}
          <h1>24+</h1>
          <h2>ハッピー・カスタマー</h2>
        </div>
        <div className="number-section-two-left">
          {/* <h1>50+</h1>
          <h2>Projects Completed</h2> */}
          <h1>50+</h1>
          <h2>完了したプロジェクト</h2>
        </div>
      </div>
      {/* <h3>Powering tools and integrations from companies all around the world</h3> */}
    </div>
  );
}
export default LandingSectionTwo;
