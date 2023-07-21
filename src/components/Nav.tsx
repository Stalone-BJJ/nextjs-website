"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const pathName = usePathname();

  return (
    <div className="sticky top-0 z-10">
      <div className="p-2 bg-red-600 flex items-center w-full justify-between flex-wrap">
        <span className="flex text-white text-sm">
          <Image src="/phone.svg" alt="Telephone icon" width={20} height={20} />
          <a className="mx-2 font-bold" href="tel:07540586726">
            07540 586726
          </a>
        </span>
        <span className="flex text-white text-sm">
          <Image src="/email.svg" alt="Email icon" width={20} height={20} />
          <a className="mx-2 font-bold" href="mailto: contact@stalonebjj.co.uk">
            contact@stalonebjj.co.uk
          </a>
        </span>
      </div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-4 border-b-2 border-red-600">
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
                href="/about-us"
                className={`block mt-4 lg:inline-block lg:mt-0 text-white mr-4 ${
                  pathName === "/about-us" ? "text-red-600" : ""
                }`}
              >
                About Us
              </a>
              <a
                href="/history"
                className={`block mt-4 lg:inline-block lg:mt-0 text-white mr-4 ${
                  pathName === "/history" ? "text-red-600" : ""
                }`}
              >
                History
              </a>
              <a
                href="/schedule"
                className={`block mt-4 lg:inline-block lg:mt-0 text-white mr-4 ${
                  pathName === "/schedule" ? "text-red-600" : ""
                }`}
              >
                Schedule
              </a>
              <a
                href="/gallery"
                className={`block mt-4 lg:inline-block lg:mt-0 text-white mr-4 ${
                  pathName === "/gallery" ? "text-red-600" : ""
                }`}
              >
                Gallery
              </a>
              <a
                href="/contact-us"
                className={`block mt-4 lg:inline-block lg:mt-0 text-white mr-4 ${
                  pathName === "/contact" ? "text-red-600" : ""
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
