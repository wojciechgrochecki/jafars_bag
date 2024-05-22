import { IconDots } from "@tabler/icons-react";
import AccountSubsectionLayout from "./AccountSubsectionLayout";
import OfferExcerpt from "@/components/Offer/OfferExcerpt";

const MyDeals = () => {
  return (
    <AccountSubsectionLayout header={"Moje okazje"}>
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full flex-row items-center justify-between">
          <span className="text-base text-slate-700">
            <b className="font-medium">3</b> okazje
          </span>
          <button>
            <IconDots className="h-6 w-6 text-slate-700" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <OfferExcerpt />
          <OfferExcerpt />
          <OfferExcerpt />
          <OfferExcerpt />
          <OfferExcerpt />
        </div>
      </div>
    </AccountSubsectionLayout>
  );
};

export default MyDeals;
