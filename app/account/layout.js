import SideNavigation from "@/app/_components/SideNavigation";

export default function layout({ children }) {
  return (
    <div className="grid h-full grid-cols-1 grid-rows-[auto_1fr] gap-2 lg:grid-cols-[16rem_1fr] lg:grid-rows-1 lg:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
