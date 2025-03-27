"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import "./contactTwo.css";
import Image from "next/image";
import Inputfield from "@/components/inputField/inputfiled";
import Textarea from "@/components/Textarea/textarea";
import PrimaryButton from "@/components/PrimaryButton/primaryButton";
import GlobalLocation from "../../../../public/assets/ContactAssets/Global-Location.svg";
import Location from "../../../../public/assets/ContactAssets/Location-Contact.svg";
import EmailLogo from "../../../../public/assets/ContactAssets/contact-email.svg";
import { createContactApi } from "@/services/contactService";

function ContactTwo() {
  const [emailId, setEmailId] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      debounceDelay: 50,
      throttleDelay: 99,
    });
  }, []);

  const handleSubmit = async () => {
    if (!name.trim() || !emailId.trim()) {
      Swal.fire({
        title: "正しい情報を入力してください",
        text: "名前とメールアドレスは必須です！",
        customClass: {
          popup: "pumex-admin-popups-swal-popup",
          title: "pumex-admin-popups-swal-title",
          htmlContainer: "pumex-admin-popups-swal-text",
          confirmButton: "pumex-admin-popups-swal-button",
        },
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      Swal.fire({
        title: "正しい情報を入力してください",
        text: "有効なメールアドレスを入力してください！",
        customClass: {
          popup: "pumex-admin-popups-swal-popup",
          title: "pumex-admin-popups-swal-title",
          htmlContainer: "pumex-admin-popups-swal-text",
          confirmButton: "pumex-admin-popups-swal-button",
        },
      });
      return;
    }

    const phoneRegex = /^\d{0,13}$/;
    if (phoneNumber && !phoneRegex.test(phoneNumber)) {
      Swal.fire({
        title: "エラー！",
        text: "電話番号は数字で、最大13桁まで入力してください！",
        customClass: {
          popup: "pumex-admin-popups-swal-popup",
          title: "pumex-admin-popups-swal-title",
          htmlContainer: "pumex-admin-popups-swal-text",
          confirmButton: "pumex-admin-popups-swal-button",
        },
      });
      return;
    }

    try {
      Swal.fire({
        title: "送信中...",
        text: "お問い合わせ内容を送信しています。お待ちください。",
        customClass: {
          popup: "pumex-admin-popups-swal-popup",
          title: "pumex-admin-popups-swal-title",
          htmlContainer: "pumex-admin-popups-swal-text",
          confirmButton: "pumex-admin-popups-swal-button",
        },
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      await createContactApi({
        name,
        email: emailId,
        mobileNum: phoneNumber,
        message,
      });

      Swal.fire({
        icon: "success",
        title: "成功",
        text: "お問い合わせ内容が正常に送信されました！",
        customClass: {
          popup: "pumex-admin-popups-swal-popup",
          title: "pumex-admin-popups-swal-title",
          htmlContainer: "pumex-admin-popups-swal-text",
          confirmButton: "pumex-admin-popups-swal-button",
        },
      });

      setName("");
      setEmailId("");
      setPhoneNumber("");
      setMessage("");
    } catch {
      Swal.fire({
        icon: "error",
        title: "送信失敗",
        text: "何か問題が発生しました。後でもう一度お試しください。",
        customClass: {
          popup: "pumex-admin-popups-swal-popup",
          title: "pumex-admin-popups-swal-title",
          htmlContainer: "pumex-admin-popups-swal-text",
          confirmButton: "pumex-admin-popups-swal-button",
        },
      });
    }
  };

  return (
    <div className="contact-section-two-main-div">
      <div className="contact-section-center-wrapper">
        <div className="contact-section-two-main-div-left" data-aos="flip-left">
          <div className="contact-us-box">
            <div className="contact-us-box-left">
              <div className="contact-form-input-sizer">
                <label htmlFor="name">名前 *</label>
                <Inputfield
                  type="text"
                  name="name"
                  placeholder="名前を入力してください"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="contact-form-input-sizer">
                <label htmlFor="emailId">メールアドレス *</label>
                <Inputfield
                  type="text"
                  name="emailId"
                  placeholder="メールアドレスを入力してください"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
              <div className="contact-form-input-sizer">
                <label htmlFor="phoneNumber">電話番号</label>
                <Inputfield
                  type="text"
                  name="phoneNumber"
                  placeholder="電話番号を入力してください"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="contact-form-input-sizer message-mobile-only">
                <label htmlFor="message">メッセージ</label>
                <Textarea
                  name="message"
                  placeholder="メッセージを入力してください"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="contact-button-input-sizer">
                <PrimaryButton onClick={handleSubmit}>送信</PrimaryButton>
              </div>
            </div>
            <div className="contact-us-box-right">
              <div className="contact-form-input-sizer">
                <label htmlFor="message">メッセージ</label>
                <Textarea
                  name="message"
                  placeholder="メッセージを入力してください"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-section-two-main-div-right" data-aos="flip-up">
          <div className="contact-us-email-box">
            <div className="contact-us-email-box-top">
              <Image src={EmailLogo} alt="メールアイコン" />
              <h2>メール</h2>
            </div>
            <div className="contact-us-email-box-bottom">
              <h3>hr@pumexinfotech.com</h3>
            </div>
          </div>
          <div className="contact-us-box-address-box">
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
                    7172 リージョナル ストリート, スイート 210,
                    <br /> カリフォルニア州 94568, アメリカ合衆国
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
                    10-A1, トランスアジア サイバーパーク, インフォパー
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
