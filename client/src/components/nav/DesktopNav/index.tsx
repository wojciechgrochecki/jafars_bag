import SearchBar from "@/components/ui/SearchBar";
import SiteLogo from "@assets/logo.svg?react";
import { useMediaQuery } from "usehooks-ts";

function DesktopNav() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (!isDesktop) return false;

  return (
    <nav className="sticky right-0 top-0 z-50 flex h-14 w-full items-center justify-between border border-slate-300 bg-white py-2 lg:px-16">
      <SiteLogo />
      <SearchBar />
    </nav>
  );
}

export default DesktopNav;
