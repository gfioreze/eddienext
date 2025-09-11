"use client";
import React from "react";
import Image from "next/image";

const GraphicDesign = () => {
  return (
    <section id="graphic-design" className="category-section">
      <h2 className="category-header-1 text-center mb-6">Graphic Design</h2>

      <div className="works-grid">
        <div className="work-box">
          <Image
            src="/assets/GoodisonPark.png"
            alt="Goodison Park"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        <div className="work-box">
          <Image
            src="/assets/Anfield.jpeg"
            alt="Anfield"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        <div className="work-box">
          <Image
            src="/assets/Anfield.jpeg"
            alt="Anfield Repeat"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
};

export default GraphicDesign;