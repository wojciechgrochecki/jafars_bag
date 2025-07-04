import AddOfferButton from "@/components/ui/buttons/AddOfferButton";
import { HomeIcon, UserIcon } from "./NavIcons";
import { NavLink } from "react-router-dom";
import SearchBar from "@/components/ui/SearchBar";
import Notifications from "@/components/notifications";

function MobileNav() {
  return (
    <>
      <div className="h-24 w-full bg-transparent"></div>
      <nav className="fixed bottom-0 left-0 flex h-[70px] w-full flex-row items-center justify-between border-t border-accent-light/20 bg-white px-4 shadow-nav">
        <NavLink to="/" end>
          {({ isActive }) => <HomeIcon active={isActive} />}
        </NavLink>
        <SearchBar />
        <NavLink to="/dodaj-ogloszenie" end className={"contents"}>
          <AddOfferButton className="relative bottom-1/3 transition hover:scale-110" />
        </NavLink>
        <Notifications />
        <NavLink to="/konto">
          {({ isActive }) => <UserIcon active={isActive} />}
        </NavLink>
      </nav>
    </>
  );
}

export default MobileNav;
