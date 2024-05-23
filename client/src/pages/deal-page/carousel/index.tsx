import useEmblaCarousel from "embla-carousel-react";
import DealImg1 from "@assets/deal1.jpg";
import DealImg2 from "@assets/deal2.jpg";
import DealImg3 from "@assets/deal3.jpg";
import { DotButton, useDotButton } from "./DotButton";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="h-fit w-full bg-white">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex h-64 touch-pan-y">
          <div className="flex h-full flex-[0_0_100%] justify-center p-3">
            <img
              src={DealImg1}
              className="flex h-full w-auto min-w-0 overflow-hidden rounded-md border-none object-contain"
            />
          </div>
          <div className="flex h-full flex-[0_0_100%] justify-center p-3">
            <img
              src={DealImg2}
              className="flex h-full w-auto min-w-0 overflow-hidden rounded-md border-none object-contain"
            />
          </div>
          <div className="flex h-full flex-[0_0_100%] justify-center p-3">
            <img
              src={DealImg3}
              className="flex h-full w-auto min-w-0 overflow-hidden rounded-md border-none object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mb-2 flex w-full flex-row items-center justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            active={index === selectedIndex}
          />
        ))}
      </div>
    </div>
  );
}
