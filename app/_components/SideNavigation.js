"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideNavBtn from "./SideNavBtn";

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

function SideNavigation({ isOpen }) {
  const pathname = usePathname();
  return (
    <div
      className={`h-full ${isOpen ? "translate-x-0" : " -translate-x-[300%]"} bg-primary-950 z-8 min-w-[13rem] overflow-hidden transition-all duration-600`}
    >
      <nav className="border-primary-900 flex h-full flex-col border-r">
        <ul className="flex h-full flex-col gap-2 text-lg">
          {navLinks.map((link) => (
            <li key={link.name} className="flex gap-2">
              <Link
                className={`hover:bg-primary-900 hover:text-primary-100 text-primary-200 flex items-center gap-4 px-5 py-3 font-semibold transition-colors ${
                  pathname === link.href ? "bg-primary-900" : ""
                }`}
                href={link.href}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}

          <li className="mt-auto">
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNavigation;
