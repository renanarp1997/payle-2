import type { Metadata } from "next";
import { PayleOperacaoPage } from "@/components/payle/PayleOperacaoPage";

export const metadata: Metadata = {
  title: "Operação",
  description:
    "Payle na operação do dia a dia: e-commerce, financeiro, produto e growth — checkout integrado ao gateway, ERPs, LMS e rastreamento alinhados ao time."
};

export default function OperacaoRoutePage() {
  return <PayleOperacaoPage />;
}
