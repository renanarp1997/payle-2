import type { Metadata } from "next";
import { PayleCheckoutPage } from "@/components/payle/PayleCheckoutPage";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Checkout Payle: pagamento com seu gateway, pixels avançados, supertracking e superrecuperação de carrinho na mesma jornada."
};

export default function CheckoutRoutePage() {
  return <PayleCheckoutPage />;
}
