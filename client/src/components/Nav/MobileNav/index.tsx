import AddOfferButton from "@components/buttons/AddOfferButton";
import { BellIcon, HomeIcon, SearchIcon, UserIcon } from "./NavIcons";
import { useLocation, NavLink } from "react-router-dom";

const forbiddenPaths = ["/okazja/", "/another-path/", "/yet-another-path/"];

function MobileNav() {
  const location = useLocation();

  const isHidden = forbiddenPaths.some((path) =>
    location.pathname.startsWith(path),
  );
  console.log(isHidden);

  return (
    <>
      {!isHidden && (
        <>
          <div className="h-24 w-full bg-transparent"></div>
          <nav className="fixed bottom-3 left-3 right-3 flex h-16 flex-row items-center justify-between rounded-[20px] bg-white px-3 py-3 shadow-nav">
            <NavLink to="/" end>
              {({ isActive }) => <HomeIcon active={isActive} />}
            </NavLink>
            <SearchIcon />
            <AddOfferButton />
            <BellIcon />
            <NavLink to="/konto">
              {({ isActive }) => <UserIcon active={isActive} />}
            </NavLink>
          </nav>
        </>
      )}
    </>
  );
}

export default MobileNav;
