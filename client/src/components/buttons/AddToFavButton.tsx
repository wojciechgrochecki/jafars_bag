import { IconStar } from "@tabler/icons-react";
import SecondaryButton from "./SecondaryButton";
import { cn } from "../../utils/cn";

interface Props {
  active: boolean;
}

export default function AddToFavButton({ active }: Props) {
  return (
    <SecondaryButton className="p-[6px] ">
      <IconStar
        className={cn("stroke-accent stroke-[1.5]", {
          "fill-accent": active,
        })}
      />
    </SecondaryButton>
  );
}
