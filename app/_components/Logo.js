import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="relative z-10 flex items-center gap-4">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        quality={75}
        className="hidden sm:inline-block"
      />
      <Image
        src={logo}
        height="40"
        width="40"
        alt="The Wild Oasis logo"
        quality={75}
        className="inline-block sm:hidden"
      />
      <span className="text-primary-100 hidden font-semibold sm:inline">
        The Wild Oasis
      </span>
      <span className="absolute top-11 -left-3.5 inline-block w-25 text-[10px] sm:hidden">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
