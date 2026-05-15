"use client";

import type { PayleAcquirer } from "./payleAcquirers";
import { usePayleMotion } from "./PayleVisuals";

function LogoCard({ acquirer, labelled }: { acquirer: PayleAcquirer; labelled: boolean }) {
  return (
    <div className="flex h-[52px] w-[148px] shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-white/90 px-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:w-[164px]">
      <img
        src={acquirer.logoSrc}
        alt={labelled ? acquirer.name : ""}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="h-8 w-auto max-h-8 max-w-[8.75rem] select-none object-contain object-center"
      />
    </div>
  );
}

function TickerStrip({ acquirers, suffix }: { acquirers: PayleAcquirer[]; suffix: "a" | "b" }) {
  return (
    <div className="flex w-max items-center gap-10 px-4 sm:gap-14 sm:px-6 md:gap-16">
      {acquirers.map((a, i) => (
        <LogoCard key={`${suffix}-${i}-${a.name}`} acquirer={a} labelled={false} />
      ))}
    </div>
  );
}

export function PayleAcquirerCarousel({ acquirers, className = "" }: { acquirers: PayleAcquirer[]; className?: string }) {
  const { reduce } = usePayleMotion();

  if (reduce) {
    return (
      <div className={`flex flex-wrap items-center justify-start gap-4 sm:gap-5 ${className}`}>
        <p id="payle-acquirers-desc" className="sr-only">
          Adquirentes com integração nativa: {acquirers.map((a) => a.name).join(", ")}.
        </p>
        {acquirers.map((a, i) => (
          <div key={`still-${i}-${a.name}`} aria-describedby="payle-acquirers-desc">
            <LogoCard acquirer={a} labelled />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="sr-only">
        Adquirentes com integração nativa — faixa animada apresentando: {acquirers.map((a) => a.name).join(", ")}.
      </p>
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/40 py-3 shadow-inner shadow-slate-900/[0.03] backdrop-blur-[2px]">
        <div
          className="flex w-max motion-safe:animate-payle-marquee motion-reduce:animate-none"
          aria-hidden
        >
          <TickerStrip acquirers={acquirers} suffix="a" />
          <TickerStrip acquirers={acquirers} suffix="b" />
        </div>
      </div>
    </div>
  );
}
