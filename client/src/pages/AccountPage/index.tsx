import TypographyH3 from "@/components/Typography/TypographyH3";
import TypographyP from "@/components/Typography/TypographyP";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/buttons";
import {
  IconBell,
  IconDotsVertical,
  IconLogout,
  IconMessageCircle,
  IconStar,
  IconTags,
} from "@tabler/icons-react";

const AccountPage = () => {
  return (
    <div className="p-4">
      <div className="relative flex flex-col gap-8 rounded-xl bg-white py-6 shadow-ring">
        <button className="absolute right-[18px] top-5 h-fit w-fit rounded-md p-1 transition hover:bg-slate-100">
          <IconDotsVertical className="h-6 w-6 text-slate-600" />
        </button>
        <div>
          <Avatar className="mx-auto mb-3 h-20 w-20">
            <AvatarImage src={import.meta.env.VITE_DEFAULT_AVATAR_PATH} />
            <AvatarFallback delayMs={500}>AV</AvatarFallback>
          </Avatar>
          <TypographyH3 className="text-center">roberto1223</TypographyH3>
          <TypographyP className="mb-4 text-center">12 kw.2024</TypographyP>
          <div className="flex flex-row items-center justify-center gap-3">
            <div className="flex flex-row items-center gap-2">
              <span className="text-sm font-medium text-slate-700">8</span>
              <IconTags className="h-6 w-6 stroke-[1.5px] text-slate-700" />
            </div>
            <hr className="h-full w-4 rotate-90 bg-slate-200" />
            <div className="flex flex-row items-center gap-2">
              <span className="text-sm font-medium text-slate-700">0</span>
              <IconMessageCircle className="h-6 w-6 stroke-[1.5px] text-slate-700" />
            </div>
            <hr className="h-full w-4 rotate-90 bg-slate-200" />
            <div className="flex flex-row items-center gap-2">
              <span className="text-sm font-medium text-slate-700">3</span>
              <IconBell className="h-6 w-6 stroke-[1.5px] text-slate-700" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 [&>button]:max-w-[250px]">
          <Button variant={"secondary"} className="h-fit w-full px-4 py-3">
            <IconTags className="mr-2 h-5 w-5 text-accent-light" />
            Moje okazje
          </Button>
          <Button variant={"secondary"} className="h-fit w-full px-4 py-3">
            <IconStar className="mr-2 h-5 w-5 text-accent-light" />
            Zapisane
          </Button>
          <hr className="mx-auto h-[2px] w-6 bg-slate-200" />
          <Button className="h-fit w-full border border-rose-900/20 bg-white px-4 py-3 font-normal text-rose-900 hover:bg-rose-50 active:bg-white">
            <IconLogout className="mr-2 h-5 w-5" />
            Wyloguj się
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
