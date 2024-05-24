import {
  IconDots,
  IconHourglassOff,
  IconMessage,
  IconTags,
} from "@tabler/icons-react";

interface NotificationProps {
  user?: string;
  date: Date;
  type: "message" | "offer" | "exp";
  isNew: boolean;
}

const Notification = ({ type, ...props }: NotificationProps) => {
  switch (type) {
    case "message":
      return <MessageNotification {...props} />;

    case "offer":
      return <OfferNotification {...props} />;
    case "exp":
      return <ExpiryNotification {...props} />;
  }
};

const MessageNotification = ({
  user,
  date,
  isNew,
}: Omit<NotificationProps, "type">) => {
  return (
    <div
      className={`flex flex-row items-center gap-2 rounded-lg bg-white p-3 shadow-ring ${isNew && "border-l-4 border-accent-light"}`}
    >
      <div className="rounded-full bg-slate-50 p-2 ">
        <IconMessage className="h-6 w-6 flex-shrink-0 text-[#059E92]" />
      </div>
      <div>
        <p className="text-slate-700">
          <b className="font-medium">{user}</b> skomentował Twoje ogłoszenie
        </p>
        <span className="text-xs text-slate-500">12 godzin temu</span>
      </div>
      <IconDots className="ml-auto h-6 w-6 flex-shrink-0 text-slate-700" />
    </div>
  );
};

const ExpiryNotification = ({
  date,
  isNew,
}: Omit<NotificationProps, "type">) => {
  return (
    <div
      className={`flex flex-row items-center gap-2 rounded-lg bg-white p-3 shadow-ring ${isNew && "border-l-4 border-accent-light"}`}
    >
      <div className="rounded-full bg-slate-50 p-2 ">
        <IconTags className="h-6 w-6 flex-shrink-0 text-accent-light" />
      </div>
      <div>
        <p className="text-slate-700">
          Nowa <b className="font-medium">okazja</b> z kategorii, którą
          obserwujesz
        </p>
        <span className="text-xs text-slate-500">12 godzin temu</span>
      </div>
      <IconDots className="ml-auto h-6 w-6 flex-shrink-0 text-slate-700" />
    </div>
  );
};

const OfferNotification = ({
  date,
  isNew,
}: Omit<NotificationProps, "type">) => {
  return (
    <div
      className={`flex flex-row items-center gap-2 rounded-lg bg-white p-3 shadow-ring ${isNew && "border-l-4 border-accent-light"}`}
    >
      <div className="rounded-full bg-slate-50 p-2 ">
        <IconHourglassOff className="h-6 w-6 flex-shrink-0 text-amber-600" />
      </div>
      <div>
        <p className="text-slate-700">
          Twoja okazja <b className="font-medium">wygasła</b>
        </p>
        <span className="text-xs text-slate-500">12 godzin temu</span>
      </div>
      <IconDots className="ml-auto h-6 w-6 flex-shrink-0 text-slate-700" />
    </div>
  );
};

export default Notification;
