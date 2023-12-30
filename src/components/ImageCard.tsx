"use client";
import Image from "next/image";
import { AnimatedDiv } from "./AnimatedComponent";
import { useState } from "react";
import Modal from "./Modal";
import { useData } from "@/DataContext";

export interface imageProp {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

interface Prop {
  image: imageProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ImageCard = ({ image, index }: Prop) => {
  const { open, setOpen, setImage } = useData();
  return (
    <>
      <AnimatedDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: index * 0.25,
          ease: "easeInOut",
          duration: 1,
        }}
        viewport={{ amount: 0 }}
        className="max-w-sm rounded relative w-full"
      >
        <div
          className="relative w-full h-52"
          onClick={() => {
            setImage(image);
            setOpen(true);
          }}
        >
          {image.download_url ? (
            <Image
              src={image.download_url}
              alt={image.author}
              fill
              className="rounded-xl"
            />
          ) : (
            <div className="w-[80%] flex justify-center items-center mx-auto h-48 bg-gray-400 rounded-md " />
          )}
        </div>
        <div className="py-4 flex flex-col gap-3">
          <div className="flex justify-between items-center gap-1">
            <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
              {image.author}
            </h2>
          </div>
        </div>
      </AnimatedDiv>

      {open && (
        <>
          <Modal />
        </>
      )}
    </>
  );
};

export default ImageCard;
