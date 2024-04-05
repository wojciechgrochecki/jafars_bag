import { IconStar } from "@tabler/icons-react";
import { cn } from "../../utils/cn";
import { Button } from ".";

interface Props {
  active: boolean;
}

export default function AddToFavButton({ active }: Props) {
  return (
    <Button size="icon" variant="secondary">
      <IconStar
        className={cn("stroke-accent stroke-[1.5]", {
          "fill-accent": active,
        })}
      />
    </Button>
  );
}
