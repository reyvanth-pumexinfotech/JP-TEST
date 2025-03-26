"use client";

import { motion } from "framer-motion";
import "./sectionFive.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function SectionFive() {
  // const whyUsContents = [
  //   {
  //     title: "Transparent and Reliable",
  //     description:
  //       "Our process are completely transparent and reliable. Nothing is hidden on your project.",
  //   },
  //   {
  //     title: "High Quality Service",
  //     description:
  //       "Get awesome results with the very best quality services that can always withstand any situation. ",
  //   },
  //   {
  //     title: "Industry Professionals",
  //     description:
  //       "Team of highly qualified professionals who are dedicated to deliver just the right services for your project.",
  //   },
  //   {
  //     title: "Innovative Ideas",
  //     description:
  //       "We deliver innovative modern ideas that help better your business and project.",
  //   },
  // ];

  const whyUsContents = [
    {
      title: "透明性と信頼性",
      description:
        "私たちのプロセスは完全に透明で信頼できるものです。あなたのプロジェクトに隠し事はありません。",
    },
    {
      title: "質の高いサービス",
      description:
        "どのような状況にも耐えうる最高品質のサービスで、素晴らしい結果を手に入れよう。",
    },
    {
      title: "業界のプロフェッショナル",
      description:
        "お客様のプロジェクトに最適なサービスを提供するため、高度な資格を持つ専門家チームが献身的にサポートします。",
    },
    {
      title: "革新的なアイデア",
      description:
        "お客様のビジネスやプロジェクトをより良いものにする革新的でモダンなアイデアをお届けします。",
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.3 },
    },
  };

  const splitIntoSpans = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span key={index} style={{ display: "inline-block", marginRight: "4px" }}>
        {word}
      </span>
    ));
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      debounceDelay: 50,
      throttleDelay: 99,
    });
  }, []);

  return (
    <div className="landing-section-five-main-div">
      <div className="whyus-title-div">
        {/* <h1>
          Why <br />
          Choose Us ?
        </h1> */}
        <h1>
          なぜ
          <br />
          私たちを選ぶのか？
        </h1>
      </div>
      <div className="whyus-content-div">
        {whyUsContents.map((whyUsContents, index) => (
          <motion.div
            key={index}
            initial="hidden"
            // whileInView="visible"
            animate="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
            custom={index}
          >
            <div data-aos="flip-up">
              <h2>{whyUsContents.title}</h2>
              <p>{splitIntoSpans(whyUsContents.description)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SectionFive;
