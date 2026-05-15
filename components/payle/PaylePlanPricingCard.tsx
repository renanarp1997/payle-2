"use client";

import { motion, type Variants } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import type { PaylePlanName } from "./paylePlanModel";
import { payleDisplayedPlanPrices, payleTheme } from "./payleTheme";
import { getPayleTierProfile } from "./paylePlanTierProfiles";
import { IconArrowRight } from "./PayleIcons";
import { usePayleMotion } from "./PayleVisuals";
import { payleCommercialWhatsAppUrl } from "./payleWhatsAppCommercial";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const labelClass = "text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500";

export function PaylePlanPricingCard({
  variants,
  name,
  monthlyDisplay,
  highlight,
  Icon,
  ctaHref = "#contato",
  ctaLabel,
  whatsappMessage,
  popularBadgeLabel
}: {
  variants?: Variants;
  name: PaylePlanName;
  monthlyDisplay: string;
  highlight: boolean;
  Icon: SvgIcon;
  ctaHref?: string;
  ctaLabel?: string;
  whatsappMessage?: string;
  /** Quando informado e `highlight`, substitui o texto padrão "Recomendado" no badge (ex.: "Mais escolhido"). */
  popularBadgeLabel?: string;
}) {
  const t = payleTheme;
  const { reduce } = usePayleMotion();
  const profile = getPayleTierProfile(name);
  const enterprise = monthlyDisplay === payleDisplayedPlanPrices.enterprise;

  const resolvedHref = whatsappMessage ? payleCommercialWhatsAppUrl(whatsappMessage) : ctaHref;
  const resolvedLabel = ctaLabel ?? "Falar com o comercial";
  const opensNewTab = resolvedHref.startsWith("http");

  const badgeText = highlight ? (popularBadgeLabel ?? "Recomendado") : null;

  const cardTone = highlight
    ? "rounded-[1.35rem] border border-blue-500/30 bg-gradient-to-b from-blue-50/90 via-white to-white shadow-[0_24px_64px_-32px_rgba(37,99,235,0.28)] ring-1 ring-blue-500/[0.12]"
    : "rounded-[1.35rem] border border-slate-200/95 bg-white/98 shadow-payle-card ring-1 ring-slate-900/[0.035]";

  return (
    <motion.article
      variants={variants}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={`relative flex h-full min-w-[min(100%,320px)] flex-col overflow-hidden p-8 backdrop-blur-[2px] sm:min-w-0 sm:p-9 ${cardTone}`}
    >
      {highlight && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          animate={reduce ? undefined : { backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          style={{ backgroundImage: t.planHiShimmer, backgroundSize: "200% 200%" }}
          aria-hidden
        />
      )}

      {badgeText && (
        <div className="absolute right-6 top-5 z-[1]">
          <span className="rounded-full border border-blue-200/95 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-blue-800 shadow-[0_1px_6px_-2px_rgba(37,99,235,0.25)]">
            {badgeText}
          </span>
        </div>
      )}

      <div className="relative flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <motion.div className={t.planIconBox} whileHover={reduce ? undefined : { rotate: 4 }}>
            <Icon className="h-5 w-5" />
          </motion.div>
        </div>

        <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-[1.375rem]">{name}</h3>

        <div className="mt-8 border-t border-slate-200/80 pt-7">
          {enterprise ? (
            <dl className="space-y-6">
              <div>
                <dt className={labelClass}>Investimento mensal</dt>
                <dd className={`mt-1.5 ${t.planPriceEnterprise}`}>{monthlyDisplay}</dd>
              </div>
              <div>
                <dt className={labelClass}>Taxas</dt>
                <dd className="mt-1.5 text-lg font-semibold tracking-tight text-slate-800">{profile.feePrimary}</dd>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600">{profile.feeSecondary}</dd>
              </div>
            </dl>
          ) : (
            <dl className="grid gap-8 sm:grid-cols-2">
              <div>
                <dt className={labelClass}>Mensalidade</dt>
                <dd className="mt-1.5 tabular-nums text-[1.65rem] font-semibold tracking-[-0.03em] text-slate-900">
                  {monthlyDisplay}
                </dd>
              </div>
              <div>
                <dt className={labelClass}>Taxa</dt>
                <dd className="mt-1.5 tabular-nums text-[1.65rem] font-semibold tracking-[-0.03em] text-slate-900">
                  {profile.feePrimary}
                </dd>
                <dd className="mt-2 text-[15px] font-semibold leading-snug tracking-tight text-slate-800">
                  {profile.feeSecondary}
                </dd>
              </div>
            </dl>
          )}
        </div>

        <p className="relative mt-8 border-t border-slate-100/90 pt-6 text-[15px] leading-relaxed tracking-tight text-slate-600">
          {profile.tagline}
        </p>

        <motion.a
          href={resolvedHref}
          target={opensNewTab ? "_blank" : undefined}
          rel={opensNewTab ? "noreferrer noopener" : undefined}
          className={`relative mt-9 inline-flex items-center justify-center gap-2 ${highlight ? t.planCtaHi : t.planCtaLo}`}
          whileHover={reduce ? undefined : { scale: 1.015 }}
          whileTap={reduce ? undefined : { scale: 0.985 }}
        >
          {resolvedLabel}
          <IconArrowRight className="h-4 w-4 opacity-80" aria-hidden />
        </motion.a>
      </div>
    </motion.article>
  );
}
