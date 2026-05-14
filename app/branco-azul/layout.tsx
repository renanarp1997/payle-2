import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Payle — Tema branco e azul",
  description:
    "Landing Payle (tema claro): checkout conectado ao seu gateway, integrações com adquirentes, Shopify, WooCommerce, Educe, Bling, Tiny e recursos de tracking."
};

export default function BrancoAzulLayout({ children }: { children: ReactNode }) {
  return children;
}
