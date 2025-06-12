import { IconStar } from "@tabler/icons-react";
import { cn } from "@/utils/cn";
import { Button } from "./Button";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function AddToFavButton({ onClick, active, className }: Props) {
  return (
    <Button
      size="icon"
      variant="secondary"
      onClick={(e) => onClick(e)}
      className={cn("group", className)}
    >
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
