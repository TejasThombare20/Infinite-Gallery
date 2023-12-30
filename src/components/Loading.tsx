"use client";

import { fetchdata } from "@/services/fetchData";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import ImageCard, { imageProp } from "./ImageCard";
import Skeleton from "./Skeleton";

let page = 2;

export type ImageCard = JSX.Element;

const Loading = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<ImageCard[]>([]);

  useEffect(() => {
    if (inView) {
      fetchdata(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data ? data : <Skeleton/> }
      </section>

      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src={"./Loader.svg"}
            alt="Loader"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Loading;
