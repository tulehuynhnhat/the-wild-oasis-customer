import SideNavigation from "@/app/_components/SideNavigation";
import AccountContainer from "../_components/AccountContainer";

export default function layout({ children }) {
  return <AccountContainer>{children}</AccountContainer>;
}
