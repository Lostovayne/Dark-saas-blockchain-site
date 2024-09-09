import { type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Circle = ({ children, className }: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full  outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 ",
        className
      )}
    >
      {children}
    </div>
  );
};
