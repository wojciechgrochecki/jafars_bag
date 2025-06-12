import TypographyH4 from "@/components/ui/typography/TypographyH4";
import TypographyP from "@/components/ui/typography/TypographyP";
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
import { Link, useNavigate } from "react-router-dom";

function OfferExcerpt() {
  const navigate = useNavigate();
  return (
    <Link
      to={"/okazja/1"}
      className="grid grid-cols-[auto_1fr_auto_auto] grid-rows-[auto_auto_auto] gap-3 rounded-lg bg-white p-3 shadow-ring lg:max-w-[800px] lg:grid-cols-[auto_auto_1fr_auto] lg:gap-x-4"
    >
      <OfferImg
        imageClassName="lg:w-auto w-full h-full"
        className="max-w-28 lg:col-span-1 lg:row-span-4 lg:flex lg:h-full lg:max-w-52 lg:shrink-0"
      />
      <div className="col-span-3 flex flex-col gap-1">
        <TypographyH4 className="line-clamp-2 ">
          Monitor Dell G2724D Monitor Dell G2724DMonitor Dell G2724D Monitor
          Dell G2724D
        </TypographyH4>
        <PriceInfo normalPrice={900} discountPrice={1099} />
        <EndsIn />
      </div>
      <TypographyP className="hidden lg:col-span-3 lg:col-start-2 lg:row-start-3 lg:line-clamp-2 ">
        Dzięki GPU w architekturze NVIDIA Ampere oraz 12GB pamięci GDDR6, Zotac
        GeForce RTX 3060 Twin Edge OC zapewni Ci wysoką wydajność w grach,
        pozwalając korzystać z technologii takich jak Ray Tracing czy DLSS.
        Dzięki długości około 220mm
      </TypographyP>
      <div className="col-span-4 row-start-2 flex w-full flex-row gap-3 lg:contents">
        <Button className="w-full lg:col-span-2 lg:col-start-3 lg:ml-auto lg:w-fit">
          Sprawdź okazję <IconLink className="h-5 w-5" />
        </Button>
        <AddToFavButton
          onClick={(e) => e.preventDefault()}
          active={false}
          className="lg:col-start-4 lg:row-start-1"
        />
      </div>
      <div className="flex flex-row items-center gap-1 lg:col-start-2 lg:row-start-4">
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
      <Button
        variant={"comment"}
        onClick={(e) => {
          e.preventDefault();
          navigate("okazja/1#komentarze");
        }}
        className="col-start-4 row-start-3 ml-auto h-full w-fit lg:col-start-3 lg:row-start-1"
      >
        <ChatBubbleLeftRightIcon className="h-5 w-5 text-slate-700 lg:col-start-3 lg:row-start-1 lg:block" />
        12
      </Button>
      <VoteButton
        className="col-start-3 row-start-3 lg:col-start-2 lg:row-start-1"
        votesCount={25}
      />
    </Link>
  );
}

export default OfferExcerpt;
