import { cn } from "../../utils/cn";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function TypographyH4({ className, children }: Props) {
  return (
    <h4
      className={cn(
        "text-base font-semibold leading-[22px] text-slate-700",
        className,
      )}
    >
      {children}
    </h4>
  );
}
