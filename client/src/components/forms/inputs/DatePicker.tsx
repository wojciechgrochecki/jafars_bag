import * as React from "react";
import { format } from "date-fns";
import { IconCalendarPlus, IconCalendarCheck } from "@tabler/icons-react";
import { pl } from "date-fns/locale";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/buttons/Button";
import Calendar from "@/components/ui/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import Input from "./Input";

type DatePickerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  selected: Date | undefined;
  onSelect: (newDate: Date | undefined) => void;
  allowTimeSelect?: boolean;
  invalid?: boolean;
};

const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  ({ selected, onSelect, allowTimeSelect = true, invalid, ...props }, ref) => {
    const setTime = (value: string, kind: "H" | "M") => {
      const newDate = new Date(selected!);
      kind == "H" ? newDate.setHours(+value) : newDate.setMinutes(+value);
      onSelect(newDate);
    };

    const setDateAndPersistTime = (newDate: Date | undefined) => {
      if (selected) {
        newDate?.setHours(selected.getHours(), selected.getMinutes());
      }
      onSelect(newDate);
    };

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant={"comment"}
            className={cn(
              "w-fit min-w-[220px] justify-start text-left font-normal text-accent-light",
              !selected && "text-slate-500",
              invalid && "border-red-600",
            )}
            {...props}
          >
            {selected ? (
              <>
                <IconCalendarCheck className="mr-2 h-5 w-5 stroke-[1.5]" />
                {format(selected, allowTimeSelect ? "PP HH:mm" : "PP", {
                  locale: pl,
                })}
              </>
            ) : (
              <>
                <IconCalendarPlus className="mr-2 h-5 w-5 stroke-[1.5]" />
                <span className="block">Wybierz datę</span>
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col p-0">
          <div className="flex flex-col">
            <Calendar
              mode="single"
              selected={selected}
              onSelect={setDateAndPersistTime}
              disabled={(day) =>
                day.getTime() < new Date().getTime() - 7 * 24 * 60 * 60 * 1000
              }
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
                  value={selected?.getHours() ?? 0}
                  onChange={(e) => setTime(e.target.value, "H")}
                  disabled={!selected}
                />
                <span className="text-slate-400">:</span>
                <Input
                  type="number"
                  step={1}
                  min={0}
                  max={59}
                  className="h-9 w-0 flex-1"
                  placeholder="00"
                  value={selected?.getMinutes() ?? 0}
                  onChange={({ target: { value } }) => {
                    setTime(value, "M");
                  }}
                  disabled={!selected}
                />
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    );
  },
);

export default DatePicker;
