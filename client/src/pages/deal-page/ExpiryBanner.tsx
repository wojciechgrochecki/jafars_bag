import { ClockIcon } from "@heroicons/react/24/outline";

export default function ExpiryBanner() {
  return (
    <div className="w-full bg-white px-4">
      <div className="flex w-full flex-row items-center justify-center gap-1 rounded-md border border-[#FFDBB2] bg-[#FEF7DD] p-3">
        <ClockIcon className="h-5 w-5 text-amber-600" />
        <span className="text-sm font-medium text-amber-600">
          Pozostało 22 godziny do końca okazji
        </span>
      </div>
    </div>
  );
}
