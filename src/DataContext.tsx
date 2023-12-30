"use client"

import { type Dispatch, createContext, useContext, useState,type SetStateAction } from "react";
import { imageProp } from "./components/ImageCard";
import ImageCard from "./components/ImageCard";

 interface SettingInterface {
    open : boolean;
    setOpen: Dispatch<SetStateAction< boolean>>
    image : imageProp,
    setImage : Dispatch<SetStateAction<imageProp>>
 }

  const Setting = createContext({} as SettingInterface );
  
  export function DataProvider(props: React.PropsWithChildren) {
      const { children } = props;
      
 
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<any>([]);




  return (
    <Setting.Provider
    value={{ open, setOpen , image , setImage}}>
      {children}
    </Setting.Provider>
  );
}

export function useData(){
    return useContext(Setting)
}
