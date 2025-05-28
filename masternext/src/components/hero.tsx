import React from "react";
import Image from "next/image";
import herobg from "public/minimal-gym-dark-background.webp";
const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image src={herobg} alt="herobg" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      <div className="  flex items-center justify-center pt-64">
        <h1 className="text-6xl font-bold text-white"> welcome to gym</h1>
      </div>
    </div>
  );
};

export default Hero;
