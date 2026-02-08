import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        quality={75}
        className="sm:inline-block hidden"
      />
      <Image
        src={logo}
        height="40"
        width="40"
        alt="The Wild Oasis logo"
        quality={75}
        className="inline-block sm:hidden"
      />
      <span className="font-semibold text-primary-100 hidden sm:inline">The Wild Oasis</span>
    </Link>
  );
}

export default Logo;
