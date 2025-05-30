"use client";
import "./contactThree.css";
import SecondaryButton from "@/components/SecondaryButton/secondaryButton";
import { useRouter } from "next/navigation";

function ContactThree() {
  const router = useRouter();
  return (
    <div className="contact-section-three-main-div">
      <div className="contact-section-three-main-div-box">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="contact-background-video"
        >
          <source
            src="/assets/ContactAssets/ContactVideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Content that should be above the video */}
        <div className="content-overlay">
          {/* <h1>Join our team of Creators and Dreamers</h1> */}
          <h1>クリエイターとドリーマーのチームに参加しよう</h1>
          {/* <h2>
            Our philosophy is simple- we are a team of diverse, passionate
            people and empower
            <br />a culture that encourages you to do your best work.
          </h2> */}
          <h2>
            私たちの哲学はシンプルです。私たちは多様で情熱的なチームであり、
            <br />
            最高の仕事ができる文化を育むことを大切にしています。
          </h2>
          <div className="contact-join-us-button-sizer">
            <SecondaryButton
              onClick={() => {
                router.push("/contact-us");
              }}
            >
              {/* Join Us */}
              私たちと一緒に
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactThree;
