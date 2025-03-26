import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export function Heading({ children }: Props) {
  return (
    <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
      {children}
    </h1>
  );
}
