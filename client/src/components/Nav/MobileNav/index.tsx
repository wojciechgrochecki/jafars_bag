import AddOfferButton from "@components/buttons/AddOfferButton";
import { BellIcon, HomeIcon, SearchIcon, UserIcon } from "./NavIcons";
import { NavLink } from "react-router-dom";

function MobileNav() {
  return (
    <>
      <div className="h-24 w-full bg-transparent"></div>
      <nav className="fixed bottom-3 left-3 right-3 flex h-16 flex-row items-center justify-between rounded-[20px] border border-slate-200 bg-white px-3 py-3 shadow-nav">
        <NavLink to="/" end>
          {({ isActive }) => <HomeIcon active={isActive} />}
        </NavLink>
        <SearchIcon />
        <NavLink to="/dodaj-ogloszenie" end className={"contents"}>
          <AddOfferButton />
        </NavLink>
        <BellIcon />
        <NavLink to="/konto">
          {({ isActive }) => <UserIcon active={isActive} />}
        </NavLink>
      </nav>
    </>
  );
}

export default MobileNav;
