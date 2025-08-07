"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MenuOutlined,
  CloseOutlined,
  HomeOutlined,
  CalendarOutlined,
  ThunderboltOutlined,
  ProfileOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Logo from "../../../public/images/loggoo.png";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isHover, setIsHover] = useState(false);

  const tabs = [
    { name: "Home", path: "/", icon: <HomeOutlined className="text-3xl" /> },
    {
      name: "Pre-Book",
      path: "/prebook",
      icon: <CalendarOutlined className="text-3xl" />,
    },
    {
      name: "Book Now",
      path: "/book-now",
      icon: <ThunderboltOutlined className="text-3xl" />,
    },
    {
      name: "My Bookings",
      path: "/my-bookings",
      icon: <ProfileOutlined className="text-3xl" />,
    },
  ];

  const isActive = (p) =>
    pathname === p ? "shadow-sm after:w-3/4" : "text-white bg-gray-200/85";

  const tabBase =
    "relative group inline-flex h-[90%] sm:h-full self-end items-center px-3 py-2  rounded-full text-black font-medium transition-[transform,background,color,box-shadow] duration-200 ease-out";
  const tabHover =
    "hover:scale-105 hover:shadow-sm hover:-translate-y-[1px] hover:bg-white hover:shadow-[0_1px_10px_rgba(0,0,0,0.05)] ";
  const tabUnderline = "bg-white";
  // "after:content-[''] after:absolute after:left-1/2 after:bottom-5 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-white after:transition-[width] after:duration-200 hover:after:w-3/4";

  return (
    <>
      <nav
        className={`relative top-10 mx-[5%] lg:mx-14 mb-6 z-10 rounded-none transition-all duration-500 ease-in-out border-b-2 !border-[#e9967a] bg-[#a9a9a9]/90`}
      >
        <div
          className={`mx-auto  h-20 flex justify-between items-center ${
            isHover ? "max-w-[1400px] px-4 sm:px-6 lg:px-8" : "px-5"
          } `}
        >
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3">
            <button
              onClick={() => setIsHover(!isHover)}
              className="!text-white text-xl p-3 bg-orange-200"
              aria-expanded={isHover}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
            >
              <Image
                src={Logo}
                alt="TaxiBook logo"
                className="w-10 h-10 rounded-xl bg-blackGray"
                priority
              />
            </button>
            <span
              className={`text-2xl font-extrabold tracking-tight  text-shadow-amber-100 text-shadow-md inline-block md:hidden
              }`}
            >
              TaxiBook
            </span>
          </Link>

          {/* Desktop Nav */}
          {!isHover && (
            <div className="hidden md:flex items-center gap-4 h-fit">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  href={tab.path}
                  className={`${tabBase} ${tabHover} ${tabUnderline} ${
                    pathname === tab.path ? "!gap-2" : "!gap-0"
                  } ${isActive(tab.path)} `}
                >
                  {/* <span className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 rounded bg-white text-blackGray text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 ${pathname === tab.path && "hidden"}`}>
                    {tab.name }
                  </span> */}
                  <span
                    className="text-blackGray tooltip group-hover:animate-pulse"
                    defaultValue={tab.name}
                  >
                    {tab.icon}
                  </span>
                  <span className={`text-blackGray text-xl font-semibold ${pathname === tab.path ? "block duration-300 ease-linear ":"group-hover:block hidden hover:duration-300 hover:ease-in-out hover:translate-x-1 hover:scale-105 animate-pulse "}`}>{ tab.name }</span>
                </Link>
              ))}
              {/* Contact CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/80 text-white font-semibold shadow-sm
                       transition-[transform,box-shadow,filter] duration-200 ease-out hover:shadow-md hover:-translate-y-[1px] sm:hidden lg:block"
              >
                <PhoneOutlined className="text-3xl" />
                <span>{pathname === "Contact" ? "Contact" : ""}</span>
              </Link>
            </div>
          )}

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden !text-xl ${isHover && "hidden"}`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
          >
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="absolute w-full right-0 md:hidden border-t border-white/40 bg-gradient-to-b from-zinc-500/80 to-zinc-300/80 backdrop-blur"
          >
            <div className="px-4 py-3 space-y-2">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  href={tab.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-white ring-1 ring-black/5 text-slate-900
                            shadow-sm transition hover:shadow-md ${
                              pathname === tab.path
                                ? "outline-2 outline-orange-200/90"
                                : ""
                            }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="font-medium">{tab.name}</span>
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-white font-semibold shadow-sm
                         bg-gradient-to-r from-primary to-primary/45 hover:shadow-md"
              >
                <PhoneOutlined className="text-lg" />
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
      {!isHover && (
        <h1 className="absolute md:inline-block hidden z-10 ml-40 top-12 text-6xl font-extrabold tracking-tight  text-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-50">
          TaxiBook
        </h1>
      )}
    </>
  );
}
