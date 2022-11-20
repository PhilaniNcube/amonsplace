import {motion,  MotionConfig, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { images } from "../pages";

const LoungeDetails = () => {

  let [index, setIndex] = useState(0)

  return (
    <section className="grid grid-cols-2" id="living-room">
      <div className="col-span-2 md:col-span-1 overflow-hidden">
        <MotionConfig transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}>
          <div className="bg-black">
            <div className="w-full">
              <div className="relative h-full overflow-hidden">
                <motion.div
                  animate={{ x: `-${index * 100}%` }}
                  className="flex"
                >
                  {images.lounge.map((item, i) => (
                    <Image
                      key={i}
                      src={item.src}
                      alt="Image"
                      width={item.width}
                      height={item.height}
                      className="aspect-video object-cover w-full h-full"
                    />
                  ))}
                </motion.div>
                <AnimatePresence initial={false}>
                  {index > 0 && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0, pointerEvents: "none" }}
                      animate={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                      onClick={() => setIndex(index - 1)}
                    >
                      <ChevronLeftIcon className="h-6 w-6 bg-blue-500 rounded-full text-white" />
                    </motion.button>
                  )}
                </AnimatePresence>
                <AnimatePresence initial={false}>
                  {index + 1 < images.lounge.length && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0, pointerEvents: "none" }}
                      animate={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                      onClick={() => setIndex(index + 1)}
                    >
                      <ChevronRightIcon className="h-6 w-6 bg-blue-500 rounded-full text-white" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </MotionConfig>
      </div>{" "}
      <div className="col-span-2 md:col-span-1 p-10 md:p-20 flex flex-col justify-center">
        <h2 className="text-2xl font-medium uppercase">Spacious Lounge/Living Room</h2>
        <ul className="text-slate-700 text-lg list-disc">
          <li>Flat Screen TV</li>
          <li>WiFi 24/7</li>
          <li>Satelitte TV Channels</li>
        </ul>
      </div>
    </section>
  );
};
export default LoungeDetails;
