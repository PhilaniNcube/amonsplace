import Link from "next/link";
import { pt_serif } from "./Hero";

const Footer = () => {
  return (
    <footer className={`${pt_serif.className} py-6 bg-[#a0916d] text-white`}>
      <div className="flex flex-col md:flex-row w-full justify-between items-center max-w-7xl mx-auto px-4">
        <img
          src="/images/logo-04.svg"
          className="w-36 md:w-56 object-cover"
          alt="logo"
        />
        <Link href="https://athenamedia.co.za">Athena Media &copy;</Link>
        <div>
          <p className="text-center">Book Now</p>
          <Link href="tel:+263772327184" className="text-white">
            +263 77 232 7184
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
