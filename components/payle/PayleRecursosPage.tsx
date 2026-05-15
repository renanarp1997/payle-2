"use client";

import { motion, type Variants } from "framer-motion";
import { ComponentType, SVGProps } from "react";
import { payleTheme } from "./payleTheme";
import { PayleSiteChrome } from "./PayleSiteChrome";
import {
  PaylePageLinks,
  PaylePageSection,
  PayleSubpageHero,
  SectionHeader,
  usePayleMotion
} from "./PayleVisuals";
import {
  IconActivity,
  IconBolt,
  IconLayers,
  IconPanel,
  IconPlug,
  IconSpark
} from "./PayleIcons";
import { PayleEditorialGallery, type EditorialPhotoItem } from "./PayleEditorialPhotos";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const recursosGalleryPhotos: EditorialPhotoItem[] = [
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=720&q=80",
    alt: "Equipe celebrando em escritório — imagem ilustrativa",
    caption: "Colaboração entre áreas"
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=720&q=80",
    alt: "Profissional focado em notebook em coworking — imagem ilustrativa",
    caption: "Operação orientada a resultado"
  },
  {
    src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=720&q=80",
    alt: "Sala de reunião com apresentação em tela — imagem ilustrativa",
    caption: "Governança & visibilidade"
  }
];

const features: { title: string; body: string; Icon: SvgIcon }[] = [
  {
    title: "Seu gateway, sua conta",
    body: "A Payle é um checkout: o adquirente continua sendo o seu. Você conecta o gateway que já utiliza e mantém a relação direta com o processador.",
    Icon: IconPlug
  },
  {
    title: "Adquirentes nativos",
    body: "Integração nativa com Asaas, Mercado Pago, PagSeguro, Efi, Stone, Cielo, Pagar.me, Appmax e Dom Pagamentos — homologadas no produto.",
    Icon: IconBolt
  },
  {
    title: "Loja e infoproduto",
    body: "Shopify e WooCommerce para e-commerce; fluxo standalone para infoprodutores com liberação automática de conteúdo (PDF, vídeo e mais).",
    Icon: IconLayers
  },
  {
    title: "LMS e ERPs",
    body: "Conecte a Educe para cursos e membros. Bling e Tiny entram no mesmo ecossistema para operação e back-office.",
    Icon: IconPanel
  },
  {
    title: "Pixels e supertracking",
    body: "Controles de pixel avançados e supertracking para enxergar atribuição e funil direto dentro do checkout.",
    Icon: IconActivity
  },
  {
    title: "Superrecuperação",
    body: "Superrecuperação de carrinho e jornadas automáticas para trazer o comprador de volta com menos fricção.",
    Icon: IconSpark
  }
];

export function PayleRecursosPage() {
  const t = payleTheme;
  const { reduce, viewport, stagger, fadeUp } = usePayleMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: reduce ? 0 : 0.05 } }
  };

  return (
    <PayleSiteChrome>
      <PayleSubpageHero
        kicker="Recursos"
        title="Recursos Payle"
        accentWord="Payle"
        variant="product"
        visualId="recursos"
        lead={t.copy.recursosTagline}
      />

      <PaylePageSection className={t.sectionRecursos} variant="default">
        <SectionHeader
          kicker="Catálogo"
          title="O que entra no checkout com a Payle"
          lead="Do gateway ao pixel: recursos para conciliar operação e marketing mensurável na mesma página de checkout."
          align="center"
        />

        <div className="mx-auto mt-14 max-w-6xl">
          <PayleEditorialGallery photos={recursosGalleryPhotos} columns={3} />
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.li
              key={f.title}
              variants={fadeUp}
              whileHover={reduce ? undefined : { y: -6 }}
              className={t.featureCard}
            >
              <motion.div
                className={t.featureGlow}
                animate={reduce ? undefined : { opacity: [0.35, 0.65, 0.35] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div className={t.featureIconBox} whileHover={reduce ? undefined : { scale: 1.05 }}>
                <f.Icon className="h-6 w-6" />
              </motion.div>
              <h3 className={t.featureTitle}>{f.title}</h3>
              <p className={t.featureBody}>{f.body}</p>
            </motion.li>
          ))}
        </motion.ul>

        <PaylePageLinks
          links={[
            { href: "/integracoes", label: "Ver integrações", accent: true },
            { href: "/checkout", label: "Página de checkout" }
          ]}
        />
      </PaylePageSection>
    </PayleSiteChrome>
  );
}
