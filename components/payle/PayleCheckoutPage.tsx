"use client";

import { motion } from "framer-motion";
import { payleTheme } from "./payleTheme";
import { PayleSiteChrome } from "./PayleSiteChrome";
import {
  PaylePageLinks,
  PaylePageSection,
  PayleSubpageHero,
  SectionHeader,
  StorySection,
  usePayleMotion
} from "./PayleVisuals";
import { IconActivity, IconCheck, IconLayers, IconSpark, IconTerminal } from "./PayleIcons";
import { PayleEditorialGallery, type EditorialPhotoItem } from "./PayleEditorialPhotos";

const checkoutGalleryPhotos: EditorialPhotoItem[] = [
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=720&q=80",
    alt: "Equipe analisando telas em ambiente de trabalho — imagem ilustrativa",
    caption: "Growth & performance"
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=720&q=80",
    alt: "Dashboard com dados em tempo real — imagem ilustrativa",
    caption: "Atribuição e métricas"
  }
];

const checkoutBullets = [
  "Pixels e tags configuráveis com granularidade avançada",
  "Supertracking para acompanhar jornadas e atribuição com mais precisão",
  "Superrecuperação de carrinho com automações focadas em retomar a compra"
] as const;

export function PayleCheckoutPage() {
  const t = payleTheme;
  const { reduce, ease, fadeUp } = usePayleMotion();

  return (
    <PayleSiteChrome>
      <PayleSubpageHero
        kicker="Checkout"
        title="Checkout Payle"
        accentWord="Payle"
        variant="checkout"
        visualId="checkout"
        hideIllustration
        lead="Seu gateway permanece sob sua gestão; a página de pagamento integra marketing de forma nativa — pixels, jornadas e recuperação no mesmo fluxo, sem ferramenta paralela."
      />

      <StorySection className={t.sectionApi} variant="checkout" reverse>
        <motion.div
          initial={{ opacity: 0, x: reduce ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={ease}
          className="min-w-0"
        >
          <motion.div className="mb-4 flex items-center gap-3">
            <motion.div className={t.productIconBox} aria-hidden>
              <IconTerminal className="h-5 w-5" />
            </motion.div>
            <span className={t.integrationSubhead}>Performance no funil</span>
          </motion.div>
          <SectionHeader
            title="Marketing e performance dentro do checkout"
            lead="Além de processar pagamentos com o seu gateway, a Payle concentra os gatilhos de conversão na mesma página."
          />
          <ul className={t.apiList}>
            {checkoutBullets.map((text) => (
              <motion.li
                key={text}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={ease}
              >
                <IconCheck className={`mt-0.5 h-5 w-5 shrink-0 ${t.accent}`} />
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="relative hidden min-h-[260px] lg:block"
          aria-hidden
        />
      </StorySection>

      <PaylePageSection className={t.sectionIntegrations} variant="default">
        <SectionHeader
          kicker="Ambiente"
          title="Marketing e dados perto da decisão de compra"
          lead="O mesmo fluxo em que o pagamento é concluído é onde growth e produto enxergam o funil — imagens ilustrativas."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-4xl">
          <PayleEditorialGallery photos={checkoutGalleryPhotos} columns={2} />
        </div>
      </PaylePageSection>

      <PaylePageSection className="border-y border-slate-200/60 bg-white py-24 sm:py-32" variant="default">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={ease}
          className="mx-auto max-w-3xl rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-payle-card ring-1 ring-slate-900/[0.03] backdrop-blur-sm sm:p-8"
        >
          <h3 className="text-base font-semibold tracking-tight text-slate-900">Em síntese</h3>
          <p className={`mt-3 text-sm leading-relaxed sm:text-base ${t.bodyMuted}`}>
            O checkout deixa de ser apenas a etapa do cartão e passa a concentrar comprador, adquirente, campanhas e
            recuperação — com rastreio e automação no mesmo fluxo.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600">
            <span className="inline-flex items-center gap-1.5">
              <IconActivity className="h-4 w-4" aria-hidden />
              Tracking
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconSpark className="h-4 w-4" aria-hidden />
              Recuperação
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconLayers className="h-4 w-4" aria-hidden />
              Conversão
            </span>
          </div>
        </motion.div>
        <PaylePageLinks
          links={[
            { href: "/recursos", label: "Catálogo de recursos", accent: true },
            { href: "/planos", label: "Planos" }
          ]}
        />
      </PaylePageSection>
    </PayleSiteChrome>
  );
}
