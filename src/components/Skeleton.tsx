import React from "react";
import { AnimatedDiv } from "./AnimatedComponent";

const Skeleton = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <AnimatedDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 1,
        ease: "easeInOut",
        duration: 1,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full border border-slate-700"
    >
      <div className="relative w-full h-52 ">
        <div className="w-[80%] flex justify-center items-center mx-auto h-48 bg-gray-400 rounded-md animate-pulse " />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="w-[80%] flex justify-center items-center mx-auto bg-gray-400 rounded-md h-4 animate-pulse"/>
            
          
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Skeleton;
