import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-primary-900 min-h-26 items-center border-b px-8 py-5 text-sm sm:text-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
