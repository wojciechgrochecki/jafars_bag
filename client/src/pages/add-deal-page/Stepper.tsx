import { useFormContext } from "@/context/FormContext";
import { cn } from "@/utils/cn";
import { IconChevronLeft, IconCheck } from "@tabler/icons-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { stepsLookup } from ".";
import { useEffect } from "react";

interface StepperProps {
  onStepChange: (navigateTo: string, nextStep: number) => void;
}

export default function Stepper({ onStepChange }: StepperProps) {
  const { currentStep, highestStepReached, setNextStep } = useFormContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (currentStep == 1 && location.pathname !== stepsLookup[0])
      navigate(stepsLookup[0]);
  }, []);
  console.log(currentStep);

  const handleNavButtonClick = () => {
    switch (currentStep) {
      case 1:
        setNextStep(1);
        navigate("/");
        break;
      case 2:
        onStepChange(stepsLookup[0], 1);
        break;
      case 3:
        onStepChange(stepsLookup[1], 2);
        break;
      case 4:
        onStepChange(stepsLookup[2], 3);
        break;
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    destStep: number,
  ) => {
    e.preventDefault();
    if (destStep > highestStepReached || destStep == currentStep) {
      return;
    }
    onStepChange(stepsLookup[destStep - 1], destStep);
  };

  return (
    <nav className="flex flex-col gap-6 lg:w-fit lg:flex-shrink-0">
      <div className="grid grid-cols-[1fr_auto_1fr] lg:hidden">
        <button
          onClick={handleNavButtonClick}
          className="flex w-fit flex-row items-center gap-2 text-base font-medium text-accent-light"
        >
          <IconChevronLeft className="h-6 w-6 text-accent-light" />
          {currentStep == 1 ? "Wyjdź" : "Cofnij"}
        </button>
        <p className="text-base font-medium text-slate-700">
          {currentStep} z 4
        </p>
      </div>
      <div className="flex flex-row justify-between gap-2 lg:flex-col">
        <Step
          highestStepReached={highestStepReached}
          navigateTo={stepsLookup[0]}
          stepNumber={1}
          isComplete={highestStepReached >= 1}
          onClick={handleLinkClick}
          isActive={currentStep === 1}
          stepDescription="Link do okazji"
        />
        <Step
          highestStepReached={highestStepReached}
          navigateTo={stepsLookup[1]}
          stepNumber={2}
          isComplete={highestStepReached >= 2}
          onClick={handleLinkClick}
          isActive={currentStep === 2}
          stepDescription="Szczegóły okazji"
        />
        <Step
          highestStepReached={highestStepReached}
          navigateTo={stepsLookup[2]}
          stepNumber={3}
          isComplete={highestStepReached >= 3}
          onClick={handleLinkClick}
          isActive={currentStep === 3}
          stepDescription="Opis"
        />
        <Step
          highestStepReached={highestStepReached}
          navigateTo={stepsLookup[3]}
          stepNumber={4}
          isComplete={highestStepReached >= 4}
          onClick={handleLinkClick}
          isLastStep={true}
          isActive={currentStep === 4}
          stepDescription="Zdjęcia"
        />
      </div>
    </nav>
  );
}

interface StepProps {
  navigateTo: string;
  highestStepReached: number;
  stepNumber: number;
  isLastStep?: boolean;
  isComplete: boolean;
  onClick: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    destNumber: number,
  ) => void;
  isActive: boolean;
  stepDescription: string;
}

function Step({
  highestStepReached,
  navigateTo,
  stepNumber,
  isComplete = false,
  onClick,
  isLastStep = false,
  isActive,
  stepDescription,
}: StepProps) {
  return (
    <div className="contents items-center justify-center lg:grid lg:grid-cols-[auto_1fr] lg:grid-rows-1 lg:gap-x-4 lg:gap-y-2">
      <NavLink
        to={navigateTo}
        onClick={(e) => onClick(e, stepNumber)}
        className="contents cursor-pointer"
      >
        <div
          className={cn(
            `h-[6px] w-full items-center justify-center rounded-full bg-purple-200 text-accent lg:flex lg:h-[60px] lg:w-[60px] lg:shrink-0 lg:border lg:border-accent lg:bg-transparent`,
            {
              "!bg-accent text-white": isComplete,
            },
          )}
        >
          {highestStepReached <= stepNumber ? (
            <span className="hidden text-lg font-semibold text-inherit lg:block">
              {stepNumber}
            </span>
          ) : (
            <IconCheck className="hidden h-6 w-6 stroke-[3] lg:block" />
          )}
        </div>
        <div className="group hidden flex-col items-start lg:flex ">
          <h2
            className={`text-lg font-medium text-slate-700 transition-all group-hover:text-accent ${isActive && "!text-accent"}`}
          >
            KROK {stepNumber}
          </h2>
          <p
            className={`text-sm text-slate-500 transition-all group-hover:text-accent ${isActive && "!text-accent"}`}
          >
            {stepDescription}
          </p>
        </div>
      </NavLink>
      <div
        className={cn(
          "lg: mx-auto hidden h-10 w-[6px] rounded-full bg-slate-200 lg:row-start-2 lg:block lg:place-self-center",
          {
            "!hidden": isLastStep,
            "bg-accent": highestStepReached > stepNumber,
          },
        )}
      ></div>
    </div>
  );
}
