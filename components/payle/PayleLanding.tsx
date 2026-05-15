"use client";

import { motion, type Variants } from "framer-motion";
import { ComponentType, ReactNode, SVGProps } from "react";
import Image from "next/image";
import { payleTheme } from "./payleTheme";
import { PayleLandingHero } from "./PayleLandingHero";
import { PayleSiteChrome } from "./PayleSiteChrome";
import {
  DashboardMockup,
  SectionAmbient,
  SectionHeader,
  StorySection,
  usePayleMotion
} from "./PayleVisuals";
import {
  IconArrowRight,
  IconBolt,
  IconCardLock,
  IconCheck,
  IconLayers,
  IconMail,
  IconPanel,
  IconPlug,
  IconSpark,
  IconSplit,
  IconTerminal
} from "./PayleIcons";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const faqs: { q: string; a: string }[] = [
  {
    q: "A Payle substitui meu adquirente ou gateway?",
    a: "Não. A Payle é uma camada de checkout que orquestra PIX, cartão e boleto na mesma jornada: o adquirente continua sendo o seu e o contrato permanece direto com o processador."
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
    a: "Os planos (Starter, Scale e Enterprise) acompanham o estágio do seu checkout. Valores e limites são alinhados com o time comercial conforme volume, integrações e necessidade de suporte."
  }
];

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

const contactHeroImage =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80";

const psps = [
  "Asaas",
  "Mercado Pago",
  "PagSeguro",
  "Efi",
  "Stone",
  "Cielo",
  "Pagar.me",
  "Appmax",
  "Dom Pagamentos"
] as const;

const integrationGroups: { title: string; body: string; Icon: SvgIcon }[] = [
  { title: "E-commerce", body: "Shopify e WooCommerce para sua loja online.", Icon: IconLayers },
  {
    title: "Infoproduto standalone",
    body: "Modo independente para infoprodutores, com entrega automatizada de arquivos após a confirmação do pagamento.",
    Icon: IconSpark
  },
  { title: "LMS", body: "Integração com a plataforma Educe.", Icon: IconPanel },
  { title: "ERPs", body: "Bling e Tiny para conciliar pedidos, estoque e financeiro com o checkout.", Icon: IconSplit }
];

const features: { title: string; body: string; Icon: SvgIcon }[] = [
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
    body: "Shopify e WooCommerce para e-commerce; fluxo standalone para infoprodutores com liberação automática de conteúdo.",
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
    Icon: IconCardLock
  },
  {
    title: "Superrecuperação",
    body: "Superrecuperação de carrinho e jornadas automáticas para trazer o comprador de volta com menos fricção.",
    Icon: IconSpark
  }
];

const stats: { k: string; v: string; d: string; Icon: SvgIcon }[] = [
  {
    k: "PSPs nativos",
    v: "9",
    d: "Asaas, Mercado Pago, PagSeguro, Efi, Stone, Cielo, Pagar.me, Appmax e Dom Pagamentos.",
    Icon: IconBolt
  },
  {
    k: "Onde você vende",
    v: "4+",
    d: "Shopify, WooCommerce, Educe (LMS), Bling e Tiny — além do modo standalone para infoproduto.",
    Icon: IconLayers
  },
  {
    k: "Entrega",
    v: "Auto",
    d: "Arquivos e conteúdos liberados automaticamente após o pagamento aprovado.",
    Icon: IconSpark
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
    desc: "Para estruturar oferta, funil inicial e checkout em produção com governança.",
    highlight: false,
    Icon: IconSpark
  },
  {
    name: "Scale",
    price: "Consulte",
    desc: "Maior volume, prioridade de suporte e pacote completo de tracking e recuperação.",
    highlight: true,
    Icon: IconLayers
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    desc: "Múltiplas marcas, SSO, SLAs, personalização de checkout, pixels e integrações dedicadas.",
    highlight: false,
    Icon: IconTerminal
  }
];

function SectionLink({ href, children }: { href: string; children: ReactNode }) {
  const t = payleTheme;
  const { reduce } = usePayleMotion();
  return (
    <motion.a
      href={href}
      className={`mt-8 inline-flex items-center gap-1.5 text-sm font-semibold ${t.accent} underline decoration-blue-600/25 underline-offset-4 transition-colors hover:decoration-blue-600`}
      whileHover={reduce ? undefined : { x: 3 }}
    >
      {children}
      <IconArrowRight className="h-4 w-4" />
    </motion.a>
  );
}

