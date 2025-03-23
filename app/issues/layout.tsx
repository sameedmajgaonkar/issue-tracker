import { ReactNode } from "react";

export default function IssuesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <div className="md:px-32 lg:px-48">{children}</div>;
}
