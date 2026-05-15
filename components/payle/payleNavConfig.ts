/**
 * Menu principal do site.
 * - Cada item precisa de um `id` único (use como chave React); não copie o mesmo `id` entre linhas.
 * - `href` pode repetir em casos raros; `id` nunca deve repetir.
 */
export type PayleNavItem = {
  id: string;
  href: string;
  label: string;
};

export const payleNav: readonly PayleNavItem[] = [
  { id: "produto", href: "/produto", label: "Produto" },
  { id: "operacao", href: "/operacao", label: "Operação" },
  { id: "integracoes", href: "/integracoes", label: "Integrações" },
  { id: "recursos", href: "/recursos", label: "Recursos" },
  { id: "checkout", href: "/checkout", label: "Checkout" },
  { id: "planos", href: "/planos", label: "Planos" },
  { id: "duvidas", href: "/duvidas", label: "Dúvidas" }
];
