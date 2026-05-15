/**
 * Referência comercial pública dos planos. Valide jurídico/financeiro antes de campanhas de mídia.
 * Operação atual: entrada com mensalidade + principal ganho estrutural na taxa por transação.
 */

export const payleDisplayedPlanPrices = {
  starterMonthly: "R$149/mês",
  scaleMonthly: "R$499/mês",
  enterprise: "Sob consulta"
} as const;

export const payleDisplayedTransactionFeeRef = {
  starter: "2%",
  scale: "1,5%",
  enterprise: "Taxas personalizadas"
} as const;

export type PaylePlanName = "Starter" | "Scale" | "Enterprise";

export type PayleComparisonFeatureRow = {
  label: string;
  starter: boolean;
  scale: boolean;
  enterprise: boolean;
};

/** Comparativo apenas com inclusão (✓) ou não (—), conforme posicionamento comercial atual. */
export const paylePlanComparisonMatrix: PayleComparisonFeatureRow[] = [
  { label: "Checkout transparente", starter: true, scale: true, enterprise: true },
  { label: "Upsell 1-click", starter: false, scale: true, enterprise: true },
  { label: "Cashback", starter: false, scale: true, enterprise: true },
  { label: "Recuperação de carrinho", starter: true, scale: true, enterprise: true },
  { label: "Gateways múltiplos", starter: true, scale: true, enterprise: true },
  { label: "Pixels e tracking", starter: true, scale: true, enterprise: true },
  { label: "Suporte prioritário", starter: false, scale: true, enterprise: true },
  { label: "Especialista dedicado", starter: false, scale: false, enterprise: true },
  { label: "Onboarding guiado", starter: true, scale: true, enterprise: true }
];
