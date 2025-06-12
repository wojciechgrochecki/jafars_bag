import MobileNav from "@/components/nav/MobileNav";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

export default function LayoutWithNav() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <div className="h-full min-h-fit w-full min-w-fit">
      <Outlet />
      {isMobile && <MobileNav />}
    </div>
  );
}
