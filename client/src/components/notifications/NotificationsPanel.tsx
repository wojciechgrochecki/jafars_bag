import { IconDots } from "@tabler/icons-react";
import Notification from "./Notification";

const NotificationsPanel = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-y-hidden overflow-x-visible p-3 pt-0">
      <div className="mb-3 flex w-full flex-[0_0_auto] flex-row items-center justify-between bg-slate-100 p-1">
        <span className="text-base text-slate-700">
          <b className="font-medium">4</b> nowe powiadomienia
        </span>
        <button>
          <IconDots className="h-6 w-6 text-slate-700" />
        </button>
      </div>
      <main className="flex h-full flex-[1_1_auto] flex-col gap-3 overflow-y-auto overflow-x-visible p-1">
        <Notification
          date={new Date()}
          type={"message"}
          user={"kubakk11"}
          isNew={true}
        />
        <Notification date={new Date()} type={"offer"} isNew={false} />
        <Notification date={new Date()} type={"exp"} isNew={false} />
        <Notification date={new Date()} type={"offer"} isNew={false} />
        <Notification date={new Date()} type={"exp"} isNew={false} />
        <Notification date={new Date()} type={"offer"} isNew={false} />
        <Notification date={new Date()} type={"exp"} isNew={false} />
        <Notification date={new Date()} type={"offer"} isNew={false} />
      </main>
    </div>
  );
};

export default NotificationsPanel;
