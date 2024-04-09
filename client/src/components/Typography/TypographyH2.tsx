import { cn } from "@/utils/cn";

interface H2Props {
  className?: string;
  children: React.ReactNode;
}

export default function TypographyH2({ className, children }: H2Props) {
  return (
    <h2
      className={cn(
        "text-2xl font-semibold leading-7 text-slate-700",
        className,
      )}
    >
      {children}
    </h2>
  );
}
