import TypographyH4 from "../../Typography/TypographyH4";
import AddToFavButton from "../../buttons/AddToFavButton";
import PrimaryButton from "../../buttons/PrimaryButton";
import EndsIn from "../EndsIn";
import PriceInfo from "../PriceInfo";
import OfferImg from "./OfferImg";
import { IconLink } from "@tabler/icons-react";

function OfferExcerpt() {
  return (
    <div className="shadow-ring flex flex-col gap-3 rounded-lg p-3">
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
      <div className="flex flex-row gap-3">
        <PrimaryButton className="w-full">
          Sprawdź okazję <IconLink className="h-5 w-5" />
        </PrimaryButton>
        <AddToFavButton active={false} />
      </div>
    </div>
  );
}

export default OfferExcerpt;
