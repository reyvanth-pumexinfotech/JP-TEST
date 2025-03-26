"use client";

import "./SolutionSectionOne.css";
import Image from "next/image";

export default function SolutionSectionOne() {
  return (
    <div className="solution-section-one-main-div">
      <div className="solution-section-one-header-div">
        <div className="solution-section-one-header-left-div">
          <span className="solution-section-one-header-left-div-category">
            Solutions
          </span>
          <h1>Cloud Optimization Engine</h1>
          <h3 className="solution-section-one-header-left-div-meta-label">
            Category
          </h3>
          <h3>Cloud</h3>
          <h3 className="solution-section-one-header-left-div-meta-label">
            Published
          </h3>
          <h3>DEC 5, 2024</h3>
        </div>

        <div className="solution-section-one-header-right-div">
          <p>
            Unlock the true potential of your cloud infrastructure with the
            Cloud Optimization Engine. Seamlessly balance performance and cost,
            ensuring your resources scale intelligently and efficiently — all
            while staying ahead of demand.
          </p>
        </div>
      </div>

      <div className="solution-section-one-image-div">
        <Image
          src="https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
          alt="Solutions Overview"
          layout="responsive"
          width={800}
          height={400}
          priority
        />
      </div>
    </div>
  );
}
