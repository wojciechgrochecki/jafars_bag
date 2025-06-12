import { cn } from "@/utils/cn";
import { IconThumbUp, IconThumbDown } from "@tabler/icons-react";
import { useState } from "react";

export interface VoteButtonProps extends React.HTMLProps<HTMLDivElement> {
  votesCount: number;
}

export default function VoteButton({
  votesCount = 15,
  ...props
}: VoteButtonProps) {
  const [selection, setSelection] = useState<number>(0);
  const onButtonClick = (newValue: typeof selection) => {
    setSelection(newValue);
  };
  return (
    <div
      {...props}
      className={cn(
        "flex w-fit items-center justify-center gap-1 rounded-full border border-slate-300 p-[6px]",
        props.className,
      )}
      onClick={(e) => e.preventDefault()}
    >
      {selection !== -1 && (
        <button onClick={() => onButtonClick(1)}>
          <IconThumbUp
            className={`h-6 w-6 stroke-1 text-green-600 hover:fill-green-200 ${selection === 1 && "fill-green-200"}`}
          />
        </button>
      )}
      <span
        className={`leading h-fit text-sm ${selection === 1 && "-order-1"}`}
      >
        {votesCount + selection > 0 && "+"}
        {votesCount + selection}
      </span>

      {selection !== 1 && (
        <button onClick={() => onButtonClick(-1)}>
          <IconThumbDown
            className={`h-6 w-6 stroke-1 text-red-600 hover:fill-red-200 ${selection === -1 && "fill-red-200"}`}
          />
        </button>
      )}
    </div>
  );
}
