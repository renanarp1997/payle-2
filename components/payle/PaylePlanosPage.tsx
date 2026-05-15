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
import { IconArrowRight, IconLayers, IconSpark, IconTerminal } from "./PayleIcons";
import { PayleEditorialBanner, PayleEditorialGallery, type EditorialPhotoItem } from "./PayleEditorialPhotos";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const planosGalleryPhotos: EditorialPhotoItem[] = [
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=720&q=80",
    alt: "Dois profissionais revisando documentos — imagem ilustrativa",
    caption: "Contratos & escopo sob medida"
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=720&q=80",
    alt: "Equipe em alinhamento ao redor de quadro — imagem ilustrativa",
    caption: "Planejamento com o time comercial"
  }
];

const plans: {
  name: string;
  price: string;
  desc: string;
  highlight: boolean;
  Icon: SvgIcon;
}[] = [
  {
    name: "Starter",
    price: "Consulte",
    desc: "Ideal para validar oferta, primeiro funil e checkout em produção.",
    highlight: false,
    Icon: IconSpark
  },
  {
    name: "Scale",
    price: "Consulte",
    desc: "Mais volume, prioridade em suporte e pacote completo de tracking e recuperação.",
    highlight: true,
    Icon: IconLayers
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    desc: "Múltiplas marcas, SSO, SLAs, customizações de checkout, pixels e integrações dedicadas.",
    highlight: false,
    Icon: IconTerminal
  }
];

export function PaylePlanosPage() {
  const t = payleTheme;
  const { reduce, viewport, stagger, scaleIn } = usePayleMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: reduce ? 0 : 0.05 } }
  };

  return (
    <PayleSiteChrome>
      <PayleSubpageHero
        kicker="Planos"
        title="Planos Payle"
        accentWord="Payle"
        variant="default"
        visualId="planos"
        lead="Do primeiro funil ao volume corporativo: cada plano acompanha um estágio da operação — valores e limites são definidos com o time comercial, conforme escopo e necessidade."
      />

      <PaylePageSection className={t.sectionPlans} variant="default">
        <SectionHeader
          kicker="Escolha o estágio"
          title="Starter, Scale e Enterprise"
          lead="Cada faixa corresponde a um perfil de operação — da validação ao alto volume e requisitos enterprise."
          align="center"
        />

        <PayleEditorialBanner
          className="mx-auto mt-12 max-w-5xl"
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80"
          alt="Dois profissionais cumprimentando-se em ambiente corporativo — imagem ilustrativa"
          caption="Parceria comercial para definir plano, volume e suporte com transparência."
          showCredit={false}
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <PayleEditorialGallery photos={planosGalleryPhotos} columns={2} />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid items-stretch gap-6 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={scaleIn}
              whileHover={reduce ? undefined : { y: -8 }}
              className={plan.highlight ? t.planCardHi : t.planCard}
            >
              {plan.highlight && (
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  animate={reduce ? undefined : { backgroundPosition: ["0% 0%", "100% 100%"] }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                  style={{ backgroundImage: t.planHiShimmer, backgroundSize: "200% 200%" }}
                />
              )}
              <motion.div className={t.planIconBox} whileHover={reduce ? undefined : { rotate: 4 }}>
                <plan.Icon className="h-5 w-5" />
              </motion.div>
              <h3 className={t.planTitle}>{plan.name}</h3>
              <p className={t.planPrice}>{plan.price}</p>
              <p className={t.planDesc}>{plan.desc}</p>
              <motion.a
                href="/#contato"
                className={`relative mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-center text-sm font-semibold ${
                  plan.highlight ? t.planCtaHi : t.planCtaLo
                }`}
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                Falar sobre {plan.name}
                <IconArrowRight className="h-4 w-4 opacity-80" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <PaylePageLinks
          links={[
            { href: "/duvidas", label: "Dúvidas frequentes", accent: true },
            { href: "/recursos", label: "Ver recursos" }
          ]}
        />
      </PaylePageSection>
    </PayleSiteChrome>
  );
}
