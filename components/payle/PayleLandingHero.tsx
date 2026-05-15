"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useId } from "react";
import heroMds from "@/assets/MDS.png";
import { IconArrowRight, IconPlusBadge, IconTerminal } from "./PayleIcons";
import { payleTheme } from "./payleTheme";
import { TrustPill, usePayleMotion } from "./PayleVisuals";

/** Linhas curvas suaves (referência: traços claros sobre fundo claro) */
function HeroStripeLines({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const ga = `payle-hero-line-a-${uid}`;
  const gb = `payle-hero-line-b-${uid}`;
  return (
    <svg className={className} viewBox="0 0 1200 640" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id={ga} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="42%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={gb} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0" />
          <stop offset="45%" stopColor="#eff6ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 380 Q 220 320 440 360 T 880 330 L 1200 300"
        stroke={`url(#${ga})`}
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M80 520 Q 340 460 580 500 T 1120 470"
        stroke={`url(#${gb})`}
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M0 180 Q 300 120 540 160 T 1050 140"
        stroke="#f8fafc"
        strokeOpacity="0.95"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

const glassCard =
  "rounded-xl border border-white/75 bg-white/50 p-3 shadow-[0_20px_50px_-22px_rgba(15,23,42,0.2)] backdrop-blur-md ring-1 ring-slate-900/[0.035]";

function MetricCardCheckout({
  reduce,
  className
}: {
  reduce: boolean | null;
  className?: string;
}) {
  const sparkId = useId().replace(/:/g, "");
  const gradId = `payle-hero-spark-${sparkId}`;
  return (
    <motion.div
      className={`${glassCard} ${className ?? ""}`}
      initial={{ opacity: 0, y: reduce ? 0 : 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.01 : 0.45, delay: reduce ? 0 : 0.12 }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">Conversão de checkout</p>
      <div className="mt-1 flex items-end justify-between gap-2">
        <span className="text-lg font-semibold tabular-nums text-slate-900">82,4%</span>
        <span className="text-[11px] font-semibold text-emerald-600">+ 12%</span>
      </div>
      <svg viewBox="0 0 120 36" className="mt-2 h-8 w-full" aria-hidden>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M4 28 L22 18 L40 22 L58 10 L76 14 L94 6 L116 12 L116 34 L4 34 Z"
          fill={`url(#${gradId})`}
        />
        <path
          d="M4 28 L22 18 L40 22 L58 10 L76 14 L94 6 L116 12"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

function MetricCardSales({
  reduce,
  className
}: {
  reduce: boolean | null;
  className?: string;
}) {
  const bars = [14, 22, 18, 28, 24, 32];
  return (
    <motion.div
      className={`${glassCard} ${className ?? ""}`}
      initial={{ opacity: 0, y: reduce ? 0 : 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.01 : 0.45, delay: reduce ? 0 : 0.18 }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">Vendas aprovadas</p>
      <div className="mt-1 flex items-end justify-between gap-2">
        <span className="text-sm font-semibold tabular-nums text-slate-900">R$ 128.540,00</span>
        <span className="text-[11px] font-semibold text-emerald-600">+ 18%</span>
      </div>
      <div className="mt-2 flex h-10 items-end justify-between gap-1 px-0.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-full max-w-[14px] rounded-sm bg-gradient-to-t from-indigo-500/90 via-blue-500/85 to-sky-400/80"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function PayleLandingHero() {
  const t = payleTheme;
  const { reduce, stagger, fadeUp, ease } = usePayleMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: reduce ? 0 : 0.06 } }
  };

  return (
    <>
      {/* Fundo referência: claro + gradientes azuis discretos + grid + linhas */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#f3f6fb] via-[#fafbfd] to-[#eef2f7]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_52%_at_12%_-8%,rgba(59,130,246,0.16),transparent_55%),radial-gradient(ellipse_70%_48%_at_96%_104%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(ellipse_45%_38%_at_68%_32%,rgba(255,255,255,0.85),transparent_58%)]"
        aria-hidden
      />
      <div
        className="payle-hero-tech-grid pointer-events-none absolute inset-0 z-[1] opacity-[0.62] max-md:opacity-[0.42]"
        aria-hidden
      />
      <HeroStripeLines className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[clamp(420px,62vw,680px)] w-full opacity-90 max-md:h-[300px] max-md:opacity-[0.75]" />

      <div
        className="pointer-events-none absolute right-[-10%] top-[6%] z-[1] hidden h-[min(480px,48vw)] w-[min(480px,48vw)] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_70%)] lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[4%] left-[-10%] z-[1] hidden h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.1),transparent_72%)] lg:block"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-14 sm:gap-12 sm:px-6 sm:pb-16 sm:pt-16 md:gap-14 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-24 lg:pt-20 xl:gap-14">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 text-center lg:col-span-5 lg:order-1 lg:text-left xl:col-span-5"
        >
          <motion.div
            variants={fadeUp}
            className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-9 lg:justify-start"
          >
            <TrustPill variant="hero">Gateway sob sua gestão</TrustPill>
            <TrustPill variant="hero">Liquidação PIX ágil</TrustPill>
            <TrustPill variant="hero">Atribuição e métricas</TrustPill>
          </motion.div>

          <motion.div variants={fadeUp} className="mb-8 flex justify-center lg:justify-start">
            <span className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-sky-200/90 bg-sky-50/95 px-3 py-2 pr-4 shadow-[0_2px_14px_-4px_rgba(37,99,235,0.14)] sm:gap-3 sm:px-4 sm:py-2.5">
              <IconPlusBadge className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
              <span className="text-left text-sm font-semibold leading-snug text-blue-700 sm:text-[15px]">
                Checkout com identidade da sua marca — além do template genérico
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[2rem] font-bold leading-[1.06] tracking-tight text-slate-950 sm:text-5xl sm:leading-[1.05] lg:text-[3.25rem] xl:text-[3.6rem] xl:leading-[1.04]"
          >
            <span className="block text-slate-950">O ponto em que o</span>
            <span className="block text-slate-950">cliente conclui a</span>
            <span className="block text-[#2563eb]">compra com</span>
            <span className="block text-[#2563eb]">confiança</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-lg text-[15px] leading-relaxed text-slate-600 sm:text-lg lg:mx-0 lg:mt-9"
          >
            Conecte PIX, cartão e boleto ao gateway que você já utiliza. Uma experiência alinhada à sua marca, com
            medição de funil e recuperação de carrinho — sem dispersar indicadores em ferramentas paralelas.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12 lg:justify-start lg:gap-4"
          >
            <motion.a
              href="#contato"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[14px] bg-[#2563eb] px-7 py-3 text-sm font-semibold text-white shadow-[0_4px_18px_-4px_rgba(37,99,235,0.55)] transition-[transform,box-shadow,background-color] duration-200 hover:bg-[#1d4ed8] hover:shadow-[0_12px_32px_-10px_rgba(37,99,235,0.45)] active:scale-[0.98]"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Falar com especialistas
              <IconArrowRight className="h-4 w-4 opacity-95" />
            </motion.a>
            <motion.a
              href="/checkout"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[14px] border border-slate-200/95 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.12)] transition-[border-color,background-color,transform,box-shadow] duration-200 hover:border-slate-300 hover:bg-slate-50/90 active:scale-[0.98]"
              whileHover={reduce ? undefined : { y: -1 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              <IconTerminal className={`h-4 w-4 ${t.accent}`} />
              Ver jornada de checkout
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Coluna visual: foto integrada + cartões à esquerda */}
        <div className="relative order-1 lg:col-span-7 xl:col-span-7">
          <div className="relative mx-auto flex max-w-[420px] justify-center sm:max-w-[460px] lg:mx-0 lg:max-w-none lg:justify-end lg:pr-2">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(360px,82vw)] w-[min(360px,92vw)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_74%)] sm:h-[420px] sm:w-[420px] lg:h-[min(560px,54vw)] lg:w-[min(540px,50vw)] lg:translate-x-[-38%]"
              aria-hidden
            />

            {/* Cartões flutuantes à esquerda da figura (referência) */}
            <MetricCardCheckout
              reduce={reduce}
              className="absolute left-[-8%] top-[8%] z-20 hidden w-[196px] md:block lg:left-[0%] lg:top-[12%] xl:w-[210px]"
            />
            <MetricCardSales
              reduce={reduce}
              className="absolute bottom-[18%] left-[-4%] z-20 hidden w-[196px] md:block lg:bottom-[20%] lg:left-[4%] xl:w-[210px]"
            />

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...ease, delay: reduce ? 0 : 0.08 }}
              className="relative z-10 w-full max-h-[280px] sm:max-h-[360px] lg:max-h-[min(580px,74vh)] xl:max-h-[min(620px,76vh)]"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_36px_72px_-36px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/80">
                <Image
                  src={heroMds}
                  alt="Profissional com notebook; métricas de checkout e vendas em interface moderna — composição promocional"
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 72vw, 54vw"
                  className="block h-auto w-full object-cover object-center"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(248,250,252,0.35)_0%,transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.25)_0%,transparent_18%)]"
                  aria-hidden
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
