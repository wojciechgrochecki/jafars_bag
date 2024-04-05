import AddOfferButton from "../../buttons/AddOfferButton";
import { BellIcon, HomeIcon, SearchIcon, UserIcon } from "./NavIcons";

function MobileNav() {
  return (
    <nav className="fixed bottom-3 left-3 right-3 flex h-16 flex-row items-center justify-between rounded-[20px] bg-white px-3 py-3 shadow-nav">
      <HomeIcon active />
      <SearchIcon />
      <AddOfferButton />
      <BellIcon />
      <UserIcon />
    </nav>
  );
}

export default MobileNav;
