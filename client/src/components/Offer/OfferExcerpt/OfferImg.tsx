import dummyImg from "@assets/offer_picture.jpg";

interface OfferImgProps {
  size?: string;
}

export default function OfferImg({ size = "w-20 h-20" }: OfferImgProps) {
  return (
    <div
      className={`${size} flex-shrink-0 cursor-pointer overflow-hidden [&:hover>img]:scale-110`}
    >
      <img
        src={dummyImg}
        alt="zdjęcie oferty"
        className={`${size} rounded-[4px] bg-slate-100 object-contain transition hover:scale-105`}
      />
    </div>
  );
}
