import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header className="flex justify-center items-center  sm:p-16 py-16 px-8   max-lg:flex-col w-full sm:gap-16 gap-0  bg-cover bg-center bg-no-repeat">
      <div className="flex-1 flex  flex-col gap-10 ">
        <h1 className="font-bold text-3xl sm:text-7xl tracking-tighter  leading-[125%] ">
          Infinite Gallery
        </h1>

        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Expore the <span className="text-red-500">Diverse Realm </span> of
          Lorem Picsum
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[60vh] justify-center bg-hero bg-cover bg-center bg-no-repeat rounded-md">
        <Image 
        src={"/Hero.svg"}
        alt="image"
        fill
        className="object-contain"/>
      </div>
    </header>
  );
};

export default Hero;
