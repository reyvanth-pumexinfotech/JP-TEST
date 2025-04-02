import "aos/dist/aos.css";
import "./contactTwo.css";
import Image from "next/image";
import GlobalLocation from "../../../../public/assets/ContactAssets/Global-Location.svg";
import Location from "../../../../public/assets/ContactAssets/Location-Contact.svg";
import EmailLogo from "../../../../public/assets/ContactAssets/contact-email.svg";

function ContactTwo() {
  return (
    <div className="contact-section-two-main-div">
      <div className="contact-section-center-wrapper">
        <div className="contact-section-two-main-div-right" data-aos="flip-up">
          {/* <div className="contact-us-email-box">
            <div className="contact-us-email-box-top">
              <Image src={EmailLogo} alt="メールアイコン" />
              <h2>メール</h2>
            </div>
            <div className="contact-us-email-box-bottom">
              <h3>hr@pumexinfotech.com</h3>
            </div>
          </div> */}
          <div className="contact-us-box-address-box">
            <div className="contact-us-box-address-box-top">
              <Image src={EmailLogo} alt="メールアイコン" />
              <h2>メール</h2>
            </div>
            <div className="contact-us-email-box-bottom">
              <h3>hr@pumexinfotech.com</h3>
            </div>
            <div className="contact-us-box-address-box-top">
              <Image src={Location} alt="所在地アイコン" />
              <h2>住所</h2>
            </div>
            <div className="contact-us-box-address-box-bottom">
              <div
                className="contact-us-box-address-box-bottom-location"
                data-aos="flip-up"
              >
                <Image src={GlobalLocation} alt="グローバル所在地" />
                <a
                  href="https://maps.app.goo.gl/SATMnBehvUtSFSWx8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    <span>プメックス・コンピューティング</span>
                    <br />
                    7172 リージョナル ストリート, スイート 210 ダブリン,
                    <br /> カリフォルニア 94568, アメリカ合衆国
                  </h3>
                </a>
              </div>
              <div
                className="contact-us-box-address-box-bottom-location"
                data-aos="flip-up"
              >
                <Image src={GlobalLocation} alt="グローバル所在地" />
                <a
                  href="https://maps.app.goo.gl/YgVVQSpHaF91q65F9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    <span>プメックス・インフォテック</span>
                    <br />
                    10-A1, トランスアジア サイバーパーク, インフォパーク
                    フェーズ 2,
                    <br />
                    カカナード, コーチ, ケララ州 - 682303, インド
                  </h3>
                </a>
              </div>
              <div
                className="contact-us-box-address-box-bottom-location"
                data-aos="flip-up"
              >
                <Image src={GlobalLocation} alt="グローバル所在地" />
                <a
                  href="https://maps.app.goo.gl/WBdeb4hBPJsw2maT8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    <span>プメックス・コンサルティング </span>
                    6040 モンテビデオ ロード, ミシサガ, <br /> オンタリオ
                    L5N2T4, カナダ
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactTwo;
