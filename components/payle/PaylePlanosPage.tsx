"use client";

import { motion, type Variants } from "framer-motion";
import { FormEvent, useState, type ComponentType, type SVGProps } from "react";
import type { PaylePlanName } from "./paylePlanModel";
import { payleDisplayedPlanPrices, payleTheme } from "./payleTheme";
import { PaylePlanComparisonTable } from "./PaylePlanComparisonTable";
import { PaylePlanPricingCard } from "./PaylePlanPricingCard";
import { PayleSiteChrome } from "./PayleSiteChrome";
import { IconArrowRight, IconLayers, IconSpark, IconTerminal } from "./PayleIcons";
import {
  PaylePageSection,
  PayleSubpageHero,
  SectionHeader,
  usePayleMotion
} from "./PayleVisuals";
import { payleCommercialWhatsAppUrl } from "./payleWhatsAppCommercial";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const planCtaByTier: Record<PaylePlanName, { label: string; message: string }> = {
  Starter: {
    label: "Começar agora",
    message:
      "Olá! Vi a página de planos e quero começar com o Starter (R$149/mês + 2% sobre transações aprovadas). Podemos avançar?"
  },
  Scale: {
    label: "Escalar minhas vendas",
    message:
      "Olá! Quero escalar minhas vendas com o plano Scale (R$499/mês + 1,5% sobre transações aprovadas). Podemos conversar?"
  },
  Enterprise: {
    label: "Falar com especialista",
    message:
      "Olá! Gostaria de falar com um especialista sobre o plano Enterprise, com taxas e operações personalizadas para alto volume."
  }
};

const planTiers: {
  name: PaylePlanName;
  price: string;
  highlight: boolean;
  Icon: SvgIcon;
}[] = [
  { name: "Starter", price: payleDisplayedPlanPrices.starterMonthly, highlight: false, Icon: IconSpark },
  { name: "Scale", price: payleDisplayedPlanPrices.scaleMonthly, highlight: true, Icon: IconLayers },
  { name: "Enterprise", price: payleDisplayedPlanPrices.enterprise, highlight: false, Icon: IconTerminal }
];

const valueProps = [
  {
    title: "Maior conversão",
    body: "Checkout otimizado para concluir compras com menos fricção e mais clareza no pagamento."
  },
  {
    title: "Menos abandono",
    body: "Fluxo confiável e mensagens coerentes no momento da decisão — menos carrinho parado."
  },
  {
    title: "Melhor aprovação",
    body: "Estrutura pensada para reduzir ruído operacional e melhorar a taxa de sucesso no adquirente."
  },
  {
    title: "Integração enxuta",
    body: "Menos dependências improvisadas: ligamos pixels, gateways e operação no mesmo desenho."
  },
  {
    title: "Resultado em escala",
    body: "Do crescimento à governança: métricas e suporte alinhados ao que importa para o CFO e para o e-commerce."
  }
] as const;

