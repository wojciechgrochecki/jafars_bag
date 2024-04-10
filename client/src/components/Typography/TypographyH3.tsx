import { cn } from "@/utils/cn";

interface H3Props {
  className?: string;
  children: React.ReactNode;
}

export default function TypographyH3({ className, children }: H3Props) {
  return (
    <h2 className={cn("text-xl font-medium text-slate-700", className)}>
      {children}
    </h2>
  );
}
