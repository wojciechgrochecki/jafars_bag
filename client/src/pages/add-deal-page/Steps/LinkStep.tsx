import TypographyH2 from "@/components/ui/typography/TypographyH2";
import { Button } from "@/components/ui/buttons/Button";
import Label from "@/components/forms/Label";
import Input from "@/components/forms/inputs/Input";
import { AddDealForm, useFormContext } from "@/context/FormContext";
import { IconLink } from "@tabler/icons-react";
import React, { useImperativeHandle } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StepperRef } from "..";

type FormInputs = Pick<AddDealForm, "deal_link">;

const LinkStep = React.forwardRef<StepperRef>((_props, ref) => {
  const { formState, setFormState, setNextStep } = useFormContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm<FormInputs>({
    defaultValues: { deal_link: formState.deal_link },
  });

  const onSubmit: SubmitHandler<FormInputs> = (formData) => {
    setFormState(formData);
    setNextStep(2);
    navigate("szczegoly");
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        validateAndStep(navigateTo, nextStep) {
          if (!isDirty) {
            setNextStep(nextStep);
            navigate(navigateTo);
          } else {
            handleSubmit((formData) => {
              setFormState(formData);
              setNextStep(nextStep);
              navigate(navigateTo);
            })();
          }
        },
      };
    },
    [isDirty],
  );

  return (
    <div className="flex flex-col items-center gap-8 pb-20">
      <header>
        <TypographyH2 className="text-center">Link</TypographyH2>
        <p className="font-base mt-2 text-center text-slate-500">
          Podaj link do prowadzący do dodawanej okazji lub informacji o niej
        </p>
      </header>
      <main className="w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="h-full" noValidate>
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
                type="url"
                placeholder="https://link/do/twojej/okazji..."
                className="pl-11"
                invalid={!!errors.deal_link}
                {...register("deal_link", {
                  pattern: {
                    value: /^https:\/\//,
                    message: "Link powinien zaczynać się od 'https://'",
                  },
                })}
              />
              <span className="pointer-events-none absolute left-3 top-0 flex h-full items-center">
                <IconLink className="h-6 w-6 cursor-text text-slate-400" />
              </span>
            </div>
            {errors.deal_link?.message && (
              <p className="text-[12px] text-red-600">
                {errors.deal_link.message}
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
});

export default LinkStep;
