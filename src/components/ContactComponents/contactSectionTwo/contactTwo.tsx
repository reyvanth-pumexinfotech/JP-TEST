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
  // Temporary state to store input values
  const [emailId, setEmailId] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  // Initialize AOS only once on mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation speed
      easing: "ease-in-out",
      once: false, // Ensures it animates every time you scroll
      debounceDelay: 50, // Improves performance
      throttleDelay: 99,
    });
  }, []);


  const handleSubmit = async () => {
    // ✅ Validate required fields
    if (!name.trim() || !emailId.trim()) {
      Swal.fire({
        title: "Let’s Get This Right",
        text: "Name and Email are required!",
        customClass: {
          popup: "pumex-admin-popups-swal-popup",
          title: "pumex-admin-popups-swal-title",
          htmlContainer: "pumex-admin-popups-swal-text",
          confirmButton: "pumex-admin-popups-swal-button",
        },
      });
      return;
    }

    // ✅ Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      Swal.fire({
        title: "Let’s Get This Right",
        text: "Please enter a valid email address!",
        customClass: {
          popup: "pumex-admin-popups-swal-popup",
          title: "pumex-admin-popups-swal-title",
          htmlContainer: "pumex-admin-popups-swal-text",
          confirmButton: "pumex-admin-popups-swal-button",
        },
      });
      return;
    }

    // ✅ Validate phone number format
    const phoneRegex = /^\d{0,13}$/;
    if (phoneNumber && !phoneRegex.test(phoneNumber)) {
      Swal.fire({
        title: "Error!",
        text: "Phone number must be numeric and up to 13 digits!",
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
      // 🔄 Show loading Swal alert
      Swal.fire({
        title: "Submitting...",
        text: "Please wait while we submit your contact details.",
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

      // 📨 Send data to API
      await createContactApi({
        name,
        email: emailId,
        mobileNum: phoneNumber,
        message,
      });

      // ✅ Success Swal alert
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your contact details have been submitted successfully!",
        customClass: {
          popup: "pumex-admin-popups-swal-popup",
          title: "pumex-admin-popups-swal-title",
          htmlContainer: "pumex-admin-popups-swal-text",
          confirmButton: "pumex-admin-popups-swal-button",
        },
      });

      // Reset form
      setName("");
      setEmailId("");
      setPhoneNumber("");
      setMessage("");
    } catch {
      // ❌ Error Swal alert
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again later.",
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
                <label htmlFor="name">Name *</label>
                <Inputfield
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="contact-form-input-sizer">
                <label htmlFor="emailId">Email Id *</label>
                <Inputfield
                  type="text"
                  name="emailId"
                  placeholder="Enter your Email ID"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
              <div className="contact-form-input-sizer">
                <label htmlFor="phoneNumber">Phone Number</label>
                <Inputfield
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="contact-form-input-sizer message-mobile-only">
                <label htmlFor="message">Message</label>
                <Textarea
                  name="message"
                  placeholder="Enter your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="contact-button-input-sizer">
                <PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
              </div>
            </div>
            <div className="contact-us-box-right">
              <div className="contact-form-input-sizer">
                <label htmlFor="message">Message</label>
                <Textarea
                  name="message"
                  placeholder="Enter your Message"
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
              <Image src={EmailLogo} alt="Email Icon" />
              <h2>Email </h2>
            </div>
            <div className="contact-us-email-box-bottom">
              <h3>hr@pumexinfotech.com</h3>
            </div>
          </div>
          <div className="contact-us-box-address-box">
            <div className="contact-us-box-address-box-top">
              <Image src={Location} alt="Location Icon" />
              <h2>Address</h2>
            </div>
            <div className="contact-us-box-address-box-bottom">
              <div className="contact-us-box-address-box-bottom-location" data-aos="flip-up">
                <Image src={GlobalLocation} alt="Global Location" />
                <a
                  href="https://maps.app.goo.gl/SATMnBehvUtSFSWx8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    <span>PUMEX COMPUTING </span><br />7172 Regional St, Ste 210 Dublin,<br /> CA 94568,  USA
                  </h3>
                </a>
              </div>
              <div className="contact-us-box-address-box-bottom-location" data-aos="flip-up">
                <Image src={GlobalLocation} alt="Global Location" />
                <a
                  href="https://maps.app.goo.gl/YgVVQSpHaF91q65F9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    <span>PUMEX INFOTECH PVT. LTD.</span><br />10-A1, Trans Asia Cyber Park, Infopark
                    Phase 2, Kakkanad, Kochi, Kerala-682303, India
                  </h3>
                </a>
              </div>
              <div className="contact-us-box-address-box-bottom-location" data-aos="flip-up">
                <Image src={GlobalLocation} alt="Global Location" />
                <a
                  href="https://maps.app.goo.gl/WBdeb4hBPJsw2maT8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    <span>PUMEX CONSULTING </span><br />6040 Montevideo Rd,Mississauga, <br />Ontario L5N2T4, Canada
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
