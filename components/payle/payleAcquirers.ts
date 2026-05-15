/** Lista de adquirentes com integração nativa — logos em `/public/logos/acquirers/` (evita imports de asset no bundle e erros de chunk no Webpack). */
export type PayleAcquirer = {
  /** Nome acessível + leitura de tela */
  name: string;
  logoSrc: string;
};

export const payleAcquirers: PayleAcquirer[] = [
  { name: "Asaas", logoSrc: "/logos/acquirers/Logo_Asaas2026.png" },
  { name: "Mercado Pago", logoSrc: "/logos/acquirers/mercado.png" },
  { name: "PagSeguro", logoSrc: "/logos/acquirers/pagseguro-cinza.png" },
  { name: "Efi", logoSrc: "/logos/acquirers/efi-bank.webp" },
  { name: "Stone", logoSrc: "/logos/acquirers/stone.svg" },
  { name: "Cielo", logoSrc: "/logos/acquirers/cielo.png" },
  { name: "Pagar.me", logoSrc: "/logos/acquirers/Pagar.Me_.png" },
  { name: "Appmax", logoSrc: "/logos/acquirers/appmax.webp" },
  { name: "Dom Pagamentos", logoSrc: "/logos/acquirers/dom.png" }
];

/** Lista em prosa (PT), alinhada a `payleAcquirers` — use em FAQs e texto corrido. */
export const PAYLE_ACQUIRERS_PT_LIST =
  payleAcquirers.length <= 2
    ? payleAcquirers.map((a) => a.name).join(" e ")
    : `${payleAcquirers
        .slice(0, -1)
        .map((a) => a.name)
        .join(", ")} e ${payleAcquirers.at(-1)!.name}`;
