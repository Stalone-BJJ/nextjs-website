"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function Nav() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const [showMenu, setShowMenu] = useState(false);
  const pathName = usePathname();
  const currentOffer = false;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowMenu(!isMobile);
    }
  }, [isMobile]);

  const linkInactive =
    "text-zinc-300 hover:text-red-400 transition-colors";
  const linkActive = "text-red-400 font-semibold";

  return (
    <div className="sticky top-0 z-20 shadow-md">
      <div className="py-2.5 bg-zinc-800 border-b border-zinc-700 w-full">
        <div className="container mx-auto flex items-center justify-between flex-wrap gap-y-2">
          <span className="flex text-zinc-200 text-xs lg:text-sm items-center">
            <Image
              src="/phone.svg"
              alt="Telephone icon"
              width={20}
              height={20}
            />
            <a
              className="mx-2 font-bold text-white hover:text-red-400 transition-colors"
              href="tel:07540586726"
            >
              07540 586726
            </a>
          </span>
          <span className="flex text-zinc-200 text-xs lg:text-sm items-center">
            <Image src="/email.svg" alt="Email icon" width={20} height={20} />
            <a
              className="mx-2 font-bold text-white hover:text-red-400 transition-colors"
              href="mailto:contact@stalonebjj.co.uk"
            >
              contact@stalonebjj.co.uk
            </a>
          </span>
        </div>
      </div>
      {currentOffer && (
        <div className="py-2 bg-red-600 w-full">
          <div className="container mx-auto text-white text-xs lg:text-sm text-center">
            <span className="font-bold">New Year&apos;s Offer!</span> Get your
            training included until{" "}
            <span className="font-bold">March 2024</span>. Available both for
            New & Returning Members.
          </div>
        </div>
      )}
      <nav className="bg-zinc-900 py-3 lg:py-4 border-b-2 border-red-600">
        <div className="container flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center flex-shrink-0">
            <a className="font-semibold text-xl tracking-tight" href="/">
              <Image
                alt="Stalone BJJ logo"
                className="rounded bg-white border border-zinc-600 shadow-sm"
                height={40}
                src="/thumbnail_stalone-header.png"
                width={178}
              />
            </a>
          </div>
          <div className="lg:hidden">
            <button
              aria-label="Menu"
              className="navbar-burger flex items-center text-zinc-200 hover:text-red-400 p-2 rounded-md transition-colors"
              onClick={() => setShowMenu(!showMenu)}
            >
              <Image
                src="/hamburger.svg"
                alt="Menu icon"
                width={24}
                height={24}
              />
            </button>
          </div>
          {showMenu && (
            <div className="w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto">
              <div className="text-sm lg:flex lg:flex-row lg:items-center lg:gap-x-1 xl:gap-x-3 lg:flex-wrap lg:justify-end">
                <a
                  href="/"
                  className={`block mt-4 lg:inline-block lg:mt-0 py-1 px-1 rounded ${
                    pathName === "/" ? linkActive : linkInactive
                  }`}
                >
                  Home
                </a>
                <a
                  href="/schedule"
                  className={`block mt-4 lg:inline-block lg:mt-0 py-1 px-1 rounded ${
                    pathName === "/schedule" ? linkActive : linkInactive
                  }`}
                >
                  Timetable
                </a>
                <a
                  href="/about-us"
                  className={`block mt-4 lg:inline-block lg:mt-0 py-1 px-1 rounded ${
                    pathName === "/about-us" ? linkActive : linkInactive
                  }`}
                >
                  About Us
                </a>
                <a
                  href="/programs"
                  className={`block mt-4 lg:inline-block lg:mt-0 py-1 px-1 rounded ${
                    pathName === "/programs" ? linkActive : linkInactive
                  }`}
                >
                  Programs
                </a>
                <a
                  href="/gallery"
                  className={`block mt-4 lg:inline-block lg:mt-0 py-1 px-1 rounded ${
                    pathName === "/gallery" ? linkActive : linkInactive
                  }`}
                >
                  Gallery
                </a>
                <a
                  href="/contact-us"
                  className={`block mt-4 lg:inline-block lg:mt-0 py-1 px-1 rounded ${
                    pathName === "/contact-us" ? linkActive : linkInactive
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
