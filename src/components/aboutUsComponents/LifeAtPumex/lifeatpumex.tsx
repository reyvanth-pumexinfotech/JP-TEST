import "./lifeatpumex.css";
import SecondaryButton from "@/components/SecondaryButton/secondaryButton";
import ClientImageLoader from "./clientImageLoader";

const imageSources = [
  {
    src: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/IMG_0943.svg",
    alt: "Team Image 1",
  },
  {
    src: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/AGM.svg",
    alt: "Team Image 2",
  },
  {
    src: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/OnamSingle (1).svg",
    alt: "Team Image 3",
  },
  {
    src: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/Onam.svg",
    alt: "Team Image 4",
  },
  {
    src: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/Sunset.svg",
    alt: "Team Image 5",
  },
  {
    src: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/IMG_0703.svg",
    alt: "Team Image 6",
  },
  {
    src: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/Aneesh.svg",
    alt: "Team Image 7",
  },
];

const Lifeatpumex = () => {
  return (
    <div
      className="life-at-pumex-main-div"
      style={{
        backgroundImage: `url("https://d2l4gl47o0xxs9.cloudfront.net/landing-assets/Landing-section-one-bg.svg")`,
      }}
    >
      <div className="life-at-pumex-secondary-div">
        <h1>ピュメックスの道</h1>
        <div className="life-at-button-sizer">
          <SecondaryButton>
            <a href="/team-photos">もっと見る</a>
          </SecondaryButton>
        </div>
      </div>

      <div className="team-image-grid-layer">
        {imageSources.map((image, index) => (
          <ClientImageLoader key={index} image={image} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Lifeatpumex;
