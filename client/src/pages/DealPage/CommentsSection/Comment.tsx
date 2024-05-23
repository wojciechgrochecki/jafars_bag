import TypographyP from "@/components/Typography/TypographyP";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/buttons/Button";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import CommentResponse from "./CommentResponse";
import { useState } from "react";

export default function Comment() {
  const [showResponse, setShowResponse] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <Avatar className="mr-3 h-9 w-9">
            <AvatarImage src={import.meta.env.VITE_DEFAULT_AVATAR_PATH} />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-slate-800">
              magda_kkk
            </span>
            <span className="text-xs text-slate-500">40 min. temu</span>
          </div>
        </div>
        <div className="flex flex-row items-end gap-1 text-slate-600">
          <span className="font-medium">12</span>
          <FaceSmileIcon className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
      <TypographyP>
        Wow, ta promocja na kartę graficzną naprawdę robi wrażenie! Cena jest
        dobra, zwłaszcza biorąc pod uwagę, ile kosztują te karty normalnie.
      </TypographyP>
      <div className="flex items-center justify-between">
        <Button
          onClick={() => setShowResponse((prev) => !prev)}
          variant={"plain"}
          size={"fit"}
          className="underline"
        >
          {showResponse ? "Anuluj" : "Odpowiedz"}
        </Button>
        <Button variant={"plain"} size={"fit"}>
          Lubię to
        </Button>
      </div>
      {showResponse && (
        <CommentResponse onCancel={() => setShowResponse(false)} />
      )}
    </div>
  );
}
