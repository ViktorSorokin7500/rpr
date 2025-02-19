"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MainImage from "../../../public/gerb.png";
import { Menu, X } from "lucide-react"; // Иконки для бургер-меню

const navmenu = [
  { name: "Новости", href: "/news" },
  { name: "История", href: "/history" },
  { name: "Экономика", href: "/economy" },
  { name: "Контакты", href: "/contacts" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-400 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <Image
            src={MainImage}
            alt="Герб РНР"
            width={96}
            height={96}
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navmenu.map((item, i) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <li key={i}>
                  <Link
                    href={item.href}
                    className={`text-stone-200 hover:text-white text-base font-medium ${
                      isActive ? "underline" : ""
                    } transition-colors`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-200" />
          ) : (
            <Menu className="h-6 w-6 text-gray-200" />
          )}
        </button>
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
            <ul className="flex flex-col items-center space-y-4 py-4">
              {navmenu.map((item, i) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className={`text-gray-800 hover:text-blue-500 text-base font-medium ${
                        isActive ? "underline" : ""
                      } transition-colors`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
