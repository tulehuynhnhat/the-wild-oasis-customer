import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth(); // its using in navigation, make route have navigation dynamic bc it work with cookies and headers

  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-4 sm:gap-8 md:gap-16">
        <li className="h-full">
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 ml-2 flex items-center gap-2 transition-colors"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span className="hidden sm:inline">Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
