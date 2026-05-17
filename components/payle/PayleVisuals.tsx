"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode, useId } from "react";
import { IconActivity, IconArrowRight, IconCheck, IconWallet } from "./PayleIcons";
import { payleTheme } from "./payleTheme";
import type { PayleNavVisualId } from "./payleNavConfig";
import { PayleHeroIllustration } from "./PaylePageIllustrations";

const ease = [0.22, 1, 0.36, 1] as const;

export function usePayleMotion() {
  const reduce = useReducedMotion();
  return {
    reduce,
    spring: reduce ? { duration: 0.01 } : { type: "spring" as const, stiffness: 380, damping: 28 },
    ease: reduce ? { duration: 0.01 } : { duration: 0.55, ease },
    viewport: { once: true, margin: "-80px" as const },
    stagger: reduce ? 0 : 0.08,
    fadeUp: {
      hidden: { opacity: 0, y: reduce ? 0 : 24 },
      show: { opacity: 1, y: 0, transition: { duration: reduce ? 0.01 : 0.55, ease } }
    } satisfies Variants,
    scaleIn: {
      hidden: { opacity: 0, scale: reduce ? 1 : 0.96 },
      show: {
        opacity: 1,
        scale: 1,
        transition: reduce ? { duration: 0.01 } : { type: "spring", stiffness: 380, damping: 28 }
      }
    } satisfies Variants
  };
}

export function SectionAmbient({
  variant = "default",
  className = ""
}: {
  variant?: "hero" | "product" | "checkout" | "contact" | "default";
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const reduce = useReducedMotion();
  const palettes: Record<string, string> = {
    hero: "from-blue-500/20 via-sky-400/10 to-emerald-400/15",
    product: "from-blue-600/15 via-transparent to-emerald-500/10",
    checkout: "from-indigo-500/12 via-blue-400/8 to-emerald-400/12",
    contact: "from-blue-500/18 via-white to-emerald-400/12",
    default: "from-blue-500/10 via-transparent to-emerald-400/8"
  };
  const p = palettes[variant];
  const orbLoop = reduce ? undefined : { x: [0, 24, 0], y: [0, -18, 0] };
  const orbLoop2 = reduce ? undefined : { x: [0, -20, 0], y: [0, 14, 0] };

  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduce ? 0.01 : 1 }}
    >
      {/* Mesh multi-camada — leve, sem animação */}
      <div
        className="absolute inset-0 opacity-95"
        style={{
          backgroundImage: [
            `radial-gradient(at 10% 15%, rgba(59,130,246,0.14) 0px, transparent 45%)`,
            `radial-gradient(at 92% 18%, rgba(34,197,94,0.09) 0px, transparent 42%)`,
            `radial-gradient(at 48% 92%, rgba(59,130,246,0.1) 0px, transparent 48%)`,
            `radial-gradient(circle at 30% 22%, rgba(34,197,94,0.07) 0px, transparent 40%)`
          ].join(", ")
        }}
      />

      {/* Grade fina + diagonal suave (textura estilo SaaS) */}
      <div className="payle-ambient-dots absolute inset-0 opacity-[0.55]" />
      <div className="payle-ambient-diagonal absolute inset-0 opacity-[0.35] md:opacity-[0.45]" />

      {/* Mobile: orbes estáticos (scroll fluido) */}
      <div
        className={`absolute -left-[20%] top-[4%] h-[min(78vw,340px)] w-[min(78vw,340px)] rounded-full bg-gradient-to-br ${p} blur-3xl opacity-[0.82] md:hidden`}
      />
      <div
        className={`absolute -right-[14%] bottom-[6%] h-[min(70vw,300px)] w-[min(70vw,300px)] rounded-full bg-gradient-to-tl ${p} blur-3xl opacity-[0.78] md:hidden`}
      />

      {/* Desktop: orbes com movimento suave */}
      <motion.div
        className={`absolute -left-[20%] top-[5%] hidden h-[420px] w-[420px] rounded-full bg-gradient-to-br ${p} blur-3xl md:block`}
        animate={orbLoop}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute -right-[15%] bottom-[10%] hidden h-[360px] w-[360px] rounded-full bg-gradient-to-tl ${p} blur-3xl md:block`}
        animate={orbLoop2}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className={`absolute left-[28%] top-[42%] hidden h-[220px] w-[220px] rounded-full bg-gradient-to-tr ${p} blur-3xl opacity-70 lg:block`}
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.06, 1],
                opacity: [0.55, 0.72, 0.55]
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Ilustração geométrica SVG */}
      <svg className="absolute inset-0 h-full w-full text-blue-500/[0.14]" aria-hidden>
        <defs>
          <linearGradient id={`${id}-line`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`${id}-ring`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <circle
          cx="92%"
          cy="14%"
          r="120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 10"
          className="opacity-80"
        />
        <circle cx="8%" cy="72%" r="90" fill="none" stroke={`url(#${id}-ring)`} strokeWidth="1.5" className="opacity-90" />
        <path
          d="M 0 140 Q 320 90 640 150 T 1280 110"
          fill="none"
          stroke={`url(#${id}-line)`}
          strokeWidth="1"
          className="hidden sm:block"
        />
        <path
          d="M0 120 Q 400 80 800 140 T 1600 100"
          fill="none"
          stroke={`url(#${id}-line)`}
          strokeWidth="1"
          className="hidden lg:block"
        />
        <path
          d="M0 280 Q 500 240 1000 300"
          fill="none"
          stroke={`url(#${id}-line)`}
          strokeWidth="0.75"
          strokeOpacity="0.55"
          className="hidden lg:block"
        />
        <g className="opacity-60">
          <path d="M 88% 62 L 90% 62 M 89% 61 L 89% 63" stroke="currentColor" strokeWidth="0.75" />
          <path d="M 12% 28 L 14% 28 M 13% 27 L 13% 29" stroke="#22c55e" strokeWidth="0.75" />
          <path d="M 76% 82 L 78% 82 M 77% 81 L 77% 83" stroke="currentColor" strokeWidth="0.75" />
        </g>
      </svg>
    </motion.div>
  );
}

