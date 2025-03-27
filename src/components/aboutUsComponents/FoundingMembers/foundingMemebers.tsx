import "./foundingMembers.css";
import Image from "next/image";
import Linkdin from "../../../../public/assets/AboutAssets/linkdin.svg";

function FoundingMemebers() {
  return (
    <div
      className="founding-memebers-main-div"
      style={{
        backgroundImage: `linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, #000000 100%), url("https://d2l4gl47o0xxs9.cloudfront.net/landing-assets/Layerimg.svg")`,
      }}
    >
      {/* <h1>Our Founding Members</h1> */}
      <h1>創立メンバー</h1>.
      <div className="founding-members-view">
        {/* Babu T Jose */}
        <div className="founding-members-card">
          <div className="founding-members-card-top">
            <Image
              src="https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/BabuSir.svg"
              alt="Dr. Babu T Jose"
              width={100}
              height={100}
            />
          </div>
          <div className="founding-members-card-bottom">
            <div className="founding-members-card-bottom-left">
              {/* <h1>Dr. Babu T Jose</h1>
              <h2>Chairman and Managing Director</h2> */}
              <h1>バブ・T・ホセ博士</h1>
              <h2>会長兼マネージング・ディレクター</h2>
            </div>
            <div className="founding-members-card-bottom-right">
              <a
                href="https://www.linkedin.com/in/drbabutjose/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Linkdin} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        {/* Satheesh Thomas */}
        <div className="founding-members-card">
          <div className="founding-members-card-top-satheesh">
            <Image
              src="https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/Satheesh-Front.svg"
              alt="Mr. Satheesh Thomas"
              width={100}
              height={100}
            />
          </div>
          <div className="founding-members-card-bottom">
            <div className="founding-members-card-bottom-left">
              {/* <h1>Mr. Satheesh Thomas</h1>
              <h2>Director</h2> */}
              <h1>サティシュ・トーマス</h1>
              <h2>監督</h2>
            </div>
            <div className="founding-members-card-bottom-right">
              <a
                href="https://www.linkedin.com/in/satheesh-thomas-pumex/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Linkdin} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        {/* Anil Joseph */}
        <div className="founding-members-card">
          <div className="founding-members-card-top">
            <Image
              src="https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/1690977263284.svg"
              alt="Dr. Anil Joseph"
              width={100}
              height={100}
            />
          </div>
          <div className="founding-members-card-bottom">
            <div className="founding-members-card-bottom-left">
              {/* <h1>Dr. Anil Joseph</h1>
              <h2>Director</h2> */}
              <h1>アニル・ジョセフ博士</h1>
              <h2>監督</h2>
            </div>
            <div className="founding-members-card-bottom-right">
              <a
                href="https://www.linkedin.com/in/draniljosephcivilengineer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Linkdin} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoundingMemebers;
