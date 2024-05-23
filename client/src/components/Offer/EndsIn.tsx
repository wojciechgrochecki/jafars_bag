import { ClockIcon } from "@heroicons/react/24/outline";

export default function EndsIn() {
  return (
    <div className="flex flex-row items-center gap-1 ">
      <ClockIcon className="h-5 w-5 text-slate-500" />
      <span className="h-fit text-sm leading-4 text-slate-500">
        pozostało 22 godz.
      </span>
    </div>
  );
}
