import { cn } from "@/utils/cn";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function TypographyP({ className, children }: Props) {
  return (
    <p className={cn("text-sm font-normal text-slate-600", className)}>
      {children}
    </p>
  );
}
