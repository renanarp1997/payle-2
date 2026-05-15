"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ComponentType, SVGProps } from "react";
import Image from "next/image";
import { payleTheme } from "./payleTheme";
import { PayleSiteChrome } from "./PayleSiteChrome";
import {
  IconArrowRight,
  IconBolt,
  IconLayers,
  IconSpark,
  IconTerminal
} from "./PayleIcons";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const operationGallery: { src: string; alt: string; caption: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
    alt: "Profissional em ambiente corporativo — imagem ilustrativa",
    caption: "E-commerce & marca"
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=720&q=80",
    alt: "Executivo em escritório — imagem ilustrativa",
    caption: "Operação & financeiro"
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=720&q=80",
    alt: "Equipe em reunião — imagem ilustrativa",
    caption: "Produto & tecnologia"
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=720&q=80",
    alt: "Pessoas analisando dados em notebook — imagem ilustrativa",
    caption: "Growth & performance"
  }
];

const operationAngles: { title: string; body: string; Icon: SvgIcon }[] = [
  {
    title: "E-commerce & marca",
    body: "Time de loja e marketing precisa de checkout estável, identidade da marca e métricas confiáveis — sem depender de gambiarra no pixel ou no gateway.",
    Icon: IconLayers
  },
  {
    title: "Operação & financeiro",
    body: "Conciliação, chargeback e previsibilidade de caixa: a Payle conversa com ERPs como Bling e Tiny para o back-office acompanhar o que entrou pelo checkout.",
    Icon: IconBolt
  },
  {
    title: "Growth & performance",
    body: "Funil e recuperação no mesmo lugar: supertracking e superrecuperação de carrinho para quem vive de número e precisa enxergar a jornada até o cartão.",
    Icon: IconSpark
  }
];

export function PayleOperacaoPage() {
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
            <h1 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">Operação</h1>
            <span
              className="mt-3 block h-[3px] w-[calc(100%+1.5rem)] max-w-[14rem] rounded-full bg-blue-600"
              aria-hidden
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ease, delay: reduce ? 0 : 0.08 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Feito para quem vende todo dia: e-commerce, lançamento, curso ou ERP. A Payle encaixa no fluxo entre
            marketing, operação e financeiro — com checkout, integrações e rastreamento onde a venda acontece.
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

      <section className="border-y border-slate-200/80 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="mx-auto max-w-3xl text-center"
          >
            <p className={t.productKicker}>Operação real</p>
            <h2 className={`mt-3 ${t.sectionTitle}`}>
              Feito para quem vende todo dia — não só para o slide da reunião
            </h2>
            <p className={`mt-4 ${t.bodyMuted}`}>
              Loja, lançamento, curso ou ERP: são esses perfis que mais falam com a gente na hora de integrar gateway,
              checkout e rastreamento. As fotos abaixo são{" "}
              <strong className="font-semibold text-slate-800">ilustrativas</strong> (Unsplash); substitua por
              material próprio quando fizer sentido para a marca.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {operationGallery.map((item, i) => (
              <motion.figure
                key={item.src}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: reduce ? 0 : i * 0.06 }}
                className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50 shadow-sm ring-1 ring-slate-900/[0.02] transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <figcaption className="border-t border-slate-100 bg-white px-3 py-2.5 text-center text-xs font-medium text-slate-600">
                  {item.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] leading-relaxed text-slate-400">
            Imagens:{" "}
            <a
              href="https://unsplash.com/?utm_source=payle&utm_medium=referral"
              className="underline decoration-slate-300 underline-offset-2 hover:text-slate-600"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash
            </a>{" "}
            (uso permitido pela licença do site).
          </p>
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
            <p className={t.integrationSubhead}>Como encaixa no time</p>
            <h2 className={`mt-3 ${t.sectionTitle}`}>Três ângulos que aparecem em toda implementação</h2>
          </motion.div>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-12 grid items-stretch gap-5 sm:grid-cols-3 sm:gap-6"
          >
            {operationAngles.map((item) => (
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

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: reduce ? 0 : 0.08 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            <motion.a
              href="/integracoes"
              className={`inline-flex items-center gap-2 text-sm font-semibold ${t.accent}`}
              whileHover={reduce ? undefined : { x: 3 }}
            >
              Página de integrações
              <IconArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="/planos"
              className={`inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700`}
              whileHover={reduce ? undefined : { x: 3 }}
            >
              Planos e escala
              <IconTerminal className="h-4 w-4 text-blue-600" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </PayleSiteChrome>
  );
}
