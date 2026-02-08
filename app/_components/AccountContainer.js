"use client";

import { useState } from "react";
import SideNavigation from "./SideNavigation";
import SideNavBtn from "./SideNavBtn";

function AccountContainer({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div
      className={`relative grid h-full grid-cols-[0rem_1fr] grid-rows-1 gap-2 transition-all duration-600 lg:gap-12`}
    >
      <SideNavBtn isOpen={isOpen} onToggle={handleToggle} />
      <SideNavigation isOpen={isOpen} onToggle={handleToggle} />
      <div className="py-1">{children}</div>
    </div>
  );
}

export default AccountContainer;
