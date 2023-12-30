"use server";

import ImageCard, { imageProp } from "@/components/ImageCard";

export const fetchdata = async (page: number) => {
  const response =
    await fetch(`https://picsum.photos/v2/list?page=${page}&limit=8
    `);

    const data =   await response.json()

    console.log("data",data)

    return data.map((image: imageProp, index: number) => (
        <ImageCard index={index} image={image} />
      ))
};
