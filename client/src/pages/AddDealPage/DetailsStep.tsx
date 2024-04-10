import TypographyH2 from "@/components/Typography/TypographyH2";
import TypographyH3 from "@/components/Typography/TypographyH3";
import { Button } from "@/components/buttons";
import { Label } from "@/components/forms/Label";
import { CategorySelect } from "@/components/forms/OfferFilters/CategorySelect";
import { Input } from "@/components/forms/inputs/input";
import { DatePicker } from "@/components/forms/inputs/input/DatePicker";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormInputs {
  deal_title: string;
  deal_discount_price: number;
  deal_normal_price: number;
  deal_start_date: Date;
  deal_start_hour: string;
  deal_end_date: Date;
  deal_end_hour: string;
  deal_category: string;
}

export default function DetailsStep() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (_data) => {
    navigate("");
  };

  return (
    <div className="flex flex-col items-center gap-8 pb-20">
      <header>
        <TypographyH2 className="text-center">Szczegóły okazji</TypographyH2>
        <p className="font-base mt-2 text-center text-slate-500">
          Podziel się informacjami o dodawanej promocji
        </p>
      </header>
      <main className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-fit min-h-full space-y-6"
        >
          <div className="space-y-1">
            <Label htmlFor="deal_title">
              Tytuł
              <span className="font-normal text-slate-400">*</span>
            </Label>
            <Input
              id="deal_title"
              type="text"
              {...register("deal_title", {
                required: "Tytuł okazji jest wymagany",
              })}
              placeholder="Dobierz odpowiedni tytuł okazji"
            />
            {errors.deal_title?.message && (
              <p className="text-[12px] text-red-500">
                {errors.deal_title.message}
              </p>
            )}
          </div>

          <div className="space-y-3">
            <TypographyH3>
              Cena<span className="font-normal text-slate-400">*</span>
            </TypographyH3>
            <div className="space-y-1">
              <Label htmlFor="deal_discount_price">Cena okazyjna</Label>
              <div className="relative">
                <Input
                  type="number"
                  id="deal_discount_price"
                  placeholder="0,00"
                  className="pl-14"
                  step=".01"
                  {...register("deal_discount_price", {
                    required: "To pole jest wymagane",
                  })}
                />
                <span className="pointer-events-none absolute left-3 top-0 flex h-full items-center text-slate-400">
                  PLN
                </span>
              </div>
              {errors.deal_discount_price?.message && (
                <p className="text-[12px] text-red-500">
                  {errors.deal_discount_price.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="deal_normal_price">Cena przed obniżką</Label>
              <div className="relative">
                <Input
                  type="number"
                  id="deal_normal_price"
                  placeholder="0,00"
                  step=".01"
                  className="pl-14"
                  {...register("deal_normal_price", {
                    required: "To pole jest wymagane",
                  })}
                />
                <span className="pointer-events-none absolute left-3 top-0 flex h-full items-center text-slate-400">
                  PLN
                </span>
              </div>
              {errors.deal_normal_price?.message && (
                <p className="text-[12px] text-red-500">
                  {errors.deal_normal_price.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <TypographyH3>
              Czas trwania
              <span className="ml-1 text-sm font-normal text-slate-400">
                (opcjonalne)
              </span>
            </TypographyH3>
            <div className="flex w-full flex-row flex-wrap gap-4">
              <div className="space-y-1">
                <Label htmlFor="deal_start_date">Data rozpoczęcia</Label>
                <DatePicker />
              </div>
              <div className="space-y-1">
                <Label htmlFor="deal_start_date">Data zakończenia</Label>
                <DatePicker allowTimeSelect={false} />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <TypographyH3>
              Kategoria<span className="font-normal text-slate-400">*</span>
            </TypographyH3>
            <div className="space-y-1">
              <CategorySelect />
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
