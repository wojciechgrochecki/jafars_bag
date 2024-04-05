import { Button } from ".";
import { IconX } from "@tabler/icons-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function CloseButton(props: ButtonProps) {
  return (
    <Button {...props} variant={"comment"} className="h-fit w-fit p-1">
      <IconX className="h-4 w-4 text-slate-700" />
    </Button>
  );
}
