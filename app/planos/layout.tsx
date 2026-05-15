import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Planos",
  description:
    "Starter, Scale e Enterprise: infraestrutura premium de checkout. Mensalidades de referência, taxas por transação e comparativo objetivo — sem gratuito ou trial visível."
};

export default function PlanosLayout({ children }: { children: ReactNode }) {
  return <Fragment>{children}</Fragment>;
}
