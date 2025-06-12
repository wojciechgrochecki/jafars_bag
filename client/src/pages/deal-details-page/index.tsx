import { useParams } from "react-router-dom";
import DealLocalNav from "./DealLocalNav";
import Carousel from "./carousel";
import ExpiryBanner from "./ExpiryBanner";
import TypographyH4 from "@/components/ui/typography/TypographyH4";
import TypographyP from "@/components/ui/typography/TypographyP";
import PriceInfo from "@/components/offer/PriceInfo";
import VoteButton from "@/components/offer/VoteButton";
import { IconCalendarClock, IconLink } from "@tabler/icons-react";
import { Button } from "@/components/ui/buttons/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import CommentSection from "./comment-section";

function DealPage() {
  const { _id } = useParams();

  return (
    <main className="flex min-h-full w-full max-w-[1100px] flex-col bg-slate-100 pb-4 lg:mx-auto">
      <div className="contents overflow-hidden rounded-xl lg:grid lg:grid-cols-4 lg:rounded-xl lg:bg-white lg:shadow-ring">
        <DealLocalNav className="lg:col-span-4 lg:col-start-1" />
        <Carousel className="lg:col-span-2 lg:col-start-1 lg:row-start-3 lg:w-full lg:self-center" />
        <ExpiryBanner className="lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:mb-2" />
        <section className="flex flex-col gap-4 bg-white p-4 lg:col-span-2 lg:col-start-3 lg:row-start-3">
          <div className="grid-cols-[1fr_auto] lg:grid">
            <TypographyH4 className="lg:col-span-2 lg:mb-2 lg:mt-4 lg:text-2xl lg:font-semibold">
              Zotac GeForce RTX 3060 Twin Edge OC LHR 12GB GDDR6
            </TypographyH4>
            <span className="mt-1 flex flex-row items-center gap-1 text-sm text-slate-500 lg:col-start-2 lg:row-start-1 lg:self-center">
              <IconCalendarClock className="h-4 w-4" /> dodano 12 kw.
            </span>
            <div className="mt-1 flex w-full flex-row items-center justify-between lg:contents">
              <PriceInfo normalPrice={900} discountPrice={1099} />
              <VoteButton
                votesCount={5}
                className="lg:col-start-1 lg:row-start-1 lg:my-auto lg:self-center"
              />
            </div>
          </div>
          <Button className="h-fit w-full py-3 text-base font-medium">
            Sprawdź okazję <IconLink className="h-5 w-5 stroke-2" />
          </Button>
          <div className="lg:hidden">
            <h5 className="mb-1 font-semibold text-slate-700">Opis</h5>
            <TypographyP className="lg:hidden">
              Dzięki GPU w architekturze NVIDIA Ampere oraz 12GB pamięci GDDR6,
              Zotac GeForce RTX 3060 Twin Edge OC zapewni Ci wysoką wydajność w
              grach, pozwalając korzystać z technologii takich jak Ray Tracing
              czy DLSS. Dzięki długości około 220mm
            </TypographyP>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Avatar>
              <AvatarImage src={import.meta.env.VITE_DEFAULT_AVATAR_PATH} />
              <AvatarFallback delayMs={500}>AV</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start gap-1">
              <span className="text-sm font-medium leading-[14px] text-slate-700">
                roberto123
              </span>
              <span className="flex flex-row items-center gap-1 text-sm text-slate-500">
                dołączył w 2023r.
              </span>
            </div>
          </div>
        </section>
        <div className="hidden px-4 pb-4 lg:col-span-4 lg:row-start-4 lg:block">
          <h5 className="mb-1 font-semibold text-slate-700">Opis</h5>
          <TypographyP>
            Dzięki GPU w architekturze NVIDIA Ampere oraz 12GB pamięci GDDR6,
            Zotac GeForce RTX 3060 Twin Edge OC zapewni Ci wysoką wydajność w
            grach, pozwalając korzystać z technologii takich jak Ray Tracing czy
            DLSS. Dzięki długości około 220mm
          </TypographyP>
        </div>
      </div>
      <CommentSection />
    </main>
  );
}

export default DealPage;
