import { cn } from "@/utils/cn";
import dummyImg from "@assets/offer_picture.jpg";

interface OfferImgProps extends React.HTMLProps<HTMLDivElement> {
  imageClassName?: string;
}

export default function OfferImg({ imageClassName, className }: OfferImgProps) {
  return (
    <div
      className={cn(
        "flex-shrink-0 cursor-pointer overflow-hidden md:aspect-square md:h-full [&:hover>img]:scale-110",
        className,
      )}
    >
      <img
        src={dummyImg}
        alt="zdjęcie oferty"
        className={cn(
          "h-20 w-20 rounded-[4px] bg-slate-100 object-contain transition hover:scale-105",
          imageClassName,
        )}
      />
    </div>
  );
}