export function SectionHeader({
  kicker,
  title,
  lead,
  align = "left",
  children
}: {
  kicker?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  const t = payleTheme;
  const alignCls = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease }}
      className={alignCls}
    >
      {kicker && <p className={t.productKicker}>{kicker}</p>}
      <h2 className={`${kicker ? "mt-3" : ""} ${t.sectionTitle}`}>{title}</h2>
      {lead && <p className={`mt-4 ${t.bodyMuted} text-base sm:text-lg`}>{lead}</p>}
      {children}
    </motion.div>
  );
}

export function FloatingCard({
  children,
  className = "",
  delay = 0,
  float = true
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  float?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      animate={reduce || !float ? undefined : { y: [0, -6, 0] }}
      transition={
        reduce || !float
          ? { duration: 0.5, delay, ease }
          : {
              duration: 0.5,
              delay,
              ease,
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }
      }
      whileHover={reduce ? undefined : { y: -4, transition: { type: "spring", stiffness: 400, damping: 24 } }}
      className={`rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/[0.04] backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function MetricFloat({
  label,
  value,
  trend,
  className = ""
}: {
  label: string;
  value: string;
  trend?: string;
  className?: string;
}) {
  return (
    <FloatingCard className={`!p-3.5 ${className}`} delay={0.15}>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 font-mono text-lg font-semibold tabular-nums text-slate-900">{value}</p>
      {trend && (
        <p className="mt-1 flex items-center gap-1 text-xs font-medium text-emerald-600">
          <IconActivity className="h-3.5 w-3.5" />
          {trend}
        </p>
      )}
    </FloatingCard>
  );
}

export function SparklineCard({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const id = useId().replace(/:/g, "");
  return (
    <FloatingCard className={`!p-4 ${className}`} delay={0.25}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold text-slate-700">Receita aprovada</p>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
          +24%
        </span>
      </div>
      <svg viewBox="0 0 200 48" className="mt-3 h-12 w-full" aria-hidden>
        <defs>
          <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 40 L25 32 L50 36 L75 22 L100 28 L125 14 L150 18 L175 8 L200 12 L200 48 L0 48 Z"
          fill={`url(#${id}-fill)`}
        />
        <motion.path
          d="M0 40 L25 32 L50 36 L75 22 L100 28 L125 14 L150 18 L175 8 L200 12"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0.01 : 1.4, ease }}
        />
      </svg>
    </FloatingCard>
  );
}

