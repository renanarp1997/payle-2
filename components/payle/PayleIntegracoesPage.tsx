"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { payleTheme } from "./payleTheme";
import { PayleSiteChrome } from "./PayleSiteChrome";
import { IconArrowRight, IconBolt, IconPlug } from "./PayleIcons";

const psps = [
  "Asaas",
  "Mercado Pago",
  "PagSeguro",
  "Efi",
  "Stone",
  "Cielo",
  "Pagar.me",
  "Appmax",
  "Dom Pagamentos"
] as const;

const integrationGroups: { title: string; body: string }[] = [
  { title: "E-commerce", body: "Shopify e WooCommerce para sua loja online." },
  {
    title: "Infoproduto standalone",
    body: "Modo independente para infoprodutores, com entrega automatizada de arquivos: PDF, vídeo e outros formatos após a confirmação do pagamento."
  },
  { title: "LMS", body: "Integração com a plataforma Educe." },
  { title: "ERPs", body: "Bling e Tiny para conciliar pedidos, estoque e financeiro com o checkout." }
];

export function PayleIntegracoesPage() {
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
            <h1 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">Integrações</h1>
            <span
              className="mt-3 block h-[3px] w-[calc(100%+1.5rem)] max-w-[16rem] rounded-full bg-blue-600"
              aria-hidden
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ease, delay: reduce ? 0 : 0.08 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Conecte adquirentes, canais de venda e sistemas de gestão sem middleware improvisado — tudo conversando
            nativamente com a Payle no checkout.
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

      <section className={t.sectionIntegrations}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="mx-auto max-w-3xl text-center"
          >
            <p className={t.integrationSubhead}>Ecossistema</p>
            <h2 className={`mt-3 ${t.sectionTitle}`}>Integrações nativas e ecossistema</h2>
            <p className={`mt-4 ${t.bodyMuted}`}>
              A lista abaixo reflete o que já conversa nativamente com a Payle hoje: processadores, lojas, LMS, ERPs e
              modo standalone para infoproduto — sem gambiarra.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: reduce ? 0 : 0.04 }}
            className="mx-auto mt-10 max-w-3xl text-center"
          >
            <p className={t.integrationSubhead}>Adquirentes</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {psps.map((name) => (
                <span key={name} className={t.integrationPill}>
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 sm:gap-8"
          >
            {integrationGroups.map((g) => (
              <motion.li key={g.title} variants={fadeUp} className={t.integrationCard}>
                <h3 className="text-base font-semibold leading-snug tracking-tight text-slate-900">{g.title}</h3>
                <p className={`mt-2 flex-1 text-sm leading-relaxed text-slate-600`}>{g.body}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: reduce ? 0 : 0.08 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-slate-200/80 pt-10"
          >
            <motion.a
              href="/produto"
              className={`inline-flex items-center gap-2 text-sm font-semibold ${t.accent}`}
              whileHover={reduce ? undefined : { x: 3 }}
            >
              <IconPlug className="h-4 w-4" />
              Página do produto
              <IconArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="/recursos"
              className={`inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700`}
              whileHover={reduce ? undefined : { x: 3 }}
            >
              <IconBolt className="h-4 w-4 text-blue-600" />
              Página de recursos
              <IconArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </PayleSiteChrome>
  );
}
