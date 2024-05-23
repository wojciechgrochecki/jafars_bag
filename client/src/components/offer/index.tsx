import TypographyH4 from "@/components/typography/TypographyH4";
import TypographyP from "@/components/typography/TypographyP";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/buttons/Button";
import AddToFavButton from "@/components/ui/buttons/AddToFavButton";
import EndsIn from "./EndsIn";
import PriceInfo from "./PriceInfo";
import OfferImg from "./OfferImg";
import { IconLink } from "@tabler/icons-react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { IconCalendarClock } from "@tabler/icons-react";
import VoteButton from "./VoteButton";
import { Link } from "react-router-dom";

function OfferExcerpt() {
  return (
    <Link
      to={"/okazja/1"}
      className="flex flex-col gap-3 rounded-lg bg-white p-3 shadow-ring"
    >
      <div className="flex flex-row gap-2">
        <OfferImg />
        <div className="flex flex-col gap-1">
          <TypographyH4 className="line-clamp-2">
            Monitor Dell G2724D Monitor Dell G2724DMonitor Dell G2724D Monitor
            Dell G2724D
          </TypographyH4>
          <PriceInfo normalPrice={900} discountPrice={1099} />
          <EndsIn />
        </div>
      </div>
      <TypographyP className="line-clamp-2">
        Dzięki GPU w architekturze NVIDIA Ampere oraz 12GB pamięci GDDR6, Zotac
        GeForce RTX 3060 Twin Edge OC zapewni Ci wysoką wydajność w grach,
        pozwalając korzystać z technologii takich jak Ray Tracing czy DLSS.
        Dzięki długości około 220mm
      </TypographyP>
      <div className="flex flex-row gap-3">
        <Button className="w-full">
          Sprawdź okazję <IconLink className="h-5 w-5" />
        </Button>
        <AddToFavButton active={false} />
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
          <Avatar>
            <AvatarImage src={import.meta.env.DEFAULT_AVATAR_PATH} />
            <AvatarFallback delayMs={500}>AV</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm font-medium leading-[14px] text-slate-700">
              roberto123
            </span>
            <span className="flex flex-row items-center gap-1 text-sm text-slate-500">
              <IconCalendarClock className="h-4 w-4" /> 12 kw.
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Button variant={"comment"}>
            <ChatBubbleLeftRightIcon className="h-5 w-5 text-slate-700" />
            12
          </Button>
          <VoteButton />
        </div>
      </div>
    </Link>
  );
}

export default OfferExcerpt;
