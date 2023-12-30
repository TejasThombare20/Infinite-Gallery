import { AnimatedDiv, AnimatedPresence } from "./AnimatedComponent";
import { useData } from "@/DataContext";

import Image from "next/image";

const Modal = () => {
  const { setOpen, image } = useData();

  return (
    <AnimatedPresence>
      <AnimatedDiv
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
        }}
        className="fixed z-10 h-[100vh] w-[100vw] top-0 left-0  backdrop-blur-sm "
      >
        <AnimatedDiv
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.3,
            },
          }}
          exit={{
            scale: 0,
            transition: {
              duration: 0.3,
            },
          }}
          className="fixed lg:w-[580px] lg:h-[580px] bg-[#0F1117] mx-2  lg:mx-auto top-0 bottom left-0 right-0 p-10 rounded-md border border-slate-200 shadow-md shadow-zinc-700"
        >
          <AnimatedDiv
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.3,
              },
            }}
            exit={{
              x: 100,
              opacity: 0,
              transition: {
                duration: 0.3,
              },
            }}
          ></AnimatedDiv>

          <div className="w-full p-2 flex flex-col gap-4">
            {
              image.download_url ? (<>
               <Image
              src={image.download_url}
              width={580}
              height={580}
              // fill
              alt="image"
              className=" object-cover rounded-md "
            />

              </>) : (
                <>
                <div className="w-[580px] h-[580] bg-slate-400 animate-pulse" >
                                                                   
                </div>
                </>
              )
            }
           
            <div className="flex">
              <div className="text-white/75">Id :</div>
              <h3 className="font-semibold tracking-wide ml-2 ">{image.id}</h3>
            </div>
            <div className="flex">
              <div className="text-white/75">Author :</div>
              <h3 className="font-semibold tracking-wide ml-2 ">
                {image.author}
              </h3>
            </div>

            <div className="flex">
              <div className="text-white/75">Url :</div>
              <h3 className="font-semibold tracking-wide ml-2 font-mono">
                {image.url}
              </h3>
            </div>
            <div className="flex justify-end">
              <button type="reset"
                onClick={() => {
                  setOpen(false);
                }}
                className="font-bold text bg-slate-700 rounded-md px-4 py-2 border border-slate-300" 
              >
                Cancel
              </button>
            </div>
          </div>
        </AnimatedDiv>
      </AnimatedDiv>
    </AnimatedPresence>
  );
};

export default Modal;
