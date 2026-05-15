import type { Metadata } from "next";
import { PaylePlanosPage } from "@/components/payle/PaylePlanosPage";

export const metadata: Metadata = {
  title: "Planos",
  description:
    "Planos Payle: Starter, Scale e Enterprise — checkout, integrações, tracking e recuperação alinhados ao estágio da sua operação. Valores com o time comercial."
};

export default function PlanosRoutePage() {
  return <PaylePlanosPage />;
}
