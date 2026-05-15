"use client";

import { motion } from "framer-motion";
import { payleDisplayedPlanPrices, payleTheme } from "./payleTheme";
import { PayleSiteChrome } from "./PayleSiteChrome";
import {
  PaylePageLinks,
  PaylePageSection,
  PayleSubpageHero,
  SectionHeader,
  usePayleMotion
} from "./PayleVisuals";
import { IconArrowRight } from "./PayleIcons";
import { PayleEditorialGallery, type EditorialPhotoItem } from "./PayleEditorialPhotos";

const duvidasGalleryPhotos: EditorialPhotoItem[] = [
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=720&q=80",
    alt: "Profissional sorrindo em ambiente de escritório — imagem ilustrativa",
    caption: "Suporte & esclarecimentos"
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
    alt: "Profissional em ambiente corporativo — imagem ilustrativa",
    caption: "Confiança na decisão"
  }
];

const faqs: { q: string; a: string }[] = [
  {
    q: "A Payle substitui meu adquirente ou gateway?",
    a: "Não. A Payle é um checkout que orquestra PIX, cartão e boleto na mesma experiência: o adquirente continua sendo o seu e você mantém a relação direta com o processador."
  },
  {
    q: "Quais processadores já conversam nativamente com a Payle?",
    a: "Há integração nativa com Asaas, Mercado Pago, PagSeguro, Efi, Stone, Cielo, Pagar.me, Appmax e Dom Pagamentos — todas homologadas no produto."
  },
  {
    q: "Onde posso usar o checkout Payle?",
    a: "Na loja virtual com Shopify e WooCommerce; em modo standalone para infoprodutores; no LMS com a Educe; e nos ERPs Bling e Tiny — com entrega automática de arquivos após o pagamento aprovado quando aplicável."
  },
  {
    q: "O que são pixels, supertracking e superrecuperação?",
    a: "São recursos de marketing e performance na mesma página de checkout: pixels e tags configuráveis com granularidade avançada, supertracking para jornadas e atribuição, e superrecuperação de carrinho com automações para retomar a compra."
  },
  {
    q: "Como funcionam planos e valores?",
    a: `Starter (${payleDisplayedPlanPrices.starterMonthly}) e Scale (${payleDisplayedPlanPrices.scaleMonthly}) combinam mensalidade e faixas de taxa sobre transação (referências ilustrativas na página de planos e no comparativo). O ganho costuma estar na negociação da taxa frente ao adquirente atual. Sem plano gratuito self-service. Enterprise sob consulta (SSO, SLAs e multi-marca).`
  }
];

export function PayleDuvidasPage() {
  const t = payleTheme;
  const { reduce, fadeUp, viewport } = usePayleMotion();

  return (
    <PayleSiteChrome>
      <PayleSubpageHero
        kicker="FAQ"
        title="Dúvidas frequentes"
        accentWord="frequentes"
        variant="default"
        visualId="duvidas"
        lead="Perguntas frequentes para quem avalia checkout e gateway — respostas objetivas, em linguagem clara e alinhadas ao escopo atual da Payle."
      />

      <PaylePageSection className={t.sectionFaq} variant="default">
        <SectionHeader
          title="Perguntas e respostas"
          lead="Abra cada item para ver o detalhe. Para cenários específicos, o time comercial orienta no contato."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <PayleEditorialGallery photos={duvidasGalleryPhotos} columns={2} />
        </div>

        <motion.div
          className="mx-auto mt-14 max-w-3xl"
          variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.06 } } }}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {faqs.map((item) => (
            <motion.div key={item.q} variants={fadeUp} whileHover={reduce ? undefined : { y: -2 }}>
              <details className={t.faqDetails}>
                <summary className={t.faqSummary}>
                  <span>{item.q}</span>
                  <IconArrowRight
                    className="h-4 w-4 shrink-0 text-blue-600 transition-transform duration-200 group-open:rotate-90"
                    aria-hidden
                  />
                </summary>
                <p className={t.faqAnswer}>{item.a}</p>
              </details>
            </motion.div>
          ))}
        </motion.div>

        <PaylePageLinks
          links={[
            { href: "/planos", label: "Ver planos", accent: true },
            { href: "/integracoes", label: "Integrações" }
          ]}
        />
      </PaylePageSection>
    </PayleSiteChrome>
  );
}
