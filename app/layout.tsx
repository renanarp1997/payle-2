import "./globals.css";
import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Payle — Checkout inteligente",
    template: "%s | Payle"
  },
  description:
    "Payle é um checkout: conecte seu gateway (Asaas, Mercado Pago, PagSeguro, Efi, Stone, Cielo, Pagar.me, Appmax, Dom Pagamentos), venda no Shopify, WooCommerce ou em modo standalone para infoprodutores, integre Educe, Bling e Tiny, e use pixels avançados, supertracking e superrecuperação de carrinho.",
  keywords: [
    "Payle",
    "checkout",
    "Shopify",
    "WooCommerce",
    "infoproduto",
    "Educe",
    "Bling",
    "Tiny",
    "Asaas",
    "Mercado Pago",
    "PagSeguro",
    "recuperação de carrinho"
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
