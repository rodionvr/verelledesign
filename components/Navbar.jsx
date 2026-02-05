import "../app/globals.css";
import Link from "next/link";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({
  weight: "400",
  subsets: ["latin"],
});

function Navbar() {
  const logo =
    "https://res.cloudinary.com/drdbt16fo/image/upload/v1768266677/logo_cai145.png";

  return (
    <nav className={`{epilogue.className} px-[30px] py-4 font-extralight`}>
      <ul className="flex items-center justify-between list-none m-0 p-0">
        <li>
          <Link href="/">
            <img src={logo} alt="logo" className="h-10" />
          </Link>
        </li>

        <li>
          <ul className="flex gap-6 list-none m-0 p-0 text-[#A99082] text-2xl">
            <li className="relative group">
              <Link href="/" className="relative inline-block">
                HOME
                <span
                  className="absolute left-0 -bottom-2 h-[1px] w-full bg-[#A99082] scale-x-0 origin-right transition-transform duration-700 ease-out group-hover:scale-x-100 group-hover:origin-left"
                />
              </Link>
            </li>

            <li className="relative group">
              <Link href="/services" className="relative inline-block">
                SERVICES
                <span className="absolute left-0 -bottom-2 h-[1px] w-full bg-[#A99082] scale-x-0 origin-right transition-transform duration-700 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              </Link>
            </li>

            <li className="relative group">
              <Link href="/projects" className="relative inline-block">
                PROJECTS
                <span className="absolute left-0 -bottom-2 h-[1px] w-full bg-[#A99082] scale-x-0 origin-right transition-transform duration-700 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              </Link>
            </li>

            <li className="relative group">
              <Link href="/about" className="relative inline-block">
                ABOUT
                <span className="absolute left-0 -bottom-2 h-[1px] w-full bg-[#A99082] scale-x-0 origin-right transition-transform duration-700 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              </Link>
            </li>

            <li className="relative group">
              <Link href="/contact" className="relative inline-block">
                CONTACT
                <span className="absolute left-0 -bottom-2 h-[1px] w-full bg-[#A99082] scale-x-0 origin-right transition-transform duration-700 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
