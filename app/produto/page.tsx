import type { Metadata } from "next";
import { PayleProdutoPage } from "@/components/payle/PayleProdutoPage";

export const metadata: Metadata = {
  title: "Produto",
  description:
    "Payle: checkout integrado ao seu gateway, com integrações nativas a adquirentes, Shopify, WooCommerce, Educe, Bling e Tiny, além de pixels, supertracking e superrecuperação de carrinho."
};

export default function ProdutoRoutePage() {
  return <PayleProdutoPage />;
}
