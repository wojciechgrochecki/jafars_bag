import { IconStar } from "@tabler/icons-react";
import { cn } from "@/utils/cn";
import { Button } from ".";

interface Props {
  active: boolean;
}

export default function AddToFavButton({ active }: Props) {
  return (
    <Button size="icon" variant="secondary" className="group">
      <IconStar
        className={cn(
          "stroke-accent stroke-[1.5] transition group-hover:scale-[1.15] group-hover:fill-accent",
          {
            "fill-accent": active,
          },
        )}
      />
    </Button>
  );
}
