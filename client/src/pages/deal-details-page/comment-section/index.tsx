import { Button } from "@/components/ui/buttons/Button";
import Comment from "./Comment";
import DealResponse from "./DealResponse";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function CommentSection() {
  const [showResponse, setShowResponse] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const section = document.getElementById(location.hash.slice(1));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div id="komentarze">
      <div className="flex w-full items-center justify-between gap-2 px-4 py-4 text-base font-medium text-slate-800 lg:mt-6 lg:px-0">
        <span>
          Komentarze
          <span className="text-sm font-normal text-slate-700">&nbsp;(12)</span>
        </span>
        <Button variant={"secondary"} onClick={() => setShowResponse(true)}>
          Dodaj komentarz
        </Button>
      </div>
      {showResponse && (
        <div className="mb-4 bg-white p-4 lg:rounded-xl lg:shadow-ring">
          <DealResponse onCancel={() => setShowResponse(false)} />
        </div>
      )}
      <div className="flex flex-col gap-4 bg-white p-4 lg:rounded-xl lg:shadow-ring">
        <Comment />
        <hr className="border-slate-30 last-of-type:hidden" />
        <Comment />
        <hr className="border-slate-30 last-of-type:hidden" />
        <Comment />
        <hr className="border-slate-30 last-of-type:hidden" />
      </div>
    </div>
  );
}
