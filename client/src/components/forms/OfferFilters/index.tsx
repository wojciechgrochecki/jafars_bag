import { Label } from "@radix-ui/react-label";
import CloseButton from "../../buttons/CloseButton";
import { RadioGroup, RadioGroupItem } from "../inputs/radio";
import { Input } from "../inputs/input";
import { CategorySelect } from "./CategorySelect";
import { Button } from "../../buttons";

export function OfferFilters() {
  return (
    <div className="fixed inset-0 z-[999] bg-slate-50 p-4">
      <div className="flex h-full w-full flex-col space-y-6 overflow-y-auto rounded-xl bg-white p-4 shadow-xl">
        <div className="flex w-full flex-row items-center justify-between">
          <h2 className="text-xl font-medium text-slate-700">Filtry</h2>
          <CloseButton onClick={() => console.log("Clicked!")} />
        </div>
        <form
          className="flex flex-1 flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-medium text-slate-700">Sortuj</h3>
            <RadioGroup defaultValue="newest">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="newest" id="newest" />
                <Label
                  className="cursor-pointer text-sm text-slate-600"
                  htmlFor="newest"
                >
                  najnowsze
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="ending" id="ending" />
                <Label
                  className="cursor-pointer text-sm text-slate-600"
                  htmlFor="ending"
                >
                  kończące się
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="max_discount" id="max_discount" />
                <Label
                  className="cursor-pointer text-sm text-slate-600"
                  htmlFor="max_discount"
                >
                  największa zniżka
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="lowest_price" id="lowest_price" />
                <Label
                  className="cursor-pointer text-sm text-slate-600"
                  htmlFor="lowest_price"
                >
                  cena - najtańsze
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="highest_price" id="highest_price" />
                <Label
                  className="cursor-pointer text-sm text-slate-600"
                  htmlFor="highest_price"
                >
                  cena - najdroższe
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-medium text-slate-700">Cena</h3>
            <div className="flex flex-row gap-6">
              <div>
                <Label
                  className="cursor-pointer text-sm font-medium text-slate-600"
                  htmlFor="price_from"
                >
                  Od
                </Label>
                <div className="relative h-fit w-fit">
                  <span className="absolute flex h-10 select-none items-center pl-4 text-sm font-medium text-slate-300">
                    PLN
                  </span>
                  <Input
                    type="number"
                    id="price_from"
                    className="pl-12 text-right"
                    placeholder="0,00"
                  />
                </div>
              </div>
              <div>
                <Label
                  className="cursor-pointer text-sm font-medium text-slate-600"
                  htmlFor="price_to"
                >
                  Do
                </Label>
                <div className="relative h-fit w-fit">
                  <span className="absolute flex h-10 select-none items-center pl-4 text-sm font-medium text-slate-300">
                    PLN
                  </span>
                  <Input
                    type="number"
                    id="price_to"
                    className="pl-12 text-right"
                    placeholder="0,00"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-medium text-slate-700">Kategorie</h3>
            <div>
              <CategorySelect />
            </div>
          </div>
          <Button className="mt-auto h-10">Zapisz zmiany</Button>
        </form>
      </div>
    </div>
  );
}
