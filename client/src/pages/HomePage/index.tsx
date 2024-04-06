import OfferExcerpt from "@components/Offer/OfferExcerpt";

function HomePage() {
  return (
    <main className="flex min-h-full w-full flex-col gap-3 px-4 py-2">
      <OfferExcerpt />
      <OfferExcerpt />
      <OfferExcerpt />
      <OfferExcerpt />
    </main>
  );
}

export default HomePage;
