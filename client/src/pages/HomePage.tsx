import { OfferFilters } from "@/components/forms/offer-filters";
import OfferExcerpt from "@/components/offer";

function HomePage() {
  return (
    <main className="flex min-h-full w-full flex-col gap-3 px-4 py-2">
      <OfferExcerpt />
      <OfferExcerpt />
      <OfferExcerpt />
      <OfferExcerpt />

      <OfferFilters />
    </main>
  );
}

export default HomePage;
