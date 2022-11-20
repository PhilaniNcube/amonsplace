import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-6">
        <div className="col-span-6 md:col-span-3 p-12 lg:p-24 align-baseline flex flex-col justify-center">
          <h1 className="text-white font-medium tracking-widest text-3xl md:text-5xl max-w-[20ch] uppercase">
            Your home away from home
          </h1>
          <p className="text-white pr-8 lg:pr-20 text-lg mt-">
            Amon's Place is a family run guesthouse located in the leafy suburb
            of Mount Pleasant Harare.
          </p>
        </div>
        <div className="relative hidden md:flex md:col-span-3 isolate overflow-hidden">
          <Image
            src="/images/exterior-front.jpg"
            alt="Hero"
            className="w-full object-cover aspect-video max-h-[70vh]"
            width={3600}
            height={2400}
          />

        </div>
      </div>
    </section>
  );
};
export default Hero;
