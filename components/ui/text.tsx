import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export function Text({ children }: Props) {
  return <p className="leading-7">{children}</p>;
}
