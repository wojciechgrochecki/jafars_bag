import { IconChevronLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";

interface TopMobileNavProps {
  header: string;
}

const TopMobileNav = ({ header }: TopMobileNavProps) => {
  return (
    <nav className="fixed top-0 z-50 grid h-16 w-full grid-cols-[1fr_auto_1fr] items-center border-b border-slate-200 bg-white px-4 py-2">
      <Link relative={"path"} to={".."} className="h-fit w-fit p-2">
        <IconChevronLeft className="mx-auto h-6 w-6 text-slate-700" />
      </Link>
      <h1 className="text-base font-medium text-slate-700">{header}</h1>
    </nav>
  );
};

export default TopMobileNav;
