import type { Metadata } from "next";
import { PayleDuvidasPage } from "@/components/payle/PayleDuvidasPage";

export const metadata: Metadata = {
  title: "Dúvidas",
  description:
    "Dúvidas frequentes sobre a Payle: gateway, processadores nativos, Shopify, WooCommerce, Educe, Bling, Tiny, pixels, supertracking, recuperação de carrinho e planos."
};

export default function DuvidasRoutePage() {
  return <PayleDuvidasPage />;
}
