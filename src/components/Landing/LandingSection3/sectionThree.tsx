"use client";
import React, { useRef, useEffect } from "react";
import "./sectionThree.css";

function SectionThree() {
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);
  const video3Ref = useRef<HTMLVideoElement | null>(null);

  const video1Url = "https://d2l4gl47o0xxs9.cloudfront.net/New Pic (1).mp4";
  const video2Url = "https://d2l4gl47o0xxs9.cloudfront.net/visual.mp4";
  const video3Url = "https://d2l4gl47o0xxs9.cloudfront.net/cloudEnvy.mp4";

  useEffect(() => {
    [video1Ref, video2Ref, video3Ref].forEach((ref) => {
      if (ref.current) {
        ref.current.play().catch((e) => {
          console.warn("Autoplay failed:", e);
        });
      }
    });
  }, []);

  return (
    <div className="landing-section-three-main-div">
      {/* Card 1 */}
      <div
        className="landing-section-three-cards-one"
        style={{
          backgroundImage: `url("https://d2l4gl47o0xxs9.cloudfront.net/landing-assets/RectangleBlue.svg")`,
        }}
      >
        <div className="landing-section-three-cards-one-left">
          <div className="design-card-landing">
            <div className="inside-card-video">
              <video
                ref={video1Ref}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="landing-section-one-background-video"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src={video1Url} type="video/mp4" />
                お使いのブラウザは動画タグをサポートしていません。
              </video>
            </div>
          </div>
          <div className="description-quote-landing-three">
            <h2>技術で革新し、構築し、進化する</h2>
          </div>
        </div>
        <div className="landing-section-three-cards-one-right">
          <h1>プロダクトエンジニアリング</h1>
          <h2>
            ピュメックスでは、プロダクトエンジニアリングは
            コンセプトを卓越したデジタル体験に変える
            革新的なソリューションを生み出す技術です。
          </h2>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="landing-section-three-cards-two"
        style={{
          backgroundImage: `url("https://d2l4gl47o0xxs9.cloudfront.net/landing-assets/RectanglePurple.svg")`,
        }}
      >
        <div className="landing-section-three-cards-two-left">
          <h1>ビジュアライゼーション</h1>
          <h2>
            高度な製品ビジュアライゼーションでアイデアを鮮明な現実に。
            コンセプトを説得力のあるビジュアル体験に変えることで、
            イノベーションを刺激し、意思決定を強化し、
            驚くほど鮮明にビジョンを実現します。
          </h2>
        </div>
        <div className="landing-section-three-cards-two-right">
          <div className="design-card-landing">
            <div className="inside-card-video">
              <video
                ref={video2Ref}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="landing-section-one-background-video"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src={video2Url} type="video/mp4" />
                お使いのブラウザは動画タグをサポートしていません。
              </video>
            </div>
          </div>
          <div className="description-quote-landing-three">
            <h2>先進的なビジュアルでその先を見据える</h2>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="landing-section-three-cards-three"
        style={{
          backgroundImage: `url("https://d2l4gl47o0xxs9.cloudfront.net/landing-assets/RectanglePink.svg")`,
        }}
      >
        <div className="landing-section-three-cards-three-left">
          <div className="design-card-landing">
            <div className="inside-card-video">
              <video
                ref={video3Ref}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="landing-section-one-background-video"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src={video3Url} type="video/mp4" />
                お使いのブラウザは動画タグをサポートしていません。
              </video>
            </div>
          </div>
          <div className="description-quote-landing-three">
            <h2>クラウドソリューションで未来を切り拓く</h2>
          </div>
        </div>
        <div className="landing-section-three-cards-three-right">
          <h1>クラウド</h1>
          <h2>
            効率的でセキュアなクラウド・ソリューションでお客様のビジネスを強化し、
            シームレスなデジタル体験のためのイノベーションと
            スケーラビリティを推進します。
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
