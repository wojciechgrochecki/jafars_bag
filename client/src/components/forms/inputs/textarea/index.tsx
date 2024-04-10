import * as React from "react";
import { cn } from "@/utils/cn";
import mergeRefs from "merge-refs";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  autoResize?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, autoResize = true, onChange, ...props }, ref) => {
    const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (textAreaRef.current && autoResize) {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = `${e.target.scrollHeight + 2}px`;
      }
      if (onChange) onChange(e);
    };

    return (
      <textarea
        className={cn(
          "flex min-h-40 w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 caret-accent-light placeholder:text-slate-400 focus:border-accent-light focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={mergeRefs(ref, textAreaRef)}
        onChange={handleInput}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
