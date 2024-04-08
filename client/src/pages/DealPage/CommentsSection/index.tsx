import { Button } from "@/components/buttons";
import Comment from "./Comment";
import DealResponse from "./DealResponse";
import { useState } from "react";

export default function CommentSection() {
  const [showResponse, setShowResponse] = useState(false);

  return (
    <section>
      <div className="flex w-full items-center justify-between gap-2 px-4 py-4 text-base font-medium text-slate-800">
        <span>
          Komentarze
          <span className="text-sm font-normal text-slate-700">&nbsp;(12)</span>
        </span>
        <Button variant={"secondary"} onClick={() => setShowResponse(true)}>
          Dodaj komentarz
        </Button>
      </div>
      {showResponse && (
        <div className="mb-4 bg-white p-4">
          <DealResponse onCancel={() => setShowResponse(false)} />
        </div>
      )}
      <div className="flex flex-col gap-4 bg-white p-4">
        <Comment />
        <hr className="border-slate-30 last-of-type:hidden" />
        <Comment />
        <hr className="border-slate-30 last-of-type:hidden" />
        <Comment />
        <hr className="border-slate-30 last-of-type:hidden" />
      </div>
    </section>
  );
}
