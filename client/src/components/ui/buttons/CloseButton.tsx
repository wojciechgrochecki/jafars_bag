import { Button } from "./Button";
import { IconX } from "@tabler/icons-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function CloseButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      variant={"comment"}
      className={`h-fit w-fit p-1 ${className}`}
      {...props}
    >
      <IconX className="h-4 w-4 text-slate-700" />
    </Button>
  );
}
