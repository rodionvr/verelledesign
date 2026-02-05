import Image from "next/image";
import Link from "next/link";

function Footer() {
  const logo =
    "https://res.cloudinary.com/drdbt16fo/image/upload/v1768266677/logo_cai145.png";
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-10 text-center md:text-left">
        {/* Brand */}
        <div className="flex flex-col gap-6 items-center md:items-start">
          <Link href="/">
            <img src={logo} alt="Verelle Studio" className="h-10 w-auto" />
          </Link>

          <div className="space-y-3 text-sm">
            <div className="flex items-baseline gap-2 justify-center md:justify-start">
              <i className="fa-regular fa-at leading-none" />
              <a
                href="mailto:verelledesign@gmail.com"
                className="hover:underline"
              >
                verelledesign@gmail.com
              </a>
            </div>

            <div className="flex items-baseline gap-2 justify-center md:justify-start">
              <i className="fa-solid fa-phone leading-none" />
              <a
                href="https://wa.me/14382207370"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +1 (438) 220-73-70
              </a>
            </div>

            <div className="flex items-baseline gap-2 justify-center md:justify-start">
              <i className="fa-brands fa-instagram leading-none" />
              <Link
                href="https://instagram.com/verelle_design"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>@verelle_design</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 text-sm items-center md:items-center justify-center">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      {/* Meta */}
      <div className="flex justify-center pb-5 items-center text-xs text-gray-500 text-center">
        © 2026 Verelle Studio
      </div>
    </footer>
  );
}

export default Footer;
