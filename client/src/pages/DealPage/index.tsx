import { useParams } from "react-router-dom";
import DealLocalNav from "./DealLocalNav";
import Carousel from "./Carousel";
import ExpiryBanner from "./ExpiryBanner";
import TypographyH4 from "@/components/Typography/TypographyH4";
import PriceInfo from "@/components/Offer/PriceInfo";
import VoteButton from "@/components/Offer/VoteButton";
import { IconCalendarClock, IconLink } from "@tabler/icons-react";
import { Button } from "@/components/ui/buttons/Button";
import TypographyP from "@/components/Typography/TypographyP";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import CommentSection from "./CommentsSection";

function DealPage() {
  const { _id } = useParams();

  return (
    <main className="flex min-h-full w-full flex-col bg-slate-100">
      <section className="bg-white">
        <DealLocalNav />
        <Carousel />
        <ExpiryBanner />
      </section>
      <section className="flex flex-col gap-4 bg-white p-4">
        <div>
          <TypographyH4>
            Zotac GeForce RTX 3060 Twin Edge OC LHR 12GB GDDR6
          </TypographyH4>
          <span className="mt-1 flex flex-row items-center gap-1 text-sm text-slate-500">
            <IconCalendarClock className="h-4 w-4" /> dodano 12 kw.
          </span>
          <div className="mt-1 flex w-full flex-row items-center justify-between">
            <PriceInfo normalPrice={900} discountPrice={1099} />
            <VoteButton />
          </div>
        </div>
        <Button className="h-fit w-full py-3 text-base font-medium">
          Sprawdź okazję <IconLink className="h-5 w-5 stroke-2" />
        </Button>
        <div>
          <h5 className="mb-1 font-semibold text-slate-700">Opis</h5>
          <TypographyP>
            Dzięki GPU w architekturze NVIDIA Ampere oraz 12GB pamięci GDDR6,
            Zotac GeForce RTX 3060 Twin Edge OC zapewni Ci wysoką wydajność w
            grach, pozwalając korzystać z technologii takich jak Ray Tracing czy
            DLSS. Dzięki długości około 220mm
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
      <CommentSection />
    </main>
  );
}

export default DealPage;
