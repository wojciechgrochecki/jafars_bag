import { cn } from "../../utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function SecondaryButton({ className, children }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex-gap text-accent-light shadow-ring-accent flex flex-row items-center justify-center gap-1 rounded-md bg-white px-3 py-2 text-sm font-medium",
        className,
      )}
    >
      {children}
    </button>
  );
}
