import FormContextProvider from "@/context/FormContext";
import { Routes, Route } from "react-router-dom";
import Stepper from "./Stepper";
import LinkStep from "./Steps/LinkStep";
import DetailsStep from "./Steps/DetailsStep";
import DescriptionStep from "./Steps/DescriptionStep";
import ImagesStep from "./Steps/ImagesStep";
import { useRef } from "react";

export interface StepperRef {
  validateAndStep: (navigateTo: string, nextStep: number) => void;
}

export const stepsLookup = [
  "/dodaj-ogloszenie",
  "/dodaj-ogloszenie/szczegoly",
  "/dodaj-ogloszenie/opis",
  "/dodaj-ogloszenie/zdjecia",
];

export default function AddDealPage() {
  const submitButtonRef = useRef<StepperRef>(null);

  const handleStepChange = (navigateTo: string, nextStep: number) => {
    submitButtonRef.current?.validateAndStep(navigateTo, nextStep);
  };

  return (
    <div className="flex h-fit min-h-screen flex-col gap-8 bg-slate-50 px-4 py-3 lg:flex-row lg:px-8 lg:py-14">
      <FormContextProvider>
        <Stepper onStepChange={handleStepChange} />
        <Routes>
          <Route index element={<LinkStep ref={submitButtonRef} />} />
          <Route
            path={"szczegoly"}
            element={<DetailsStep ref={submitButtonRef} />}
          />
          <Route
            path={"opis"}
            element={<DescriptionStep ref={submitButtonRef} />}
          />
          <Route
            path={"zdjecia"}
            element={<ImagesStep ref={submitButtonRef} />}
          />
        </Routes>
      </FormContextProvider>
    </div>
  );
}
