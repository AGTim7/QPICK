import type { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export function Container({
  className = "",
  children,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={`mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}