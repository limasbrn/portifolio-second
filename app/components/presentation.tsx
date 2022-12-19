import { ReactNode } from "react";

interface PresentationWrapperProps {
  children: ReactNode;
}

export const PresentationWrapper = ({ children }: PresentationWrapperProps) => {
  return <section className="section_presentation centralize">{children}</section>;
};