export function PayleLanding() {
  const t = payleTheme;
  const { reduce, viewport, stagger, fadeUp, scaleIn, ease } = usePayleMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: reduce ? 0 : 0.05 } }
  };

  return (
    <PayleSiteChrome>
      <section className="relative overflow-x-hidden overflow-y-visible bg-white pb-24 pt-12 sm:pb-32 sm:pt-16 lg:pb-36 lg:pt-20">
        <PayleLandingHero />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-16 grid gap-5 sm:grid-cols-3 sm:gap-6 sm:mt-20 lg:mt-24"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.k}
                variants={scaleIn}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -6,
                        borderColor: t.statHoverBorder,
                        boxShadow: "0 20px 50px -20px rgba(37,99,235,0.15), 0 0 0 1px rgba(34,197,94,0.08)"
                      }
                }
                className={t.statCard}
              >
                <stat.Icon className={`mb-3 h-7 w-7 ${t.accent}`} />
                <p className={t.statLabel}>{stat.k}</p>
                <p className={t.statValue}>{stat.v}</p>
                <p className={t.statDesc}>{stat.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Produto */}
      <StorySection id="produto" className={t.sectionProduct} variant="product">
        <motion.div variants={fadeUp} className="min-w-0">
          <SectionHeader
            kicker="Produto"
            title="Sua tecnologia no comando; a Payle no momento do pagamento"
            lead="Você mantém gateway e liquidação; a Payle entrega a experiência que reforça confiança — com integrações nativas para loja, infoproduto, LMS e ERP."
          />
          <SectionLink href="/produto">Conheça o produto</SectionLink>
        </motion.div>
        <motion.div variants={fadeUp} className="relative">
          <DashboardMockup />
        </motion.div>
      </StorySection>

      {/* Operação */}
      <section id="operacao" className="relative overflow-hidden border-y border-slate-200/60 bg-white py-24 sm:py-32">
        <SectionAmbient variant="default" />
        <motion.div
          className="relative mx-auto max-w-7xl px-4 sm:px-6"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={container}
        >
          <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
            <SectionHeader
              kicker="Operação real"
              title="Feito para operações que faturam todos os dias"
              lead="E-commerce, educação, infoproduto e back-office: times que precisam de checkout estável, rastreamento consistente e integrações auditáveis."
            />
            <SectionLink href="/operacao">Conheça casos de operação</SectionLink>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {operationGallery.map((item, i) => (
              <motion.figure
                key={item.src}
                variants={fadeUp}
                custom={i}
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
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
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
          <p className="mt-8 text-center text-[11px] text-slate-400 lg:text-left">
            Imagens ilustrativas ·{" "}
            <a
              href="https://unsplash.com/?utm_source=payle&utm_medium=referral"
              className="underline decoration-slate-300 underline-offset-2 hover:text-slate-600"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash
            </a>
          </p>
        </motion.div>
      </section>

      {/* Integrações */}
      <section id="integracoes" className={`relative overflow-hidden ${t.sectionIntegrations}`}>
        <SectionAmbient variant="default" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            kicker="Ecossistema"
            title="Integrações nativas — sem camadas paralelas"
            lead="Adquirentes, canais de venda e sistemas de gestão conectados à Payle com contratos de integração claros desde o primeiro dia."
          />
          <SectionLink href="/integracoes">Ver ecossistema de integrações</SectionLink>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="mt-12"
          >
            <p className={t.integrationSubhead}>Adquirentes</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {psps.map((name, i) => (
                <motion.span
                  key={name}
                  className={t.integrationPill}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduce ? 0 : i * 0.03 }}
                  whileHover={reduce ? undefined : { y: -2, borderColor: "rgba(59,130,246,0.4)" }}
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6"
          >
            {integrationGroups.map((g) => (
              <motion.div
                key={g.title}
                variants={fadeUp}
                whileHover={reduce ? undefined : { y: -4 }}
                className={t.integrationCard}
              >
                <div className={t.featureIconBox}>
                  <g.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{g.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{g.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className={`relative overflow-hidden ${t.sectionRecursos}`}>
        <SectionAmbient variant="product" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            kicker="Recursos"
            title="O que importa para converter — reunido no checkout"
            lead={t.copy.recursosTagline}
          />
          <SectionLink href="/recursos">Explorar recursos</SectionLink>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
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
        </div>
      </section>

      {/* Checkout */}
      <StorySection id="checkout" className={t.sectionApi} variant="checkout" reverse>
        <motion.div variants={fadeUp} className="min-w-0">
          <SectionHeader
            kicker="Conversão"
            title="Marketing e performance dentro do checkout"
            lead="Pixels e tags configuráveis, supertracking da jornada e recuperação de carrinho — na mesma página em que o pagamento é concluído."
          />
          <ul className={t.apiList}>
            {[
              "Pixels e tags configuráveis com granularidade avançada",
              "Supertracking para jornadas e atribuição com mais precisão",
              "Superrecuperação de carrinho com automações focadas em retomar a compra"
            ].map((text) => (
              <motion.li
                key={text}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={ease}
              >
                <IconCheck className={`mt-0.5 h-5 w-5 shrink-0 ${t.accent}`} />
                {text}
              </motion.li>
            ))}
          </ul>
          <SectionLink href="/checkout">Detalhes da experiência de checkout</SectionLink>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="relative hidden min-h-[260px] max-w-lg justify-self-center lg:block lg:max-w-none"
          aria-hidden
        />
      </StorySection>

      {/* Planos */}
      <section id="planos" className={`relative overflow-hidden ${t.sectionPlans}`}>
        <SectionAmbient variant="default" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeader
              kicker="Planos"
              title="Escale conforme a maturidade da operação"
              lead="Planos alinhados ao estágio do seu checkout: valores e escopo são definidos com o time comercial, conforme volume, integrações e suporte."
              align="center"
            />
            <SectionLink href="/planos">Comparar planos</SectionLink>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-14 grid gap-6 lg:grid-cols-3"
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
                  href="#contato"
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
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className={`relative overflow-hidden ${t.sectionFaq}`}>
        <motion.div
          className="relative mx-auto max-w-7xl px-4 sm:px-6"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={container}
        >
          <motion.div variants={fadeUp} className="mx-auto max-w-2xl text-center">
            <SectionHeader
              kicker="Dúvidas"
              title="Perguntas que produto, finanças e operações costumam trazer"
              lead="Respostas objetivas e alinhadas ao escopo atual da Payle — transparência antes da decisão."
              align="center"
            />
            <SectionLink href="/duvidas">Central de perguntas frequentes</SectionLink>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl">
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
          </div>
        </motion.div>
      </section>

      {/* Contato */}
      <section id="contato" className={`relative overflow-hidden ${t.sectionContact}`}>
        <SectionAmbient variant="contact" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={ease}
              className="text-center lg:text-left"
            >
              <motion.div
                className={`mx-auto lg:mx-0 ${t.contactIconBox}`}
                animate={
                  reduce
                    ? undefined
                    : { boxShadow: [t.contactPulse[0], t.contactPulse[1], t.contactPulse[2]] }
                }
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <IconMail className="h-7 w-7" />
              </motion.div>
              <h2 className={`mt-6 ${t.sectionTitle}`}>Validar o checkout com a identidade da sua marca?</h2>
              <p className={`${t.contactLead} lg:mx-0`}>
                Informe seu e-mail corporativo. Retornamos com próximos passos, ambiente de avaliação quando aplicável
                e proposta alinhada ao seu volume e às integrações necessárias.
              </p>
              <motion.form
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
                onSubmit={(e) => e.preventDefault()}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...ease, delay: reduce ? 0 : 0.1 }}
              >
                <motion.input
                  type="email"
                  required
                  placeholder="nome.sobrenome@empresa.com.br"
                  className={t.input}
                  whileFocus={reduce ? undefined : { scale: 1.02 }}
                />
                <motion.button
                  type="submit"
                  className={t.submit}
                  whileHover={reduce ? undefined : { scale: 1.04 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                >
                  Solicitar retorno
                  <IconArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.form>
              <p className={`mt-5 ${t.disclaimer}`}>
                Ao enviar, você autoriza o contato da equipe Payle sobre produtos e serviços, conforme sua solicitação.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ ...ease, delay: reduce ? 0 : 0.08 }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-white/80 bg-slate-100 shadow-payle-card ring-1 ring-slate-900/[0.04] lg:max-w-none"
            >
              <Image
                src={contactHeroImage}
                alt="Duas pessoas cumprimentando em ambiente de trabalho — imagem ilustrativa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-blue-900/10"
                animate={reduce ? undefined : { opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-xl">
                <p className="text-sm font-medium text-white drop-shadow-sm">
                  Atendimento comercial com consultores dedicados ao seu projeto
                </p>
                <p className="mt-1 text-xs text-white/75">Foto ilustrativa · Unsplash</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PayleSiteChrome>
  );
}
