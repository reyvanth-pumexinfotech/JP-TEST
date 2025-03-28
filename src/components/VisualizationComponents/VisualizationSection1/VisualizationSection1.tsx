"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./VisualizationSection1.css";
import PrimaryButton from "../../PrimaryButton/primaryButton";
import { useCallback } from "react";

export default function VisualizationSection1() {
  return (
    <div className="visualization-section1-div">
      {/* <h1>
        Visualization: Building Engaging, Scalable Designs for a
        <br /> Tech-Driven Future.
      </h1> */}
      <h1>
        ビジュアライゼーション：
        技術主導の未来に、魅力的でスケーラブルなデザインを構築する。
      </h1>
    </div>
  );
}
