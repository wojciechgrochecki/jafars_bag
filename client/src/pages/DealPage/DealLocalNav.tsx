import AddToFavButton from "@/components/ui/buttons/AddToFavButton";
import { IconChevronLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function DealLocalNav() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-between gap-3 bg-white px-4 py-3 pl-2 shadow-ring">
        <button
          className="group flex flex-row items-center text-lg font-medium text-slate-700"
          role="link"
          onClick={() => navigate(-1)}
        >
          <IconChevronLeft className="h-6 w-6 text-slate-500 transition group-hover:-translate-x-1" />
          Wróć
        </button>
        <AddToFavButton active={false} />
      </nav>
      <div className="invisible h-16 w-full"></div>
    </>
  );
}
