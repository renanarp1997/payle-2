/** Lista de adquirentes com integração nativa — logos em `/public/logos/acquirers/`. */
export type PayleAcquirer = {
  /** Nome acessível + leitura de tela */
  name: string;
  logoSrc: string;
};

export const payleAcquirers: PayleAcquirer[] = [
  { name: "Asaas", logoSrc: "/logos/acquirers/asaas.svg" },
  { name: "Mercado Pago", logoSrc: "/logos/acquirers/mercadopago.svg" },
  { name: "PagSeguro", logoSrc: "/logos/acquirers/pagseguro.svg" },
  { name: "Efi", logoSrc: "/logos/acquirers/efi.svg" },
  { name: "Stone", logoSrc: "/logos/acquirers/stone.svg" },
  { name: "Cielo", logoSrc: "/logos/acquirers/cielo.svg" },
  { name: "Pagar.me", logoSrc: "/logos/acquirers/pagarme.svg" },
  { name: "Appmax", logoSrc: "/logos/acquirers/appmax.svg" },
  { name: "Dom Pagamentos", logoSrc: "/logos/acquirers/dom-pagamentos.svg" }
];

/** Lista em prosa (PT), alinhada a `payleAcquirers` — use em FAQs e texto corrido. */
export const PAYLE_ACQUIRERS_PT_LIST =
  payleAcquirers.length <= 2
    ? payleAcquirers.map((a) => a.name).join(" e ")
    : `${payleAcquirers
        .slice(0, -1)
        .map((a) => a.name)
        .join(", ")} e ${payleAcquirers.at(-1)!.name}`;
