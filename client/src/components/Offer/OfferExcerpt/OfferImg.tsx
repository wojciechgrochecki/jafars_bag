import dummyImg from "../../../assets/offer_picture.jpg";

export default function OfferImg() {
  return (
    <div className="h-20 w-20 flex-shrink-0 cursor-pointer overflow-hidden [&:hover>img]:scale-110">
      <img
        src={dummyImg}
        alt="zdjęcie oferty"
        className="aspect-square w-20 rounded-[4px] bg-slate-100 object-contain transition hover:scale-105"
      />
    </div>
  );
}
