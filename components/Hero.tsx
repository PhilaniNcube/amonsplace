import Image from "next/image";
import { PT_Serif } from '@next/font/google'

export const pt_serif = PT_Serif({
  weight: ["400", "700"],
  display: "swap",
  subsets: ['latin']
})

const Hero = () => {
  return (
    <section className={`${pt_serif.className} relative isolate`}>
      <Image
        src="/images/exterior-front.jpg"
        alt="Hero"
        className="w-full object-cover aspect-video h-screen"
        width={3600}
        height={2400}
        priority
      />
      <div className="absolute inset-0 z-10 bg-slate-700/40">
        <div className="h-full items-center flex flex-col justify-center">
          <h1 className="text-white font-bold text-center tracking-widest text-4xl md:text-5xl lg:text-7xl max-w-[20ch] ">
            Your home <br /> <span className={`${pt_serif.className} font-light`}>away from home</span>
          </h1>
        </div>
        <div className="relative hidden md:flex md:col-span-3 isolate overflow-hidden"></div>
      </div>
    </section>
  );
};
export default Hero;
