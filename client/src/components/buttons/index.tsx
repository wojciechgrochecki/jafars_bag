import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "flex flex-row items-center justify-center gap-1 rounded-md text-sm font-medium active:scale-95 transition",
  {
    variants: {
      variant: {
        default: "bg-accent text-white",
        secondary: "text-accent shadow-ring-accent bg-white",
        comment: "border border-slate-200 text-slate-700 hover:bg-slate-100 ",
        ghost:
          "text-slate-700 rounded-lg hover:bg-slate-100 active:bg-slate-100",
      },
      size: {
        default: "h-9 px-3 py-2",
        icon: "h-9 w-9 flex-shrink-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
