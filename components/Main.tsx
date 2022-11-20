import Image from "next/image";

const Main = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2">
        <div className="col-span-2 md:col-span-1 p-10 lg:p-24 flex flex-col justify-center">
          <h2 className="font-medium text-black uppercase text-lg md:text-2xl lg:text-5xl">
            Entire cottage hosted by Benedict
          </h2>
          <p className="text-lg my-3 font-semibold">4 guests - 2 bedrooms - 3 beds - 1 bath</p>

          <p className="text-base font-medium mt-2">
            We have self checking available and you will have a private
            entrance. The cottage also has a workspace for you to conduct your
            business with reliable wifi.
          </p>
          <p className="text-base font-medium mt-2">
            We are located in a quiet, safe low-density, in a culdesac/close and
            we are 5km from nearest shopping centre with supermarkets and
            restaurants (Arundel Village).
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 grid grid-cols-2 bg-white gap-2">
          <Image
            src="/images/main-bedroom-2.jpg"
            width={3600}
            height={2400}
            className="w-full aspect-video object-bottom object-cover"
            alt="Main Bedroom"
          />
          <Image
            src="/images/dbl-bedroom-3.jpg"
            width={3600}
            height={2400}
            className="w-full aspect-video object-cover"
            alt="Double Bedroom"
          />
          <Image
            src="/images/bathroom-7.jpg"
            width={2400}
            height={3600}
            className="w-full aspect-video object-center object-cover"
            alt="Double Bedroom"
          />
          <Image
            src="/images/exterior-9.jpg"
            width={3600}
            height={2400}
            className="w-full object-cover aspect-video"
            alt="Double Bedroom"
          />
        </div>
      </div>
    </section>
  );
};
export default Main;
