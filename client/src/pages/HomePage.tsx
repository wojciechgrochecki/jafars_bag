import { OfferFilters } from "@/components/forms/offer-filters";
import OfferExcerpt from "@/components/offer";

function HomePage() {
  return (
    <main className="flex h-fit w-full flex-col gap-3 overflow-hidden px-4 py-2 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
      <section className="space-y-4">
        <OfferExcerpt />
        <OfferExcerpt />
        <OfferExcerpt />
        <OfferExcerpt />
        <OfferExcerpt />
        <OfferExcerpt />
        <OfferExcerpt />
      </section>

      <OfferFilters />
    </main>
  );
}

export default HomePage;
