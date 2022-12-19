import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
}

export const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return <section className="section centralize">{children}</section>;
};
