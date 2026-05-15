import { payleDisplayedTransactionFeeRef, type PaylePlanName } from "./paylePlanModel";

export type PaylePlanTierProfile = {
  name: PaylePlanName;
  tagline: string;
  /** Valor grande exibido no card (percentual ou posicionamento comercial). */
  feePrimary: string;
  /** Linha complementar sob a taxa. */
  feeSecondary: string;
};

export const paylePlanTierProfiles: PaylePlanTierProfile[] = [
  {
    name: "Starter",
    tagline: "Para operações em crescimento.",
    feePrimary: payleDisplayedTransactionFeeRef.starter,
    feeSecondary: "Taxa sobre transações aprovadas"
  },
  {
    name: "Scale",
    tagline: "Para e-commerces escalando.",
    feePrimary: payleDisplayedTransactionFeeRef.scale,
    feeSecondary: "Taxa sobre transações aprovadas"
  },
  {
    name: "Enterprise",
    tagline: "Estrutura personalizada para alto volume.",
    feePrimary: payleDisplayedTransactionFeeRef.enterprise,
    feeSecondary: "Mensalidade e condições combinadas em contrato"
  }
];

export function getPayleTierProfile(name: PaylePlanName): PaylePlanTierProfile {
  const p = paylePlanTierProfiles.find((tier) => tier.name === name);
  if (!p) throw new Error(`Unknown Payle tier: ${name}`);
  return p;
}
