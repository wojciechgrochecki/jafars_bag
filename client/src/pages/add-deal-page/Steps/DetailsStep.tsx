import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyH3 from "@/components/typography/TypographyH3";
import { Button } from "@/components/ui/buttons/Button";
import Label from "@/components/forms/Label";
import { CategorySelect } from "@/components/forms/offer-filters/CategorySelect";
import { Input } from "@/components/forms/inputs/input";
import { DatePicker } from "@/components/forms/inputs/input/DatePicker";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { dummy_categories } from "@/components/forms/offer-filters/CategorySelect";
import { AddDealForm, useFormContext } from "@/context/FormContext";
import React, { useImperativeHandle } from "react";
import { StepperRef } from "..";

type FormInputs = Pick<
  AddDealForm,
  | "deal_title"
  | "deal_discount_price"
  | "deal_normal_price"
  | "deal_start_date"
  | "deal_end_date"
  | "deal_category_id"
>;

const DetailsStep = React.forwardRef<StepperRef>((_props, ref) => {
  const { formState, setFormState, setNextStep } = useFormContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    control,
    formState: { isDirty, errors },
  } = useForm<FormInputs>({
    defaultValues: {
      deal_title: formState.deal_title,
      deal_discount_price: formState.deal_discount_price,
      deal_normal_price: formState.deal_normal_price,
      deal_start_date: formState.deal_start_date,
      deal_end_date: formState.deal_end_date,
      deal_category_id: formState.deal_category_id,
    },
  });

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

  const [discount_price, normal_price] = watch([
    "deal_discount_price",
    "deal_normal_price",
  ]);

  const onSubmit: SubmitHandler<FormInputs> = (formData) => {
    setFormState(formData);
    setNextStep(3);
    navigate("../opis");
  };

  return (
    <div className="flex max-w-lg flex-col items-center gap-8 pb-20">
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
              invalid={!!errors.deal_title}
              {...register("deal_title", {
                required: "Tytuł okazji jest wymagany",
                minLength: {
                  value: 10,
                  message: "Tytuł powinien mieć co najmniej 10 znaków",
                },
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
                  invalid={!!errors.deal_discount_price}
                  {...register("deal_discount_price", {
                    required: "To pole jest wymagane",
                    min: { value: 0, message: "Cena nie może być ujemna" },
                    setValueAs: (v) => {
                      if (v === undefined || v === "" || Number.isNaN(v))
                        return undefined;
                      return parseFloat(v);
                    },
                    validate: (
                      _,
                      { deal_discount_price, deal_normal_price },
                    ) => {
                      if (
                        deal_normal_price != undefined &&
                        deal_discount_price <= deal_normal_price
                      ) {
                        clearErrors("deal_normal_price");
                        return true;
                      } else if (deal_discount_price > deal_normal_price)
                        return "Okazyjna cena powinna być niższa niż zwykła";
                      return true;
                    },
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
                  className="pl-14 pr-20"
                  invalid={!!errors.deal_normal_price}
                  {...register("deal_normal_price", {
                    required: "To pole jest wymagane",
                    min: { value: 0, message: "Cena nie może być ujemna" },
                    setValueAs: (v) => {
                      if (v === undefined || v === "" || Number.isNaN(v))
                        return undefined;
                      return parseFloat(v);
                    },
                    validate: (
                      _,
                      { deal_discount_price, deal_normal_price },
                    ) => {
                      if (
                        deal_discount_price != undefined &&
                        deal_discount_price <= deal_normal_price
                      ) {
                        clearErrors("deal_discount_price");
                        return true;
                      } else if (deal_discount_price > deal_normal_price)
                        return "Zwykła cena powinna być wyższa niż okazyjna";
                      return true;
                    },
                  })}
                />
                <span className="pointer-events-none absolute left-3 top-0 flex h-full items-center text-slate-400">
                  PLN
                </span>
                {discount_price < normal_price && (
                  <span className="pointer-events-none absolute bottom-0 right-1 top-0 my-auto h-fit rounded-md bg-accent-light px-2 py-1 text-sm font-semibold text-white">
                    -
                    {Math.round(
                      ((normal_price - discount_price) / normal_price) * 100,
                    )}
                    %
                  </span>
                )}
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
                <Controller
                  control={control}
                  name="deal_start_date"
                  rules={{
                    validate: {
                      beforeEndDate: (startDate, form) => {
                        if (startDate > form.deal_end_date) {
                          return "Data rozpoczęcia powinna być wcześniejsza niż data zakończenia";
                        }
                        if (form.deal_end_date) clearErrors("deal_end_date");
                      },
                    },
                  }}
                  render={({ field: { onChange, value, ref } }) => (
                    <DatePicker
                      ref={ref}
                      onSelect={onChange}
                      selected={value}
                      invalid={!!errors.deal_start_date}
                    />
                  )}
                />
                <p className="text-[12px] text-red-500">
                  {errors.deal_start_date?.message}
                </p>
              </div>
              <div className="space-y-1">
                <Label htmlFor="deal_end_date">Data zakończenia</Label>
                <Controller
                  control={control}
                  rules={{
                    validate: {
                      afterStartDate: (endDate, form) => {
                        if (endDate < form.deal_start_date)
                          return "Data zakończenia powinna być późniejsza niż data rozpoczęcia";
                        if (form.deal_start_date)
                          clearErrors("deal_start_date");
                      },
                    },
                  }}
                  name="deal_end_date"
                  render={({ field: { onChange, value, ref } }) => (
                    <DatePicker
                      ref={ref}
                      onSelect={onChange}
                      selected={value}
                      invalid={!!errors.deal_end_date}
                    />
                  )}
                />
                <p className="text-[12px] text-red-500">
                  {errors.deal_end_date?.message}
                </p>
              </div>
            </div>
          </div>
          <div>
            <TypographyH3>
              Kategoria<span className="font-normal text-slate-400">*</span>
            </TypographyH3>
            <p className="mb-3 text-[12px] text-red-500">
              {errors.deal_category_id?.message}
            </p>
            <Controller
              control={control}
              name="deal_category_id"
              rules={{ required: "Dodawana okazja musi mieć kategorię" }}
              render={({ field: { onChange, value, ref } }) => {
                const handleSelection = (id: number, isChecked: boolean) => {
                  if (value == id && !isChecked) onChange(undefined);
                  else onChange(id);
                };

                return (
                  <CategorySelect
                    ref={ref}
                    onCheckedChange={handleSelection}
                    selection={value}
                    categories={dummy_categories}
                  />
                );
              }}
            />
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

export default DetailsStep;
