import { IconChevronLeft, IconHistory, IconSearch } from "@tabler/icons-react";
import { SearchIcon } from "../nav/MobileNav/NavIcons";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./Dialog";
import Input from "../forms/inputs/Input";
import { useState } from "react";
import CloseButton from "./buttons/CloseButton";
import TypographyH4 from "../typography/TypographyH4";
import OfferImg from "../offer/OfferImg";
import PriceInfo from "../offer/PriceInfo";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <SearchIcon />
      </DialogTrigger>
      <DialogContent
        showDefaultClose={false}
        className="fixed left-0 right-0 top-0 h-screen w-full translate-x-0 translate-y-0 items-start space-y-4 rounded-none bg-white px-4 py-3 data-[state=open]:slide-in-from-top-[100%]"
        animationType="fromTop"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-2">
            <DialogClose className="h-fit w-fit rounded-md p-2 focus:bg-slate-200">
              <IconChevronLeft className="h-6 w-6 text-slate-700" />
            </DialogClose>
            <div className="relative flex h-fit w-fit items-center">
              <IconSearch className="pointer-events-none absolute left-3 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Wyszukaj..."
                className="border-none bg-slate-100 px-[42px]"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <CloseButton
                onClick={() => setSearchValue("")}
                className={`focus absolute right-3 border-none hover:bg-slate-200 ${!searchValue && "hidden"}`}
              />
            </div>
          </div>
          {searchValue.length <= 3 ? <RecentSearches /> : <SearchResults />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const SearchResults = () => {
  return (
    <div>
      <TypographyH4 className="mb-4">Okazje</TypographyH4>
      <div className="space-y-[18px]">
        <SingleSearchResult />
        <SingleSearchResult />
      </div>
    </div>
  );
};

const SingleSearchResult = () => {
  return (
    <div className="flex flex-row gap-3">
      <OfferImg size="w-[70px] aspect-square" />
      <div className="flex flex-col gap-1">
        <TypographyH4 className="line-clamp-2">
          Monitor Dell G2724D Monitor Dell G2724DMonitor Dell G2724D Monitor
          Dell G2724D
        </TypographyH4>
        <PriceInfo normalPrice={1099} discountPrice={900} />
      </div>
    </div>
  );
};

const RecentSearches = () => {
  return (
    <div className="">
      <div className="mb-4 flex flex-row">
        <TypographyH4>Ostatnie wyszukiwania</TypographyH4>
        <button className="ml-auto text-sm text-slate-500">Wyczyść</button>
      </div>
      <div className="flex flex-col gap-4">
        {/* single result below */}
        <div className="flex flex-row items-center gap-4">
          <IconHistory className="pointer-events-none h-6 w-6 text-slate-300" />
          <span className="text-base text-slate-700">Karty graficzne</span>
          <CloseButton className="ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
