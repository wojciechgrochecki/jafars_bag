import { cn } from "@/utils/cn";
import React from "react";

interface IconProps {
  active?: boolean;
  classes?: string;
}

function HomeIcon({ active = false, classes }: IconProps) {
  return (
    <button
      className={`cursor-pointer rounded-[13px] p-3 hover:bg-[#9352CC]/15 ${active && "bg-[#9352CC]/15 "}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn(`h-6 w-6 text-slate-700`, classes, {
          "text-accent": active,
        })}
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    </button>
  );
}

const SearchIcon = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & IconProps
>(({ active = false, classes, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={`cursor-pointer rounded-[13px] p-3 hover:bg-[#9352CC]/15 ${active && "bg-[#9352CC]/15 "}`}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cn(`h-6 w-6 text-slate-700`, classes, {
          "text-accent": active,
        })}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1 -2.008 2.225l-.114 -.103l-4.943 -4.944a8 8 0 0 1 -12.49 -6.332l-.006 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643z"
          strokeWidth="0"
          fill="currentColor"
        />
      </svg>
    </button>
  );
});

function BellIcon({ active = false, classes }: IconProps) {
  return (
    <button
      className={`cursor-pointer rounded-[13px] p-3 hover:bg-[#9352CC]/15 ${active && "bg-[#9352CC]/15 "}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cn(`h-6 w-6 text-slate-700`, classes, {
          "text-accent": active,
        })}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
          strokeWidth="0"
          fill="currentColor"
        />
        <path
          d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
          strokeWidth="0"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}

function UserIcon({ active = false, classes }: IconProps) {
  return (
    <button
      className={`cursor-pointer rounded-[13px] p-3 hover:bg-[#9352CC]/15 ${active && "bg-[#9352CC]/15 "}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn(`h-6 w-6 text-slate-700`, classes, {
          "text-accent": active,
        })}
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

export { HomeIcon, SearchIcon, BellIcon, UserIcon };
