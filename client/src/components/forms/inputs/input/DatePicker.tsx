import * as React from "react";
import { format } from "date-fns";
import { IconCalendarPlus, IconCalendarCheck } from "@tabler/icons-react";
import { pl } from "date-fns/locale";
import { cn } from "@/utils/cn";
import { Button } from "@components/buttons/index";
import { Calendar } from "@/components/Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover";
import { Input } from ".";

interface DatePickerProps {
  allowTimeSelect?: boolean;
}

export function DatePicker({ allowTimeSelect = true }: DatePickerProps) {
  const [date, setDate] = React.useState<Date>();

  const setTime = (value: string, kind: "H" | "M") => {
    const newDate = new Date(date!);
    kind == "H" ? newDate.setHours(+value) : newDate.setMinutes(+value);
    setDate(newDate);
  };

  const setDateAndPersistTime = (newDate: Date | undefined) => {
    if (date) {
      newDate?.setHours(date.getHours(), date.getMinutes());
    }
    setDate(newDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"comment"}
          className={cn(
            "w-fit min-w-[220px] justify-start text-left font-normal text-accent-light",
            !date && "text-slate-500",
          )}
        >
          {date ? (
            <IconCalendarCheck className="mr-2 h-5 w-5 stroke-[1.5]" />
          ) : (
            <IconCalendarPlus className="mr-2 h-5 w-5 stroke-[1.5]" />
          )}
          {date ? (
            format(date, allowTimeSelect ? "PP HH:mm" : "PP", {
              locale: pl,
            })
          ) : (
            <span className="block">Wybierz datę</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col p-0">
        <div className="flex flex-col">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDateAndPersistTime}
            initialFocus
          />
          {allowTimeSelect && (
            <div className="flex items-center gap-2 px-5 pb-2">
              <Input
                type="number"
                step={1}
                min={0}
                max={23}
                className="h-9 w-0 flex-1"
                placeholder="12"
                defaultValue={date?.getHours()}
                onChange={(e) => setTime(e.target.value, "H")}
                disabled={!date}
              />
              <span className="text-slate-400">:</span>
              <Input
                type="number"
                step={1}
                min={0}
                max={59}
                className="h-9 w-0 flex-1"
                placeholder="00"
                defaultValue={date?.getMinutes()}
                onChange={(e) => setTime(e.target.value, "M")}
                disabled={!date}
              />
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
