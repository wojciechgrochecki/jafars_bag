import { useFormContext } from "@/context/FormContext";
import { cn } from "@/utils/cn";
import { IconChevronLeft } from "@tabler/icons-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Stepper() {
  const { currentStep, highestStepReached, setNextStep } = useFormContext();
  const navigate = useNavigate();

  const handleNavButtonClick = () => {
    setNextStep(currentStep - 1);
    switch (currentStep) {
      case 1:
        navigate("/");
        break;
      case 2:
        navigate("/dodaj-ogloszenie");
        break;
      case 3:
        navigate("szczegoly");
        break;
      case 4:
        navigate("opis");
        break;
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    destStep: number,
  ) => {
    if (destStep > highestStepReached) {
      e.preventDefault();
      return;
    }
    setNextStep(destStep);
  };

  return (
    <nav className="flex flex-col gap-6">
      <div className="grid grid-cols-[1fr_auto_1fr]">
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
      <div className="flex flex-row justify-between gap-2">
        <NavLink
          to="/dodaj-ogloszenie"
          onClick={(e) => handleLinkClick(e, 1)}
          className={({ isActive }) =>
            cn(`h-[6px] w-full rounded-full bg-purple-200`, {
              "bg-accent": isActive || currentStep >= 1,
            })
          }
        ></NavLink>
        <NavLink
          to="szczegoly"
          onClick={(e) => handleLinkClick(e, 2)}
          className={({ isActive }) =>
            cn(`h-[6px] w-full rounded-full bg-purple-200`, {
              "bg-accent": isActive || currentStep >= 2,
            })
          }
        ></NavLink>
        <NavLink
          to="opis"
          onClick={(e) => handleLinkClick(e, 3)}
          className={({ isActive }) =>
            cn(`h-[6px] w-full rounded-full bg-purple-200`, {
              "bg-accent": isActive || currentStep >= 3,
            })
          }
        ></NavLink>
        <NavLink
          to="zdjecia"
          onClick={(e) => handleLinkClick(e, 4)}
          className={({ isActive }) =>
            cn(`h-[6px] w-full rounded-full bg-purple-200`, {
              "bg-accent": isActive || currentStep >= 4,
            })
          }
        ></NavLink>
      </div>
    </nav>
  );
}
