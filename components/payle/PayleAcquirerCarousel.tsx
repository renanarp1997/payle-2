"use client";

import Image from "next/image";
import type { PayleAcquirer } from "./payleAcquirers";
import { usePayleMotion } from "./PayleVisuals";

const logoMaskStyle = {
  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
  maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
} as const;

function LogoCard({
  acquirer,
  labelled,
  inMarquee
}: {
  acquirer: PayleAcquirer;
  labelled: boolean;
  inMarquee?: boolean;
}) {
  return (
    <div
      className="flex h-14 min-w-[9rem] max-w-[10.5rem] shrink-0 items-center justify-center rounded-2xl border border-slate-200/85 bg-white px-4 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)] ring-1 ring-slate-900/[0.03] transition-shadow duration-300 sm:h-[3.75rem] sm:min-w-[10rem] sm:max-w-[11.5rem]"
      title={acquirer.name}
    >
      <Image
        src={acquirer.logoSrc}
        alt={labelled ? acquirer.name : ""}
        width={200}
        height={56}
        sizes="(max-width: 640px) 148px, 164px"
        draggable={false}
        className={`h-9 max-h-9 w-auto max-w-[9.25rem] select-none object-contain object-center sm:h-10 sm:max-h-10 motion-safe:transition-[filter,opacity] motion-safe:duration-500 motion-reduce:transition-none ${inMarquee ? "opacity-[0.88] saturate-[0.92] contrast-[1.02] motion-safe:group-hover/marquee:opacity-100 motion-safe:group-hover/marquee:saturate-100 motion-safe:group-hover/marquee:contrast-100" : "opacity-[0.92] saturate-[0.96]"}`}
      />
    </div>
  );
}

function TickerStrip({ acquirers, suffix }: { acquirers: PayleAcquirer[]; suffix: "a" | "b" }) {
  return (
    <div className="flex w-max shrink-0 items-center gap-6 px-6 sm:gap-9 sm:px-8 md:gap-11">
      {acquirers.map((a, i) => (
        <LogoCard key={`${suffix}-${i}-${a.name}`} acquirer={a} labelled={false} inMarquee />
      ))}
    </div>
  );
}

export function PayleAcquirerCarousel({ acquirers, className = "" }: { acquirers: PayleAcquirer[]; className?: string }) {
  const { reduce } = usePayleMotion();

  if (reduce) {
    return (
      <div
        className={`rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/70 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)] ring-1 ring-slate-900/[0.02] ${className}`}
      >
        <p id="payle-acquirers-desc" className="sr-only">
          Adquirentes com integração nativa: {acquirers.map((a) => a.name).join(", ")}.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start sm:gap-4">
          {acquirers.map((a, i) => (
            <div key={`still-${i}-${a.name}`} aria-describedby="payle-acquirers-desc">
              <LogoCard acquirer={a} labelled />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`group/marquee ${className}`}>
      <p className="sr-only">
        Adquirentes com integração nativa — faixa animada apresentando: {acquirers.map((a) => a.name).join(", ")}.
      </p>

      <div className="relative overflow-hidden rounded-2xl border border-slate-200/75 bg-gradient-to-b from-white via-white to-slate-50/[0.85] shadow-[0_14px_40px_-24px_rgba(15,23,42,0.12),inset_0_1px_0_0_rgba(255,255,255,0.92)] ring-1 ring-slate-900/[0.04]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-blue-200/55 to-transparent"
          aria-hidden
        />

        <div className="relative py-5 sm:py-6" style={logoMaskStyle}>
          <div
            className="flex w-max will-change-transform motion-safe:animate-payle-marquee motion-reduce:animate-none motion-safe:group-hover/marquee:[animation-play-state:paused]"
            aria-hidden
          >
            <TickerStrip acquirers={acquirers} suffix="a" />
            <TickerStrip acquirers={acquirers} suffix="b" />
          </div>
        </div>
      </div>
    </div>
  );
}
