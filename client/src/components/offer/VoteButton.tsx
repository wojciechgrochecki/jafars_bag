import { IconThumbUp, IconThumbDown } from "@tabler/icons-react";
import { useState } from "react";

export default function VoteButton() {
  const [selection, setSelection] = useState<"up" | "down" | undefined>(
    undefined,
  );
  return (
    <div className="flex items-center justify-center gap-1 rounded-full border border-slate-300 p-[6px]">
      {selection !== "down" && (
        <button
          onClick={() => {
            if (selection === undefined) {
              setSelection("up");
            }
          }}
        >
          <IconThumbUp
            className={`h-6 w-6 stroke-1 text-green-600 hover:fill-green-200 ${selection === "up" && "fill-green-200"}`}
          />
        </button>
      )}
      <span className={`leading h-fit text-sm`}>+93</span>
      {selection !== "up" && (
        <button
          onClick={() => {
            if (selection === undefined) {
              setSelection("down");
            }
          }}
        >
          <IconThumbDown
            className={`h-6 w-6 stroke-1 text-red-600 hover:fill-red-200 ${selection === "down" && "fill-red-200"}`}
          />
        </button>
      )}
    </div>
  );
}
