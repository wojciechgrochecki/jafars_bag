import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/Dialog";
import { BellIcon } from "../nav/MobileNav/NavIcons";
import { IconChevronLeft } from "@tabler/icons-react";
import NotificationsPanel from "./NotificationsPanel";

const NotificationsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <BellIcon />
      </DialogTrigger>
      <DialogContent
        showDefaultClose={false}
        className="overflow-none fixed left-0 right-0 top-0 grid h-screen w-full translate-x-0 translate-y-0 grid-flow-row grid-rows-[auto_1fr] items-start rounded-none bg-slate-100 p-0"
        animationType="fromTop"
      >
        <nav className="grid h-16 w-full grid-cols-[1fr_auto_1fr] items-center border-b border-slate-200 bg-white px-4 py-2">
          <DialogClose className="h-fit w-fit">
            <IconChevronLeft className="mx-auto h-6 w-6 text-slate-700" />
          </DialogClose>
          <h1 className="text-base font-medium text-slate-700">
            Powiadomienia
          </h1>
        </nav>
        <NotificationsPanel />
      </DialogContent>
    </Dialog>
  );
};

export default NotificationsModal;
