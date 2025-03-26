"use client";

import Image from "next/image";
import Link from "next/link";
import "./footer.css";
import { useRouter } from "next/navigation";
import PrimaryButton from "../PrimaryButton/primaryButton";
import Usa from "../../../public/assets/Footer/Usa.svg";
import India from "../../../public/assets/Footer/India.svg";
import Canada from "../../../public/assets/Footer/Canada.svg";
import Linkdin from "../../../public/assets/Footer/Linkdin.svg";
import FB from "../../../public/assets/Footer/FB.svg";

function Footer() {
  const router = useRouter();

  const handleButtonClickJoinUs = () => {
    // Add your button click logic here
    router.push("/contact-us");
  };
  const handleButtonClickContact = () => {
    // Add your button click logic here
   
    router.push("/careers");
  };

  return (
    <div className="footer-main-div">
      <div className="footer-main-div-top">
        <div className="footer-top-design">
          <div className="footer-top-design-left">
            <h2>Join Us!</h2>
            <h3>
              Start your tech journey with <br />
              Pumex Infotech.
            </h3>
            <div className="button-sizing-footer">
              <PrimaryButton onClick={handleButtonClickContact}>Join</PrimaryButton>
            </div>
          </div>
          <div className="footer-top-design-right">
            <h2>Have an idea? Ping us.</h2>
            <h3>
              Commit sixty seconds to something
              <br />
              truly extraordinary.
            </h3>
            <div className="button-sizing-footer">
              <PrimaryButton onClick={handleButtonClickJoinUs}>Ping</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-main-div-center">
        <div className="footer-main-div-center-left">
          <div className="usa-address">
            <Image src={Usa} alt="NestJs Logo" />
            <h3>
              PUMEX COMPUTING <br />
              <span>7172 Regional St, Ste 210 Dublin,<br /> CA 94568, USA</span>
            </h3>
          </div>
          <div className="usa-address">
            <Image src={India} alt="NestJs Logo" />
            <h3>
              PUMEX INFOTECH PVT. LTD. <br />
              <span>
                10-A1, Trans Asia Cyber Park, Infopark Phase 2, <br />
                Kakkanad, Kochi, Kerala- 682303, India
              </span>
            </h3>
          </div>
          <div className="usa-address">
            <Image src={Canada} alt="NestJs Logo" />
            <h3>
              PUMEX CONSULTING <br />
              <span>
                6040 Montevideo rd, Mississauga, <br /> Ontario L5N2T4, Canada
              </span>
            </h3>
          </div>
        </div>
        <div className="footer-main-div-center-align">
          <h2>Navigation</h2>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/allsolutions">Solutions</Link>
        </div>
        <div className="footer-main-div-center-right">
          <h2>Services</h2>
          <Link href="/visualization">Visualization</Link>
          <Link href="/product-engineering">Product Engineering</Link>
          <Link href="/cloud">Cloud</Link>
        </div>
      </div>
      <div className="footer-main-div-bottom">
        <div className="footer-main-div-bottom-left">
          <Link href="https://www.linkedin.com/company/pumex-infotech-pvt-ltd./" target="_blank" rel="noopener noreferrer">
              <Image src={Linkdin} alt="LinkedIn Logo" />
          </Link>
          <Link href="https://www.facebook.com/people/Pumex-InfoTech-Pvt-Ltd/" target="_blank" rel="noopener noreferrer">
              <Image src={FB} alt="Facebook Logo" />
          </Link>
          <span>Terms</span>
          <span>Privacy</span>
        </div>
        <div className="footer-main-div-bottom-right">
          <h2>©2025 Pumex. All Rights Reserved.</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
