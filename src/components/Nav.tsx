"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function Nav() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const [showMenu, setShowMenu] = useState(
    window !== undefined ? !isMobile : true
  );
  const pathName = usePathname();

  useEffect(() => {
    setShowMenu(isMobile ? false : true);
  }, [isMobile]);

  return (
    <div className="sticky top-0 z-20">
      <div className="py-2 bg-red-600 w-full">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <span className="flex text-white text-xs lg:text-sm">
            <Image
              src="/phone.svg"
              alt="Telephone icon"
              width={20}
              height={20}
            />
            <a className="mx-2 font-bold" href="tel:07540586726">
              07540 586726
            </a>
          </span>
          <span className="flex text-white text-xs lg:text-sm">
            <Image src="/email.svg" alt="Email icon" width={20} height={20} />
            <a
              className="mx-2 font-bold"
              href="mailto: contact@stalonebjj.co.uk"
            >
              contact@stalonebjj.co.uk
            </a>
          </span>
        </div>
      </div>
      <nav className="bg-gray-900 py-4 border-b-2 border-red-600">
        <div className="container flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 text-white">
            <a
              className={`font-semibold text-xl tracking-tight ${
                pathName === "/" ? "text-red-600" : ""
              }`}
              href="/"
            >
              <Image
                alt="Stalone BJJ logo"
                className="rounded bg-white border border-red-600"
                height={40}
                src="/thumbnail_stalone-header.png"
                width={178}
              />
            </a>
          </div>
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center text-blue-600 p-2"
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
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow"></div>
              <div>
                <a
                  href="/"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
                    pathName === "/" ? "text-red-600" : "text-white"
                  }`}
                >
                  Home
                </a>
                <a
                  href="/about-us"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
                    pathName === "/about-us" ? "text-red-600" : "text-white"
                  }`}
                >
                  About Us
                </a>
                <a
                  href="/programs"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
                    pathName === "/programs" ? "text-red-600" : "text-white"
                  }`}
                >
                  Programs
                </a>
                {/* <a
                href="/values"
                className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
                  pathName === "/values" ? "text-red-600" : "text-white"
                }`}
              >
                Values
              </a> */}
                <a
                  href="/history"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
                    pathName === "/history" ? "text-red-600" : "text-white"
                  }`}
                >
                  History
                </a>
                <a
                  href="/gallery"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
                    pathName === "/gallery" ? "text-red-600" : "text-white"
                  }`}
                >
                  Gallery
                </a>
                <a
                  href="/schedule"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
                    pathName === "/schedule" ? "text-red-600" : "text-white"
                  }`}
                >
                  Schedule
                </a>
                <a
                  href="/contact-us"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
                    pathName === "/contact-us" ? "text-red-600" : "text-white"
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
