"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ComponentType, SVGProps } from "react";
import { payleTheme } from "./payleTheme";
import { PayleSiteChrome } from "./PayleSiteChrome";
import {
  IconActivity,
  IconArrowRight,
  IconBolt,
  IconLayers,
  IconPanel,
  IconPlug,
  IconSpark,
  IconTerminal
} from "./PayleIcons";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const features: { title: string; body: string; Icon: SvgIcon }[] = [
  {
    title: "Seu gateway, sua conta",
    body: "A Payle é um checkout: o adquirente continua sendo o seu. Você conecta o gateway que já utiliza e mantém a relação direta com o processador.",
    Icon: IconPlug
  },
  {
    title: "Adquirentes nativos",
    body: "Integração nativa com Asaas, Mercado Pago, PagSeguro, Efi, Stone, Cielo, Pagar.me, Appmax e Dom Pagamentos — sem gambiarra.",
    Icon: IconBolt
  },
  {
    title: "Loja e infoproduto",
    body: "Shopify e WooCommerce para e-commerce; fluxo standalone para infoprodutores com liberação automática de conteúdo (PDF, vídeo e mais).",
    Icon: IconLayers
  },
  {
    title: "LMS e ERPs",
    body: "Conecte a Educe para cursos e membros. Bling e Tiny entram no mesmo ecossistema para operação e back-office.",
    Icon: IconPanel
  },
  {
    title: "Pixels e supertracking",
    body: "Controles de pixel avançados e supertracking para enxergar atribuição e funil direto dentro do checkout.",
    Icon: IconActivity
  },
  {
    title: "Superrecuperação",
    body: "Superrecuperação de carrinho e jornadas automáticas para trazer o comprador de volta com menos fricção.",
    Icon: IconSpark
  }
];

export function PayleRecursosPage() {
  const t = payleTheme;
  const reduce = useReducedMotion();

  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };
  const stagger = reduce ? 0 : 0.07;
  const viewport = { once: true, margin: "-60px" as const };

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: reduce ? 0 : 0.05 } }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: ease }
  };

  return (
    <PayleSiteChrome>
      <section className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-14 text-center sm:px-6 sm:pb-20 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={ease}
            className="inline-flex flex-col items-center"
          >
            <h1 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">Recursos</h1>
            <span
              className="mt-3 block h-[3px] w-[calc(100%+1.5rem)] max-w-[12rem] rounded-full bg-blue-600"
              aria-hidden
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ease, delay: reduce ? 0 : 0.08 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {t.copy.recursosTagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ease, delay: reduce ? 0 : 0.14 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="/#contato"
              className={t.btnPrimary}
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
            >
              Falar com vendas
              <IconArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="/"
              className={t.btnSecondary}
              whileHover={reduce ? undefined : { scale: 1.02, borderColor: t.btnSecondaryHoverBorder }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              Voltar ao início
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className={t.sectionRecursos}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="mx-auto flex max-w-3xl flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left"
          >
            <div>
              <p className={t.productKicker}>Catálogo</p>
              <h2 className={`mt-2 ${t.sectionTitle}`}>O que entra no checkout com a Payle</h2>
              <p className={`mt-3 max-w-2xl ${t.bodyMuted}`}>
                Do gateway ao pixel: recursos pensados para quem precisa vender com clareza operacional e marketing
                mensurável na mesma página.
              </p>
            </div>
            <IconBolt className={`hidden shrink-0 sm:block ${t.recursosBolt}`} aria-hidden />
          </motion.div>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {features.map((f) => (
              <motion.li
                key={f.title}
                variants={fadeUp}
                whileHover={reduce ? undefined : { y: -6, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                className={t.featureCard}
              >
                <motion.div
                  className={t.featureGlow}
                  initial={{ opacity: 0.4, scale: 0.8 }}
                  whileHover={{ opacity: 0.85, scale: 1.1 }}
                />
                <div className={t.featureIconBox}>
                  <f.Icon className="h-6 w-6" />
                </div>
                <h3 className={t.featureTitle}>{f.title}</h3>
                <p className={t.featureBody}>{f.body}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: reduce ? 0 : 0.06 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-slate-200/80 pt-10"
          >
            <motion.a
              href="/integracoes"
              className={`inline-flex items-center gap-2 text-sm font-semibold ${t.accent}`}
              whileHover={reduce ? undefined : { x: 3 }}
            >
              Ver integrações
              <IconArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="/checkout"
              className={`inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700`}
              whileHover={reduce ? undefined : { x: 3 }}
            >
              Página de checkout
              <IconTerminal className="h-4 w-4 text-blue-600" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </PayleSiteChrome>
  );
}
