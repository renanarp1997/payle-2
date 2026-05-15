"use client";

import { motion, type Variants } from "framer-motion";
import { ComponentType, SVGProps } from "react";
import { payleTheme } from "./payleTheme";
import { PayleSiteChrome } from "./PayleSiteChrome";
import {
  DashboardMockup,
  PaylePageLinks,
  PaylePageSection,
  PayleSubpageHero,
  SectionHeader,
  StorySection,
  usePayleMotion
} from "./PayleVisuals";
import {
  IconActivity,
  IconArrowRight,
  IconBolt,
  IconLayers,
  IconPanel,
  IconPlug,
  IconSpark,
  IconTerminal
} from "./PayleIcons";
import { PayleEditorialGallery, type EditorialPhotoItem } from "./PayleEditorialPhotos";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const produtoGalleryPhotos: EditorialPhotoItem[] = [
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=720&q=80",
    alt: "Profissional utilizando maquininha de cartão — imagem ilustrativa",
    caption: "Experiência no momento do pagamento"
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=720&q=80",
    alt: "Equipe colaborando em mesa de escritório — imagem ilustrativa",
    caption: "Produto & tecnologia alinhados"
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=720&q=80",
    alt: "Notebook exibindo métricas e gráficos — imagem ilustrativa",
    caption: "Indicadores próximos da conversão"
  }
];

const pillars: { title: string; body: string; Icon: SvgIcon }[] = [
  {
    title: "Seu gateway, sua conta",
    body: "A Payle é um checkout: o adquirente continua sendo o seu. Você conecta o gateway que já utiliza e mantém a relação direta com o processador.",
    Icon: IconPlug
  },
  {
    title: "Adquirentes nativos",
    body: "Integração nativa com Asaas, Mercado Pago, PagSeguro, Efi, Stone, Cielo, Pagar.me, Appmax e Dom Pagamentos — homologadas e mantidas pelo produto.",
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

export function PayleProdutoPage() {
  const t = payleTheme;
  const { reduce, viewport, stagger, fadeUp } = usePayleMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: reduce ? 0 : 0.05 } }
  };

  return (
    <PayleSiteChrome>
      <PayleSubpageHero
        kicker="Produto"
        title="Checkout Payle"
        accentWord="Payle"
        variant="product"
        visualId="produto"
        lead="Uma experiência de pagamento alinhada à sua marca entre comprador e adquirente — PIX, cartão e boleto em fluxo único, integrações que já fazem parte da sua operação e indicadores no ponto da conversão."
      />

      <StorySection className={t.sectionProduct} variant="product">
        <motion.div variants={fadeUp} className="min-w-0">
          <SectionHeader
            kicker="Visão geral"
            title="O que a Payle faz — e o que não substitui"
            lead="Contrato, taxas e suporte permanecem com o seu processador. A Payle orquestra a página de pagamento, as integrações com canais — loja, LMS e ERP — e os recursos de performance no checkout."
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <DashboardMockup />
        </motion.div>
      </StorySection>

      <PaylePageSection className={t.sectionRecursos} variant="default">
        <SectionHeader
          kicker="Pilares"
          title="Tudo que entra no produto"
          lead="Do gateway ao pixel: funcionalidades para operações que precisam de clareza comercial e indicadores confiáveis."
          align="center"
        />
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-8 grid items-stretch gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          {pillars.map((item) => (
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
            { href: "/checkout", label: "Experiência de checkout", accent: true },
            { href: "/integracoes", label: "Integrações" }
          ]}
        />
      </PaylePageSection>

      <PaylePageSection className={t.sectionRecursos} variant="default">
        <SectionHeader
          kicker="Contexto"
          title="Um checkout estável para quem vende todos os dias"
          lead="Da loja ao escritório: times que precisam de pagamentos confiáveis e visibilidade no funil — fotografias ilustrativas."
          align="center"
        />
        <div className="mx-auto mt-8 max-w-6xl sm:mt-12">
          <PayleEditorialGallery photos={produtoGalleryPhotos} columns={3} />
        </div>
      </PaylePageSection>

      <PaylePageSection className={t.sectionApi} variant="checkout">
        <div className="mx-auto max-w-3xl text-center">
          <div className={`mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${t.productIconBox}`}>
            <IconTerminal className="h-5 w-5" />
          </div>
          <SectionHeader
            title="Checkout, marketing e operação no mesmo lugar"
            lead="Pixels e tags configuráveis, supertracking e recuperação de carrinho no mesmo fluxo de pagamento — visibilidade de funil sem comprometer a experiência do comprador."
            align="center"
          />
          <motion.a
            href="/checkout"
            className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${t.accent}`}
            whileHover={reduce ? undefined : { x: 3 }}
          >
            Ver experiência de checkout
            <IconArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </PaylePageSection>
    </PayleSiteChrome>
  );
}
