"use client";

import { motion, type Variants } from "framer-motion";
import { ComponentType, SVGProps } from "react";
import Image from "next/image";
import { payleTheme } from "./payleTheme";
import { PayleSiteChrome } from "./PayleSiteChrome";
import {
  PaylePageLinks,
  PaylePageSection,
  PayleSubpageHero,
  SectionHeader,
  usePayleMotion
} from "./PayleVisuals";
import { IconBolt, IconLayers, IconSpark } from "./PayleIcons";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const operationGallery: { src: string; alt: string; caption: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80",
    alt: "Profissional em ambiente corporativo — imagem ilustrativa",
    caption: "E-commerce & marca"
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=720&q=80",
    alt: "Executivo em escritório — imagem ilustrativa",
    caption: "Operação & financeiro"
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=720&q=80",
    alt: "Equipe em reunião — imagem ilustrativa",
    caption: "Produto & tecnologia"
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=720&q=80",
    alt: "Pessoas analisando dados em notebook — imagem ilustrativa",
    caption: "Growth & performance"
  }
];

const operationAngles: { title: string; body: string; Icon: SvgIcon }[] = [
  {
    title: "E-commerce & marca",
    body: "Time de loja e marketing precisa de checkout estável, identidade da marca e métricas confiáveis — sem camadas improvisadas em pixel ou gateway.",
    Icon: IconLayers
  },
  {
    title: "Operação & financeiro",
    body: "Conciliação, chargeback e previsibilidade de caixa: integração com ERPs como Bling e Tiny para o back-office acompanhar o fluxo originado no checkout.",
    Icon: IconBolt
  },
  {
    title: "Growth & performance",
    body: "Funil e recuperação na mesma experiência: supertracking de jornadas e recuperação de carrinho para equipes orientadas por KPI que precisam visibilidade até o pagamento.",
    Icon: IconSpark
  }
];

export function PayleOperacaoPage() {
  const t = payleTheme;
  const { reduce, viewport, stagger, fadeUp, ease } = usePayleMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: reduce ? 0 : 0.05 } }
  };

  return (
    <PayleSiteChrome>
      <PayleSubpageHero
        kicker="Operação"
        title="Operação real"
        accentWord="real"
        variant="default"
        visualId="operacao"
        lead="Para operações que dependem de pedidos, campanhas e conciliação diárias — da loja ao ERP, incluindo lançamentos e educação online."
      />

      <PaylePageSection className="border-y border-slate-200/60 bg-white py-24 sm:py-32" variant="default">
        <SectionHeader
          kicker="Quem usa"
          title="Feito para quem vende todo dia — não só para o slide da reunião"
          lead="Loja, lançamento, curso ou ERP: perfis que costumam integrar gateway, checkout e rastreamento com a Payle. Fotografias ilustrativas (Unsplash)."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {operationGallery.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: reduce ? 0 : i * 0.06 }}
              whileHover={reduce ? undefined : { y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-payle-card ring-1 ring-slate-900/[0.03]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <motion.div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent opacity-80" />
                <motion.div
                  className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/20 bg-white/15 px-3 py-2 backdrop-blur-md"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduce ? 0 : 0.1 + i * 0.05 }}
                >
                  <p className="text-xs font-semibold text-white">{item.caption}</p>
                </motion.div>
              </div>
            </motion.figure>
          ))}
        </div>
        <p className="mt-8 text-center text-[11px] text-slate-400">
          Imagens:{" "}
          <a
            href="https://unsplash.com/?utm_source=payle&utm_medium=referral"
            className="underline decoration-slate-300 underline-offset-2 hover:text-slate-600"
            target="_blank"
            rel="noreferrer"
          >
            Unsplash
          </a>
        </p>
      </PaylePageSection>

      <PaylePageSection className={t.sectionIntegrations} variant="product">
        <SectionHeader
          kicker="Como encaixa no time"
          title="Três ângulos que aparecem em toda implementação"
          align="center"
        />
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid items-stretch gap-5 sm:grid-cols-3 sm:gap-6"
        >
          {operationAngles.map((item) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              whileHover={reduce ? undefined : { y: -6 }}
              className={t.featureCard}
            >
              <motion.div
                className={t.featureGlow}
                animate={reduce ? undefined : { opacity: [0.35, 0.65, 0.35] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className={t.featureIconBox}>
                <item.Icon className="h-6 w-6" />
              </div>
              <h3 className={t.featureTitle}>{item.title}</h3>
              <p className={t.featureBody}>{item.body}</p>
            </motion.li>
          ))}
        </motion.ul>
        <PaylePageLinks
          links={[
            { href: "/integracoes", label: "Página de integrações", accent: true },
            { href: "/planos", label: "Planos e escala" }
          ]}
        />
      </PaylePageSection>
    </PayleSiteChrome>
  );
}
