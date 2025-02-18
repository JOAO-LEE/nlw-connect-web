import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function IconButton({
  className,
  ...rest
}: ComponentProps<"button">) {
  return (
    <button
      className={twMerge(
        "p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300",
        className
      )}
      {...rest}
    />
  );
}
