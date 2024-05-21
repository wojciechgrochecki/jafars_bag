import FormContextProvider from "@/context/FormContext";
import { Outlet } from "react-router-dom";
import Stepper from "./Stepper";

export default function FormLayout() {
  return (
    <div className="flex h-fit min-h-screen flex-col gap-8 bg-white px-4 py-3">
      <FormContextProvider>
        <Stepper />
        <Outlet />
      </FormContextProvider>
    </div>
  );
}
