import type { Metadata } from "next";
import { PayleRecursosPage } from "@/components/payle/PayleRecursosPage";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Recursos Payle no checkout: gateway próprio, adquirentes nativos, Shopify, WooCommerce, Educe, Bling, Tiny, pixels, supertracking e superrecuperação de carrinho."
};

export default function RecursosRoutePage() {
  return <PayleRecursosPage />;
}
