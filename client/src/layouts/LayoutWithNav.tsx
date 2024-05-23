import MobileNav from "@/components/nav/MobileNav";
import { Outlet } from "react-router-dom";

export default function LayoutWithNav() {
  return (
    <div className="h-full min-h-fit w-full min-w-fit">
      <Outlet />
      <MobileNav />
    </div>
  );
}
