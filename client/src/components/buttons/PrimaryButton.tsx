import { cn } from "../../utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryButton({ className, children }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex-gap flex flex-row items-center justify-center gap-1 rounded-md bg-accent px-3 py-2 text-sm font-medium text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}
