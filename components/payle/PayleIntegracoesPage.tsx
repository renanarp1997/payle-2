"use client";

import { motion, type Variants } from "framer-motion";
import { PayleAcquirerCarousel } from "./PayleAcquirerCarousel";
import { payleAcquirers } from "./payleAcquirers";
import { payleTheme } from "./payleTheme";
import { PayleSiteChrome } from "./PayleSiteChrome";
import {
  PaylePageLinks,
  PaylePageSection,
  PayleSubpageHero,
  SectionHeader,
  usePayleMotion
} from "./PayleVisuals";
import { PayleEditorialGallery, type EditorialPhotoItem } from "./PayleEditorialPhotos";

const integracoesGalleryPhotos: EditorialPhotoItem[] = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=720&q=80",
    alt: "Profissionais em mesa de trabalho com notebooks — imagem ilustrativa",
    caption: "Times integrados"
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=720&q=80",
    alt: "Reunião em escritório moderno — imagem ilustrativa",
    caption: "Back-office & operações"
  },
  {
    src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=720&q=80",
    alt: "Desenvolvedor em frente a código em telas — imagem ilustrativa",
    caption: "Integração técnica nativa"
  }
];

const integrationGroups: { title: string; body: string }[] = [
  { title: "E-commerce", body: "Shopify e WooCommerce para sua loja online." },
  {
    title: "Infoproduto standalone",
    body: "Modo independente para infoprodutores, com entrega automatizada de arquivos após a confirmação do pagamento."
  },
  { title: "LMS", body: "Integração com a plataforma Educe." },
  { title: "ERPs", body: "Bling e Tiny para conciliar pedidos, estoque e financeiro com o checkout." }
];

export function PayleIntegracoesPage() {
  const t = payleTheme;
  const { reduce, viewport, stagger, fadeUp, ease } = usePayleMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: reduce ? 0 : 0.05 } }
  };

  return (
    <PayleSiteChrome>
      <PayleSubpageHero
        kicker="Ecossistema"
        title="Integrações nativas"
        accentWord="nativas"
        variant="product"
        visualId="integracoes"
        lead="Menos retrabalho em planilhas e integrações manuais: processadores, loja, LMS e ERP já se conectam à Payle — você habilita o que utiliza e mantém o ritmo da operação."
      />

      <PaylePageSection className={t.sectionIntegrations} variant="product">
        <SectionHeader
          title="Integrações nativas e ecossistema"
          lead="Lista atual do que já possui integração nativa com a Payle: processadores, lojas, LMS, ERPs e modo standalone para infoproduto."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={ease}
          className="mx-auto mt-12 max-w-3xl text-center"
        >
          <p className={t.integrationSubhead}>Adquirentes</p>
          <PayleAcquirerCarousel acquirers={payleAcquirers} className="mt-6 w-full max-w-5xl lg:mx-auto lg:mt-5" />
        </motion.div>

        <div className="mx-auto mt-16 max-w-6xl">
          <SectionHeader
            kicker="Ambientes"
            title="Onde as integrações fazem diferença no dia a dia"
            lead="Da área técnica ao comercial: ecossistemas que conversam com o checkout sem retrabalho manual — imagens ilustrativas."
            align="center"
          />
          <div className="mt-10">
            <PayleEditorialGallery photos={integracoesGalleryPhotos} columns={3} />
          </div>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6"
        >
          {integrationGroups.map((g) => (
            <motion.li
              key={g.title}
              variants={fadeUp}
              whileHover={reduce ? undefined : { y: -4 }}
              className={t.integrationCard}
            >
              <h3 className="text-base font-semibold leading-snug tracking-tight text-slate-900">{g.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{g.body}</p>
            </motion.li>
          ))}
        </motion.ul>

        <PaylePageLinks
          links={[
            { href: "/produto", label: "Página do produto", accent: true },
            { href: "/recursos", label: "Página de recursos" }
          ]}
        />
      </PaylePageSection>
    </PayleSiteChrome>
  );
}
