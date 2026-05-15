/**
 * Menu principal do site.
 * - Cada item precisa de um `id` único (use como chave React); não copie o mesmo `id` entre linhas.
 * - `href` pode repetir em casos raros; `id` nunca deve repetir.
 */
export type PayleNavVisualId =
  | "produto"
  | "operacao"
  | "integracoes"
  | "recursos"
  | "checkout"
  | "planos"
  | "duvidas";

export type PayleNavItem = {
  id: PayleNavVisualId;
  href: string;
  label: string;
  /** Frase curta no menu — clara, cordial e adequada ao contexto B2B */
  menuLead: string;
};

export const payleNav: readonly PayleNavItem[] = [
  {
    id: "produto",
    href: "/produto",
    label: "Produto",
    menuLead: "Checkout integrado ao gateway que você já utiliza."
  },
  {
    id: "operacao",
    href: "/operacao",
    label: "Operação",
    menuLead: "Para equipes de vendas, finanças e growth no dia a dia."
  },
  {
    id: "integracoes",
    href: "/integracoes",
    label: "Integrações",
    menuLead: "Loja, LMS e ERP conectados de forma nativa."
  },
  {
    id: "recursos",
    href: "/recursos",
    label: "Recursos",
    menuLead: "Pixels, atribuição e recuperação no mesmo fluxo."
  },
  {
    id: "checkout",
    href: "/checkout",
    label: "Checkout",
    menuLead: "Pagamento e marketing na mesma experiência."
  },
  {
    id: "planos",
    href: "/planos",
    label: "Planos",
    menuLead: "Do projeto inicial ao ambiente enterprise."
  },
  {
    id: "duvidas",
    href: "/duvidas",
    label: "Dúvidas",
    menuLead: "Respostas objetivas sobre produto e contratação."
  }
];
