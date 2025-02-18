import { Mail } from "lucide-react";
import type { ComponentProps } from "react";

export default function InputField({ ...rest }: ComponentProps<"input">) {
  return (
    <input
      className="flex-1 outline-0 placeholder-gray-400 bg-gray-800 text-gray-400"
      {...rest}
    />
  );
}

export function InputRoot({
  error = false,
  ...rest
}: { error?: boolean } & ComponentProps<"div">) {
  return (
    <div
      {...rest}
      data-error={error}
      className="bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 group focus-within:border-gray-100 data-[error=true]:border-danger"
    />
  );
}

export function InputIcon({ ...rest }: ComponentProps<"span">) {
  return (
    <span
      {...rest}
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
    />
  );
}
