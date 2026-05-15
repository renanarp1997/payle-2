"use client";

import { payleDisplayedPlanPrices, paylePlanComparisonMatrix } from "./paylePlanModel";

function FeatureCell({ on, highlightColumn }: { on: boolean; highlightColumn?: boolean }) {
  if (on) {
    return (
      <span
        className={
          highlightColumn
            ? "inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-md bg-blue-600/18 px-2 text-blue-900 ring-1 ring-blue-500/30"
            : "inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-md bg-blue-50 px-2 text-blue-800 ring-1 ring-blue-200/90"
        }
        title="Disponível"
      >
        <span className="text-[15px] font-semibold leading-none">✓</span>
      </span>
    );
  }
  return (
    <span
      className={`text-lg font-medium ${highlightColumn ? "text-slate-500" : "text-slate-400"}`}
      title="Não incluso neste plano"
    >
      —
    </span>
  );
}

export function PaylePlanComparisonTable({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="mb-6 rounded-3xl border border-slate-200 bg-white px-6 py-5 sm:py-6">
        <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base">
          <span className="font-semibold text-slate-900">Somente operações remuneradas:</span> sem plano grátis, sem trial
          em destaque nesta página. O comparativo abaixo mostra apenas maturidade de produto entre faixas; valores e SLA
          fechados em canal comercial.
        </p>
      </div>

      <div className="rounded-[1.25rem] border border-slate-200/95 bg-slate-50/60 shadow-inner shadow-slate-900/[0.04] backdrop-blur-sm">
        <div className="overflow-x-auto scroll-smooth [scrollbar-width:thin] [scrollbar-color:rgba(148,163,184,0.6)_transparent]">
          <table className="relative w-full min-w-[38rem] border-separate border-spacing-0">
            <caption className="sr-only">
              Comparativo de recursos Starter, Scale e Enterprise
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="sticky left-0 z-20 whitespace-nowrap border-b border-slate-200 bg-white/98 px-4 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 shadow-[4px_0_16px_-8px_rgba(15,23,42,0.12)] sm:px-5 sm:py-5"
                >
                  Capacidades
                </th>
                <th
                  scope="col"
                  className="border-b border-slate-200 bg-white/95 px-3 py-4 text-center sm:px-5 sm:py-5"
                >
                  <span className="block text-[15px] font-semibold text-slate-900">Starter</span>
                  <span className="mt-1 block text-[12px] font-medium tracking-tight text-slate-600">
                    {payleDisplayedPlanPrices.starterMonthly}
                  </span>
                </th>
                <th
                  scope="col"
                  className="relative z-10 border-b border-blue-700/60 bg-gradient-to-br from-blue-600 to-blue-800 px-3 py-4 text-center shadow-[0_22px_48px_-28px_rgba(37,99,235,0.45)] ring-2 ring-blue-500/25 ring-inset sm:px-5 sm:py-5"
                >
                  <span className="pointer-events-none absolute -top-[11px] left-1/2 z-20 inline-flex max-w-[calc(100%-1.25rem)] -translate-x-1/2 truncate rounded-full bg-emerald-500 px-3 py-[3px] text-[9px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_6px_16px_-4px_rgba(5,150,105,0.55)]">
                    Mais escolhido
                  </span>
                  <span className="block text-[15px] font-semibold text-white">Scale</span>
                  <span className="mt-1 block text-[12px] font-medium tracking-tight text-blue-100">
                    {payleDisplayedPlanPrices.scaleMonthly}
                  </span>
                </th>
                <th scope="col" className="border-b border-slate-200 bg-white/95 px-3 py-4 text-center sm:px-5 sm:py-5">
                  <span className="block text-[15px] font-semibold text-slate-900">Enterprise</span>
                  <span className="mt-1 block text-[12px] font-medium tracking-tight text-slate-600">
                    {payleDisplayedPlanPrices.enterprise}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {paylePlanComparisonMatrix.map((row, i) => {
                const zebra = i % 2 === 1;
                const baseRow = zebra ? "bg-white/80" : "bg-white/95";
                const scaleTone = zebra ? "bg-blue-50/[0.55]" : "bg-blue-50/75";
                return (
                  <tr key={row.label} className="transition-colors duration-150 hover:bg-slate-50/90">
                    <th
                      scope="row"
                      className={`sticky left-0 z-10 whitespace-normal border-b border-slate-100 px-4 py-3.5 text-left text-[13px] font-medium leading-snug text-slate-800 shadow-[3px_0_12px_-8px_rgba(15,23,42,0.08)] sm:min-w-[12rem] sm:px-5 sm:py-4 sm:text-sm ${baseRow}`}
                    >
                      {row.label}
                    </th>
                    <td className={`border-b border-slate-100 px-3 py-3.5 text-center align-middle sm:px-5 sm:py-4 ${baseRow}`}>
                      <FeatureCell on={row.starter} />
                    </td>
                    <td
                      className={`border-b border-blue-100/80 px-3 py-3.5 text-center align-middle sm:px-5 sm:py-4 ${scaleTone}`}
                    >
                      <FeatureCell on={row.scale} highlightColumn />
                    </td>
                    <td className={`border-b border-slate-100 px-3 py-3.5 text-center align-middle sm:px-5 sm:py-4 ${baseRow}`}>
                      <FeatureCell on={row.enterprise} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-5 text-[13px] leading-relaxed text-slate-500">
        Upsell em 1-click, cashback e prioridades de canal podem exigir requisitos técnicos adicionais e estão sempre
        documentados antes da efetivação do contrato.
      </p>
    </div>
  );
}
