import { ReactNode } from "react";

export default function SectionWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className: string | null;
}) {
  return (
    <section
      className={`py-20 min-h-screen min-w-screen ${className}`}
    >
      {children}
    </section>
  );
}
