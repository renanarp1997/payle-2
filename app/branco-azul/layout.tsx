import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Payle — Tema branco e azul",
  description:
    "Landing Payle (tema claro): checkout integrado ao gateway com rastreamento avançado; integrações com adquirentes, Shopify, WooCommerce, Educe, Bling, Tiny e tracking."
};

export default function BrancoAzulLayout({ children }: { children: ReactNode }) {
  return children;
}
