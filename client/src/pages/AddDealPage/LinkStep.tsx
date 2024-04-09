import TypographyH2 from "@/components/Typography/TypographyH2";
import { Button } from "@/components/buttons";
import { Label } from "@/components/forms/Label";
import { Input } from "@/components/forms/inputs/input";
import { IconLink } from "@tabler/icons-react";

export default function LinkStep() {
  return (
    <div className="flex flex-col items-center gap-8 pb-20">
      <header>
        <TypographyH2 className="text-center">Link</TypographyH2>
        <p className="font-base mt-2 text-center text-slate-500">
          Podaj link do prowadzący do dodawanej okazji lub informacji o niej
        </p>
      </header>
      <main className="w-full">
        <form action="" className="h-full">
          <div className="space-y-1">
            <Label htmlFor="deal_link">
              Link do okazji
              <span className="ml-1 font-normal text-slate-400">
                (opcjonalne)
              </span>
            </Label>
            <div className="relative">
              <Input
                id="deal_link"
                placeholder="https://link/do/twojej/okazji..."
                className="pl-11"
              />
              <span className="pointer-events-none absolute left-3 top-0 flex h-full items-center">
                <IconLink className="h-6 w-6 cursor-text text-slate-400" />
              </span>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 z-50 w-full border border-slate-300 bg-white p-4">
            <Button type="submit" className="h-fit w-full py-3">
              Następny krok
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
