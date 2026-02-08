"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="text-primary-600 h-5 w-5 shrink-0" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="text-primary-600 h-5 w-5 shrink-0" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="text-primary-600 h-5 w-5 shrink-0" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <nav className="border-primary-900 flex flex-col border-r lg:hidden">
        {isOpen ? (
          <button
            className="mx-auto w-full -translate-y-14.5 cursor-pointer lg:hidden"
            onClick={handleToggle}
          >
            ▲
          </button>
        ) : (
          <button
            className="mx-auto w-full -translate-y-14.5 cursor-pointer lg:hidden"
            onClick={handleToggle}
          >
            ▼
          </button>
        )}
        {isOpen && (
          <ul className="-mt-10 flex flex-col items-center gap-5 text-sm md:text-lg lg:h-full lg:gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  className={`hover:bg-primary-900 hover:text-primary-100 text-primary-200 flex items-center font-semibold transition-colors lg:gap-4 lg:px-5 lg:py-3 ${
                    pathname === link.href ? "bg-primary-900" : ""
                  }`}
                  href={link.href}
                >
                  {link.icon}
                  <span className="ml-4 shrink-0">{link.name}</span>
                </Link>
              </li>
            ))}

            <li className="-mt-3 shrink-0">
              <SignOutButton />
            </li>
          </ul>
        )}
      </nav>

      <nav className="border-primary-900 hidden flex-col border-r lg:flex">
        <ul className="flex flex-col text-sm md:text-lg lg:h-full lg:gap-2">
          {navLinks.map((link) => (
            <li key={link.name} className="flex gap-2">
              <Link
                className={`hover:bg-primary-900 hover:text-primary-100 text-primary-200 flex items-center font-semibold transition-colors lg:gap-4 lg:px-5 lg:py-3 ${
                  pathname === link.href ? "bg-primary-900" : ""
                }`}
                href={link.href}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}

          <li className="lg:mt-auto">
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideNavigation;
