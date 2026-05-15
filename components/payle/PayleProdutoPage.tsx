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

const pillars: { title: string; body: string; Icon: SvgIcon }[] = [
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

export function PayleProdutoPage() {
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
            <h1 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">Produto</h1>
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
            A Payle é a camada de checkout entre o comprador e o seu adquirente: mesma identidade visual, PIX, cartão
            e boleto em um fluxo só, com integrações nativas, tracking e recuperação onde a venda acontece.
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

      <section className={t.sectionProduct}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="mx-auto max-w-3xl text-center"
          >
            <p className={t.productKicker}>Visão geral</p>
            <h2 className={`mt-3 ${t.sectionTitle}`}>O que a Payle faz — e o que não substitui</h2>
            <p className={`mt-4 ${t.bodyMuted}`}>
              Você segue com contrato, taxas e suporte do processador. A Payle orquestra a página de pagamento, as
              integrações com canais (loja, LMS, ERP) e os recursos de performance no checkout — sem tomar o lugar do
              seu gateway.
            </p>
          </motion.div>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-14 grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {pillars.map((item) => (
              <motion.li
                key={item.title}
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
                  <item.Icon className="h-6 w-6" />
                </div>
                <h3 className={t.featureTitle}>{item.title}</h3>
                <p className={t.featureBody}>{item.body}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className={t.sectionApi}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={ease}
              className="mb-4 flex justify-center"
              aria-hidden
            >
              <div className={t.productIconBox}>
                <IconTerminal className="h-5 w-5" />
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={ease}
              className={t.sectionTitle}
            >
              Checkout, marketing e operação no mesmo lugar
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: reduce ? 0 : 0.05 }}
              className={`mx-auto mt-4 max-w-2xl ${t.bodyMuted}`}
            >
              Pixels avançados, supertracking e superrecuperação de carrinho convivem com a jornada de pagamento — para
              quem precisa medir funil sem abrir mão de uma experiência limpa para o comprador.
            </motion.p>
            <motion.a
              href="/checkout"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: reduce ? 0 : 0.1 }}
              className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${t.accent}`}
              whileHover={reduce ? undefined : { x: 3 }}
            >
              Página de checkout
              <IconArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </section>
    </PayleSiteChrome>
  );
}
