import OfferExcerpt from "@/components/offer";
import AccountSubsectionLayout from "./AccountSubsectionLayout";

const SavedDeals = () => {
  return (
    <AccountSubsectionLayout header={"Zapisane okazje"}>
      <div className="flex flex-col gap-4">
        <OfferExcerpt />
        <OfferExcerpt />
        <OfferExcerpt />
        <OfferExcerpt />
        <OfferExcerpt />
      </div>
    </AccountSubsectionLayout>
  );
};

export default SavedDeals;
