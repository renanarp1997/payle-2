import type { Metadata } from "next";
import { PayleIntegracoesPage } from "@/components/payle/PayleIntegracoesPage";

export const metadata: Metadata = {
  title: "Integrações",
  description:
    "Integrações nativas Payle: Asaas, Mercado Pago, PagSeguro, Efi, Stone, Cielo, Pagar.me, Appmax, Dom Pagamentos; Shopify, WooCommerce, Educe, Bling, Tiny e modo standalone."
};

export default function IntegracoesRoutePage() {
  return <PayleIntegracoesPage />;
}