function PlanosWhatsAppLead() {
  const t = payleTheme;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parts = [
      name.trim() && `Meu nome é ${name.trim()}.`,
      phone.trim() && `Meu telefone é ${phone.trim()}.`,
      "Gostaria de falar sobre os planos Payle."
    ].filter(Boolean) as string[];
    const message = parts.join(" ");
    window.open(payleCommercialWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="whatsapp-lead"
      aria-labelledby="whatsapp-lead-title"
      className="border-t border-slate-200/60 bg-gradient-to-b from-blue-50/50 via-white to-emerald-50/20 py-14 sm:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className={t.productKicker}>Contato imediato</p>
          <h2 id="whatsapp-lead-title" className={`mt-3 ${t.sectionTitle}`}>
            Fale com o time no WhatsApp
          </h2>
          <p className={`mt-4 ${t.bodyMuted} text-base sm:text-lg`}>
            Deixe seus dados e abrimos a conversa já com contexto. Resposta comercial, sem fila de suporte genérica.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-8 max-w-lg rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-[0_24px_55px_-44px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/[0.04] sm:mt-10 sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="planos-wa-name" className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Nome
              </label>
              <input
                id="planos-wa-name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                required
                placeholder="Como podemos te chamar?"
                className={`mt-2 w-full max-w-full rounded-xl sm:max-w-none ${t.input}`}
              />
            </div>
            <div>
              <label htmlFor="planos-wa-phone" className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Telefone
              </label>
              <input
                id="planos-wa-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={phone}
                onChange={(ev) => setPhone(ev.target.value)}
                required
                placeholder="DDD + número"
                className={`mt-2 w-full max-w-full rounded-xl sm:max-w-none ${t.input}`}
              />
            </div>
          </div>
          <button type="submit" className={`${t.submit} mt-8 w-full justify-center`}>
            Falar no WhatsApp
          </button>
          <p className={`${t.disclaimer} mt-4 text-center`}>
            Ao continuar, você será redirecionado para o WhatsApp com uma mensagem pré-preenchida.
          </p>
        </form>
      </div>
    </section>
  );
}

export function PaylePlanosPage() {
  const t = payleTheme;
  const { reduce, viewport, stagger, scaleIn } = usePayleMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: reduce ? 0 : 0.06 } }
  };

  const genericWa = payleCommercialWhatsAppUrl(
    "Olá! Acessei a página de planos da Payle e gostaria de falar com o comercial."
  );

  return (
    <PayleSiteChrome>
      <div className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <PayleSubpageHero
          kicker="Planos"
          title="Infraestrutura de checkout para marcas que vendem em escala"
          accentWord="escala"
          variant="default"
          visualId="planos"
          tightMobileLayout
          lead={`Mensalidades acessíveis na entrada (${payleDisplayedPlanPrices.starterMonthly} ou ${payleDisplayedPlanPrices.scaleMonthly}), com modelo que reflete volumetria nas taxas de transação. Sem plano gratuito visível aqui — alinhamos tudo diretamente no comercial antes de ligar produção.`}
        />

        <PaylePageSection
          className="border-y border-slate-200/60 bg-white py-12 sm:py-32"
          variant="default"
        >
          <SectionHeader
            kicker="Por que a Payle importa"
            title="Resultados operacionais, não só recursos isolados"
            lead="O checkout é onde a margem aparece ou desaparece. Deixamos a página clara para o cliente e previsível para o seu time financeiro e de growth."
            align="center"
          />

          <div className="mt-8 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-5">
            {valueProps.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: reduce ? 0.01 : 0.42, delay: reduce ? 0 : idx * 0.06 }}
                className={t.featureCard}
              >
                <p className="relative text-base font-semibold leading-snug tracking-tight text-slate-900">{item.title}</p>
                <p className={t.featureBody}>{item.body}</p>
                <span
                  className="mt-4 h-px w-8 bg-gradient-to-r from-blue-600 to-emerald-500 transition-[width] duration-300 group-hover:w-12"
                  aria-hidden
                />
              </motion.div>
            ))}
          </div>
        </PaylePageSection>

        <PaylePageSection
          className="border-y border-slate-200/60 bg-gradient-to-b from-slate-50/90 to-white py-12 sm:py-32"
          variant="default"
        >
          <SectionHeader
            kicker="Investimento"
            title="Três perfis claros para alinhar crescimento e governança"
            lead="Escolha o ponto de partida pelo perfil da operação. Ajustamos detalhes de taxas e SLA com transparência — sempre em canal comercial."
            align="center"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-8 flex gap-6 overflow-x-auto scroll-smooth pb-2 pl-[max(0px,calc(env(safe-area-inset-left)))] [-ms-overflow-style:none] [scrollbar-width:thin] snap-x snap-mandatory sm:mt-14 md:grid md:gap-8 md:overflow-visible md:pb-0 md:pl-0 lg:grid-cols-3 [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-400/55"
          >
            {planTiers.map((plan) => (
              <div
                key={plan.name}
                className={`min-w-[min(340px,calc(100vw-3rem))] shrink-0 snap-center sm:min-w-[300px] md:min-w-0 ${
                  plan.highlight ? "lg:-mt-3 lg:mb-[-0.75rem]" : ""
                }`}
              >
                <PaylePlanPricingCard
                  variants={scaleIn}
                  name={plan.name}
                  monthlyDisplay={plan.price}
                  highlight={plan.highlight}
                  Icon={plan.Icon}
                  popularBadgeLabel={plan.highlight ? "Mais escolhido" : undefined}
                  whatsappMessage={planCtaByTier[plan.name].message}
                  ctaLabel={planCtaByTier[plan.name].label}
                />
              </div>
            ))}
          </motion.div>

          <div className="mx-auto mt-8 max-w-2xl text-center sm:mt-24">
            <SectionHeader
              kicker="Comparativo"
              title="O que cada plano entrega para o seu e-commerce"
              lead="Visão rápida de maturidade de produto. Detalhes comerciais e contratuais fechamos no WhatsApp."
              align="center"
            />
          </div>
          <PaylePlanComparisonTable className="mt-8 sm:mt-14" />
        </PaylePageSection>

        <PlanosWhatsAppLead />

        <PaylePageSection className="border-t border-slate-200/60 bg-slate-50/40 py-10 sm:py-16" variant="default">
          <div className="flex justify-center border-t border-slate-200/70 pt-8 sm:pt-10">
            <a
              href="/duvidas"
              className={`inline-flex items-center gap-2 text-sm font-semibold ${t.footerLink}`}
            >
              Dúvidas frequentes
              <IconArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </PaylePageSection>
      </div>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 pb-[env(safe-area-inset-bottom)] md:hidden">
        <div className="pointer-events-auto border-t border-slate-200/90 bg-white/92 px-4 py-3 shadow-[0_-12px_40px_-28px_rgba(15,23,42,0.15)] backdrop-blur-md supports-[backdrop-filter]:bg-white/78">
          <a
            href={genericWa}
            target="_blank"
            rel="noreferrer noopener"
            className={`flex w-full items-center justify-center ${t.mobileCta}`}
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </PayleSiteChrome>
  );
}