export function TrustPill({
  children,
  variant = "default"
}: {
  children: ReactNode;
  /** Hero referência: pills verdes claras + texto verde escuro */
  variant?: "default" | "hero";
}) {
  const cls =
    variant === "hero"
      ? "inline-flex items-center gap-1.5 rounded-full border border-emerald-200/90 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-900 shadow-sm"
      : "inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm";
  return (
    <span className={cls}>
      <IconCheck className={`h-3.5 w-3.5 shrink-0 ${variant === "hero" ? "text-emerald-600" : "text-emerald-500"}`} />
      {children}
    </span>
  );
}

export function DashboardMockup({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const bars = [42, 68, 55, 82, 74, 91, 78];

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease }}
    >
      <motion.div
        className="absolute -right-6 top-8 z-20 hidden lg:block"
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <MetricFloat label="Pedidos hoje" value="847" trend="vs. ontem" />
      </motion.div>
      <motion.div
        className="absolute -left-4 bottom-16 z-20 hidden md:block"
        animate={reduce ? undefined : { y: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <SparklineCard />
      </motion.div>

      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_28px_70px_-32px_rgba(15,23,42,0.2)] ring-1 ring-slate-900/[0.04] backdrop-blur-md">
        <motion.div
          className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-4 py-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div className="flex items-center gap-2" whileHover={{ x: 2 }}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md shadow-blue-600/30">
              <IconWallet className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-900">Painel Payle</p>
              <p className="text-[10px] text-slate-500">Visão em tempo real</p>
            </div>
          </motion.div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
            Ao vivo
          </span>
        </motion.div>

        <div className="grid gap-3 p-4 sm:grid-cols-3">
          {[
            { l: "GMV", v: "R$ 2,4M" },
            { l: "Aprovação", v: "97,2%" },
            { l: "Recuperados", v: "R$ 84k" }
          ].map((stat, i) => (
            <motion.div
              key={stat.l}
              className="rounded-xl border border-slate-100 bg-gradient-to-b from-white to-slate-50/80 p-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -2, borderColor: "rgba(59,130,246,0.35)" }}
            >
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">{stat.l}</p>
              <p className="mt-1 font-mono text-sm font-semibold text-slate-900">{stat.v}</p>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-slate-100 px-4 pb-4">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Volume por dia
          </p>
          <div className="flex h-24 items-end justify-between gap-1.5">
            {bars.map((h, i) => (
              <motion.div key={i} className="flex h-full w-full max-w-[2rem] flex-col justify-end">
                <motion.div
                  className="w-full rounded-t-md bg-gradient-to-t from-blue-600 to-sky-400"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PayleSubpageHero({
  title,
  lead,
  kicker,
  variant = "default",
  accentWord,
  visualId,
  hideIllustration = false,
  tightMobileLayout = false,
  children
}: {
  title: string;
  lead: string;
  kicker?: string;
  variant?: "hero" | "product" | "checkout" | "contact" | "default";
  accentWord?: string;
  visualId: PayleNavVisualId;
  /** Coluna visual em branco (mantém a grade no desktop). */
  hideIllustration?: boolean;
  /** Espaçamentos mais compactos no mobile (ex.: hero com título longo). */
  tightMobileLayout?: boolean;
  children?: ReactNode;
}) {
  const t = payleTheme;
  const { reduce, ease } = usePayleMotion();

  const titleParts = (() => {
    if (!accentWord) return null;
    const idx = title.lastIndexOf(accentWord);
    // Sem correspondência: não fragmentar — o fallback usa o título inteiro em destaque
    if (idx < 0) return null;
    return {
      before: title.slice(0, idx).trimEnd(),
      accent: title.slice(idx).trim()
    };
  })();

  const mobilePad = tightMobileLayout ? "pb-12 pt-10" : "pb-16 pt-14";
  const mobileGap = tightMobileLayout ? "gap-6" : "gap-10";
  const leadGap = tightMobileLayout ? "mt-4 sm:mt-6" : "mt-6";
  const actionsGap = tightMobileLayout ? "mt-6 sm:mt-8" : "mt-8";

  return (
    <section
      className={`relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-white via-slate-50/40 to-white ${mobilePad} sm:pb-20 sm:pt-16`}
    >
      <SectionAmbient variant={variant} />
      <motion.div
        className={`relative mx-auto grid max-w-7xl items-center px-4 sm:gap-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,400px)] lg:gap-14 xl:gap-16 ${mobileGap}`}
        initial={{ opacity: 0, y: reduce ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={ease}
      >
        <div className="text-center lg:text-left">
          {kicker && <p className={t.productKicker}>{kicker}</p>}
          <h1
            className={`${kicker ? "mt-3" : ""} text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]`}
          >
            {titleParts ? (
              <>
                {titleParts.before ? <>{titleParts.before} </> : null}
                <span className={t.h1Pix}>{titleParts.accent}</span>
              </>
            ) : (
              <span className={t.h1Pix}>{title}</span>
            )}
          </h1>
          <p
            className={`mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0 ${leadGap}`}
          >
            {lead}
          </p>
          <div className={`lg:flex lg:justify-start ${actionsGap}`}>{children ?? <PayleSubpageActions />}</div>
        </div>

        <motion.div
          className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...ease, delay: reduce ? 0 : 0.08 }}
        >
          {hideIllustration ? (
            <div className="hidden min-h-[280px] w-full lg:block" aria-hidden />
          ) : (
            <div className="rounded-[1.75rem] border border-white/90 bg-white/75 p-4 shadow-[0_28px_60px_-28px_rgba(15,23,42,0.2)] ring-1 ring-slate-900/[0.05] backdrop-blur-xl sm:p-5">
              <PayleHeroIllustration variant={visualId} />
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

export function PayleSubpageActions() {
  const t = payleTheme;
  const { reduce } = usePayleMotion();

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12, duration: 0.5 }}
    >
      <motion.a
        href="/#contato"
        className={t.btnPrimary}
        whileHover={reduce ? undefined : { scale: 1.03, y: -1 }}
        whileTap={reduce ? undefined : { scale: 0.97 }}
      >
        Falar com o comercial
        <IconArrowRight className="h-4 w-4" />
      </motion.a>
      <motion.a
        href="/"
        className={t.btnSecondary}
        whileHover={reduce ? undefined : { scale: 1.02, borderColor: t.btnSecondaryHoverBorder }}
        whileTap={reduce ? undefined : { scale: 0.98 }}
      >
        Ir para o início
      </motion.a>
    </motion.div>
  );
}

export function PaylePageSection({
  id,
  className = "",
  variant = "default",
  children,
  innerClassName = ""
}: {
  id?: string;
  className?: string;
  variant?: "hero" | "product" | "checkout" | "contact" | "default";
  children: ReactNode;
  innerClassName?: string;
}) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      <SectionAmbient variant={variant} />
      <motion.div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 ${innerClassName}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function PaylePageLinks({
  links
}: {
  links: { href: string; label: string; accent?: boolean }[];
}) {
  const t = payleTheme;
  const { reduce } = usePayleMotion();

  return (
    <motion.div
      className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-slate-200/70 pt-10"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      {links.map((link, i) => (
        <motion.a
          key={`${link.href}-${link.label}-${i}`}
          href={link.href}
          className={`inline-flex items-center gap-2 text-sm font-semibold ${
            link.accent ? t.accent : "text-slate-600 transition-colors hover:text-blue-700"
          }`}
          whileHover={reduce ? undefined : { x: 3 }}
        >
          {link.label}
          <IconArrowRight className="h-4 w-4" />
        </motion.a>
      ))}
    </motion.div>
  );
}

export function StorySection({
  id,
  className = "",
  variant = "default",
  children,
  reverse = false
}: {
  id?: string;
  className?: string;
  variant?: "hero" | "product" | "checkout" | "contact" | "default";
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      <SectionAmbient variant={variant} />
        <motion.div
          className={`relative mx-auto max-w-7xl px-4 sm:px-6 ${reverse ? "[&_.story-grid]:lg:[direction:rtl] [&_.story-grid>*]:lg:[direction:ltr]" : ""}`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <div className="story-grid grid items-center gap-10 py-2 lg:grid-cols-2 lg:gap-16 lg:py-0 xl:gap-20">
            {children}
          </div>
        </motion.div>
    </section>
  );
}
