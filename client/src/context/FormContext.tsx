import { createContext, useContext, useState } from "react";

interface FormContextProviderProps {
  children: React.ReactNode;
}

export interface AddDealForm {
  deal_link: string;
  deal_title: string;
  deal_description: string;
  deal_discount_price: number;
  deal_normal_price: number;
  deal_start_date: Date;
  deal_end_date: Date;
  deal_category_id: number;
  deal_images: File[];
}

const initialFormState: Partial<AddDealForm> = {
  deal_link: "",
  deal_title: "",
  deal_description: "",
  deal_discount_price: undefined,
  deal_normal_price: undefined,
  deal_start_date: undefined,
  deal_end_date: undefined,
  deal_category_id: undefined,
  deal_images: [],
};

interface FormContext {
  formState: Partial<AddDealForm>;
  setFormState: (values: Partial<AddDealForm>) => void;
  setNextStep: (nextStep: number) => void;
  currentStep: number;
  highestStepReached: number;
}

const FormContext = createContext<FormContext | null>(null);

export default function FormContextProvider({
  children,
}: FormContextProviderProps) {
  const [formState, setState] =
    useState<Partial<AddDealForm>>(initialFormState);
  const [steps, setSteps] = useState<{
    currentStep: number;
    highestStepReached: number;
  }>({ currentStep: 1, highestStepReached: 1 });

  const setFormState = (values: Partial<AddDealForm>) => {
    setState((oldState) => ({ ...oldState, ...values }));
  };

  const setNextStep = (nextStep: number) => {
    setSteps((prev) => ({
      currentStep: nextStep,
      highestStepReached:
        nextStep > prev.highestStepReached ? nextStep : prev.highestStepReached,
    }));
  };

  return (
    <FormContext.Provider
      value={{
        formState,
        setFormState,
        setNextStep,
        ...steps,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within FormContextProvider");
  }
  return context;
}
