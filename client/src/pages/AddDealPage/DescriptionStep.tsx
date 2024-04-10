import TypographyH2 from "@/components/Typography/TypographyH2";
import { Button } from "@/components/buttons";
import { Label } from "@/components/forms/Label";
import { Textarea } from "@/components/forms/inputs/textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormInputs {
  deal_description: string;
}

export default function DescriptionStep() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (_data) => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center gap-8 pb-20">
      <header>
        <TypographyH2 className="text-center">Opis</TypographyH2>
        <p className="font-base mt-2 text-center text-slate-500">
          Powiedz coś od siebie na temat tej okazji
        </p>
      </header>
      <main className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-fit min-h-full space-y-6"
        >
          <div className="space-y-1">
            <Label htmlFor="deal_title">
              Opis
              <span className="ml-1 font-normal text-slate-400">
                (opcjonalne)
              </span>
            </Label>
            <Textarea
              id="deal_description"
              {...register("deal_description")}
              placeholder="Opisz znalezioną okazję własnymi słowami..."
            />
            {errors.deal_description?.message && (
              <p className="text-[12px] text-red-500">
                {errors.deal_description.message}
              </p>
            )}
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
