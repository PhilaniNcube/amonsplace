import Image from "next/image";
import Link from "next/link";

const Navbar = ({setOpen, open}: {setOpen: (arg0:boolean) => void, open:boolean}) => {

  const links = [
    {
      href:'#bedroom',
      title: 'Bedroom'
    },
    {
      href:'#kitchen',
      title: 'Kitchen'
    },
    {
      href:'#living-room',
      title: 'Living Room'
    },

  ]

  return (
    <header className="py-4 md:py-8 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Image
          src="/images/logo-01.svg"
          width={494}
          height={134}
          alt="logo"
          className=" w-40 md:w-56 object-cover"
        />

        <nav className="space-x-4 text-black uppercase hidden">
          {links.map((link, i) => (
            <Link key={i} href={link.href} className="text-lg font-medium">
              {link.title}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setOpen(true)}
          className="bg-[#a0916d] tracking-wider text-white rounded-full font-medium uppercase px-8 py-1 min-w-fit max-w-xl"
        >
          Book Now
        </button>
      </div>
    </header>
  );
};
export default Navbar;
