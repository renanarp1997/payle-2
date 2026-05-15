"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ComponentType, SVGProps } from "react";
import { payleTheme } from "./payleTheme";
import { PayleSiteChrome } from "./PayleSiteChrome";
import { IconArrowRight, IconLayers, IconSpark, IconTerminal } from "./PayleIcons";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const plans: {
  name: string;
  price: string;
  desc: string;
  highlight: boolean;
  Icon: SvgIcon;
}[] = [
  {
    name: "Starter",
    price: "Consulte",
    desc: "Ideal para validar oferta, primeiro funil e checkout em produção.",
    highlight: false,
    Icon: IconSpark
  },
  {
    name: "Scale",
    price: "Consulte",
    desc: "Mais volume, prioridade em suporte e pacote completo de tracking e recuperação.",
    highlight: true,
    Icon: IconLayers
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    desc: "Múltiplas marcas, SSO, SLAs, customizações de checkout, pixels e integrações dedicadas.",
    highlight: false,
    Icon: IconTerminal
  }
];

export function PaylePlanosPage() {
  const t = payleTheme;
  const reduce = useReducedMotion();

  const spring = reduce ? { duration: 0.01 } : { type: "spring" as const, stiffness: 380, damping: 28 };
  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };
  const stagger = reduce ? 0 : 0.07;
  const viewport = { once: true, margin: "-60px" as const };

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: reduce ? 0 : 0.05 } }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.94 },
    show: { opacity: 1, scale: 1, transition: spring }
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
            <h1 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">Planos</h1>
            <span
              className="mt-3 block h-[3px] w-[calc(100%+1.5rem)] max-w-[11rem] rounded-full bg-blue-600"
              aria-hidden
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ease, delay: reduce ? 0 : 0.08 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Planos por estágio de maturidade do seu checkout. Valores e limites são alinhados com o time comercial
            conforme volume, integrações e necessidade de suporte.
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

      <section className={t.sectionPlans}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="mx-auto max-w-3xl text-center"
          >
            <p className={t.productKicker}>Escolha o estágio</p>
            <h2 className={`mt-3 ${t.sectionTitle}`}>Starter, Scale e Enterprise</h2>
            <p className={t.planLead}>
              Cada faixa acompanha um perfil de operação — da validação ao volume alto e requisitos enterprise. A
              proposta comercial fecha detalhes de preço e SLA.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-12 grid items-stretch gap-6 lg:grid-cols-3"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={scaleIn}
                whileHover={reduce ? undefined : { y: -6 }}
                className={plan.highlight ? t.planCardHi : t.planCard}
              >
                {plan.highlight && (
                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-30"
                    animate={reduce ? undefined : { backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                    style={{
                      backgroundImage: t.planHiShimmer,
                      backgroundSize: "200% 200%"
                    }}
                  />
                )}
                <div className={t.planIconBox}>
                  <plan.Icon className="h-5 w-5" />
                </div>
                <h3 className={t.planTitle}>{plan.name}</h3>
                <p className={t.planPrice}>{plan.price}</p>
                <p className={t.planDesc}>{plan.desc}</p>
                <motion.a
                  href="/#contato"
                  className={`relative mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-center text-sm font-semibold ${
                    plan.highlight ? t.planCtaHi : t.planCtaLo
                  }`}
                  whileHover={reduce ? undefined : { scale: 1.02 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  Escolher {plan.name}
                  <IconArrowRight className="h-4 w-4 opacity-80" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: reduce ? 0 : 0.08 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-slate-200/80 pt-10"
          >
            <motion.a
              href="/duvidas"
              className={`inline-flex items-center gap-2 text-sm font-semibold ${t.accent}`}
              whileHover={reduce ? undefined : { x: 3 }}
            >
              Dúvidas frequentes
              <IconArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="/recursos"
              className={`inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700`}
              whileHover={reduce ? undefined : { x: 3 }}
            >
              Ver recursos
              <IconArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </PayleSiteChrome>
  );
}
