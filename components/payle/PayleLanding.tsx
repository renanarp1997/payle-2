"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants
} from "framer-motion";
import { ComponentType, SVGProps, useEffect, useId, useState } from "react";
import { payleTheme } from "./payleTheme";
import {
  HeroGlowOrb,
  IconActivity,
  IconArrowRight,
  IconBolt,
  IconCheck,
  IconLayers,
  IconMail,
  IconPanel,
  IconPayleMark,
  IconPlug,
  IconSpark,
  IconTerminal
} from "./PayleIcons";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const nav = [
  { href: "#produto", label: "Produto" },
  { href: "#integracoes", label: "Integrações" },
  { href: "#recursos", label: "Recursos" },
  { href: "#checkout", label: "Checkout" },
  { href: "#planos", label: "Planos" },
  { href: "#duvidas", label: "Dúvidas" }
];

const faqs: { q: string; a: string }[] = [
  {
    q: "A Payle substitui meu adquirente ou gateway?",
    a: "Não. A Payle é um checkout que orquestra PIX, cartão e boleto na mesma experiência: o adquirente continua sendo o seu e você mantém a relação direta com o processador."
  },
  {
    q: "Quais processadores já conversam nativamente com a Payle?",
    a: "Há integração nativa com Asaas, Mercado Pago, PagSeguro, Efi, Stone, Cielo, Pagar.me, Appmax e Dom Pagamentos — sem gambiarra."
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

const integrationGroups: { title: string; body: string }[] = [
  { title: "E-commerce", body: "Shopify e WooCommerce para sua loja online." },
  {
    title: "Infoproduto standalone",
    body: "Modo independente para infoprodutores, com entrega automatizada de arquivos: PDF, vídeo e outros formatos após a confirmação do pagamento."
  },
  { title: "LMS", body: "Integração com a plataforma Educe." },
  { title: "ERPs", body: "Bling e Tiny para conciliar pedidos, estoque e financeiro com o checkout." }
];

const features: { title: string; body: string; Icon: SvgIcon }[] = [
  {
    title: "Seu gateway, sua conta",
    body: "A Payle é um checkout: o adquirente continua sendo o seu. Você conecta o gateway que já utiliza e mantém a relação direta com o processador.",
    Icon: IconPlug
  },
  {
    title: "Adquirentes nativos",
    body: "Integração nativa com Asaas, Mercado Pago, PagSeguro, Efi, Stone, Cielo, Pagar.me, Appmax e Dom Pagamentos — sem gambiarra.",
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

function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export function PayleLanding() {
  const t = payleTheme;
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const scrolled = useScrolled();
  const orbIdA = useId().replace(/:/g, "");
  const orbIdB = useId().replace(/:/g, "");

  const spring = reduce ? { duration: 0.01 } : { type: "spring" as const, stiffness: 380, damping: 28 };
  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };
  const stagger = reduce ? 0 : 0.07;

  const viewport = { once: true, margin: "-60px" as const };

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: reduce ? 0 : 0.05 } }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: ease }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.94 },
    show: { opacity: 1, scale: 1, transition: spring }
  };

  return (
    <div className={t.shell}>
      <div className={t.fixedRadial} aria-hidden />
      <div className={t.fixedGrid} aria-hidden />

      <motion.header
        layout
        className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
          scrolled ? t.headerScrolled : t.headerIdle
        }`}
      >
        <div className="mx-auto grid h-16 max-w-6xl grid-cols-[auto_1fr] items-center gap-2 px-4 sm:gap-3 sm:px-6 md:grid-cols-[auto_1fr_auto]">
          <motion.a
            href={t.homePath}
            className={`flex min-w-0 items-center gap-2 justify-self-start font-semibold tracking-tight ${t.logoWord}`}
            whileHover={reduce ? undefined : { scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${t.logoMark}`}>
              <IconPayleMark className="h-5 w-5" />
            </span>
            <span className="text-lg">
              pay<span className={t.logoAccent}>le</span>
            </span>
          </motion.a>

          <nav className="hidden min-w-0 justify-self-center md:col-start-2 md:flex md:flex-wrap md:justify-center md:gap-0.5">
            {nav.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`group relative px-2.5 py-2 sm:px-3 ${t.navLink}`}
                whileHover={reduce ? undefined : { y: -1 }}
              >
                {item.label}
                <span
                  className={`absolute bottom-1 left-2.5 right-2.5 h-px origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100 sm:left-3 sm:right-3 ${t.navUnderline}`}
                />
              </motion.a>
            ))}
          </nav>

          <div className="col-start-2 flex items-center justify-end gap-2 md:col-start-3 md:gap-3">
            <div className="hidden items-center gap-2 md:flex md:gap-3">
              <motion.a
                href="#contato"
                className={`inline-flex items-center gap-1 ${t.navGhost}`}
                whileHover={reduce ? undefined : { x: 2 }}
              >
                Falar com vendas
                <IconArrowRight className="h-4 w-4 opacity-70" />
              </motion.a>
              <motion.a
                href="#contato"
                className={`inline-flex items-center gap-1.5 ${t.navPrimary}`}
                whileHover={
                  reduce ? undefined : { scale: 1.04, boxShadow: t.navPrimaryHoverShadow }
                }
                whileTap={reduce ? undefined : { scale: 0.97 }}
              >
                Criar conta
                <IconArrowRight className="h-3.5 w-3.5 opacity-90" />
              </motion.a>
            </div>

            <motion.button
              type="button"
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border md:hidden ${t.mobileBtnBorder}`}
              aria-expanded={open}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
              whileTap={reduce ? undefined : { scale: 0.95 }}
            >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <motion.span
                className={`block h-0.5 w-5 ${t.mobileBurger}`}
                animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={spring}
              />
              <motion.span
                className={`block h-0.5 w-5 ${t.mobileBurger}`}
                animate={open ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className={`block h-0.5 w-5 ${t.mobileBurger}`}
                animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={spring}
              />
            </span>
          </motion.button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: reduce ? 0.01 : 0.28, ease: [0.22, 1, 0.36, 1] }}
              className={t.mobilePanel}
            >
              <nav className="flex flex-col gap-1 px-4 py-4">
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduce ? 0 : i * 0.05 }}
                    className={`rounded-lg px-3 py-2.5 text-sm ${t.mobileLink}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contato"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : nav.length * 0.05 }}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 ${t.mobileLink}`}
                  onClick={() => setOpen(false)}
                >
                  Falar com vendas
                </motion.a>
                <motion.a
                  href="#contato"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.12 }}
                  className={`mt-3 ${t.mobileCta}`}
                  onClick={() => setOpen(false)}
                >
                  Criar conta
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main>
        <section className="relative mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-8">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className={`order-2 min-w-0 lg:order-1 ${t.heroMaxWidth}`}
            >
              <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="flex shrink-0 -space-x-2.5" aria-hidden>
                  {(
                    [
                      { Icon: IconBolt, ring: "from-blue-700 to-blue-600" },
                      { Icon: IconLayers, ring: "from-blue-600 to-sky-500" },
                      { Icon: IconSpark, ring: "from-sky-500 to-blue-500" },
                      { Icon: IconTerminal, ring: "from-blue-800 to-indigo-700" }
                    ] as const
                  ).map(({ Icon, ring }, i) => (
                    <span
                      key={i}
                      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br ${ring} shadow-sm`}
                    >
                      <Icon className="h-4 w-4 text-white opacity-95" />
                    </span>
                  ))}
                </div>
                <p className="min-w-0 text-sm leading-snug text-slate-600">
                  {stats.map((s) => `${s.k} ${s.v}`).join(" · ")}
                </p>
              </motion.div>
              <motion.p variants={fadeUp} className={t.badge}>
                <motion.span
                  animate={reduce ? undefined : { rotate: [0, 12, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <IconSpark className={`h-4 w-4 ${t.badgeSpark}`} />
                </motion.span>
                Checkout — você mantém seu gateway
              </motion.p>
              <motion.h1 variants={fadeUp} className={t.h1}>
                O checkout conectado ao <span className={t.h1Pix}>seu</span> gateway, com integrações nativas e
                rastreamento avançado.
              </motion.h1>
              <motion.p variants={fadeUp} className={t.heroLead}>
                A Payle não substitui seu adquirente: ela orquestra PIX, cartão e boleto na mesma experiência, conecta
                Asaas, Mercado Pago, PagSeguro, Efi, Stone, Cielo, Pagar.me, Appmax e Dom Pagamentos, e ainda entrega
                arquivos automaticamente para infoprodutores — com pixels, supertracking e superrecuperação de carrinho
                dentro do funil.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                <motion.a
                  href="#contato"
                  className={t.btnPrimary}
                  whileHover={reduce ? undefined : { scale: 1.04 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                >
                  Começar agora
                  <IconArrowRight className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="#checkout"
                  className={t.btnSecondary}
                  whileHover={
                    reduce ? undefined : { scale: 1.02, borderColor: t.btnSecondaryHoverBorder }
                  }
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  <IconTerminal className={`h-4 w-4 ${t.accent}`} />
                  Checkout & tracking
                </motion.a>
              </motion.div>
            </motion.div>

            <div className={`order-1 w-full justify-self-center lg:order-2 lg:justify-self-end ${t.heroMockFrame}`}>
              <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                <motion.div
                  className="h-[18rem] w-[18rem] max-w-[95%] blur-3xl sm:h-[20rem] sm:w-[20rem]"
                  animate={
                    reduce
                      ? undefined
                      : { scale: [1, 1.06, 1], opacity: [0.4, 0.6, 0.4], rotate: [0, 6, 0] }
                  }
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                >
                  <HeroGlowOrb gradientId={orbIdA} palette={t.heroPalette} className="h-full w-full" />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...ease, delay: reduce ? 0 : 0.12 }}
                className="relative z-10 mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_16px_48px_-12px_rgba(15,23,42,0.12)]"
              >
                <div className="flex h-11 items-center gap-2 border-b border-slate-100 bg-slate-50/95 px-3">
                  <span className="flex gap-1.5" aria-hidden>
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                  </span>
                  <div className={`ml-1 flex min-w-0 items-center gap-1.5 text-xs font-semibold tracking-tight ${t.logoWord}`}>
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${t.logoMark}`}>
                      <IconPayleMark className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      pay<span className={t.logoAccent}>le</span>
                    </span>
                  </div>
                </div>
                <p className="bg-slate-900 py-1.5 text-center font-mono text-[10px] font-medium tracking-wide text-slate-300">
                  charge_approved
                </p>

                <div className="grid gap-4 p-4 sm:grid-cols-2 sm:gap-5 sm:p-5">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                      <IconCheck className={`h-4 w-4 shrink-0 ${t.accent}`} />
                      Dados pessoais
                    </div>
                    {(["Nome completo", "E-mail", "CPF", "Celular/WhatsApp"] as const).map((label) => (
                      <div key={label} className="space-y-1">
                        <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">{label}</p>
                        <div className="h-8 rounded-lg border border-slate-200 bg-slate-50/90" />
                      </div>
                    ))}
                    <div className="pointer-events-none flex items-center justify-center gap-1 rounded-lg bg-blue-600 py-2.5 text-xs font-semibold text-white shadow-sm">
                      Continuar
                      <IconArrowRight className="h-3.5 w-3.5 opacity-90" />
                    </div>
                    <div className="space-y-1.5 pt-1">
                      <div className="h-7 rounded-lg border border-dashed border-slate-200 bg-slate-50/50" />
                      <div className="h-7 rounded-lg border border-dashed border-slate-200 bg-slate-50/50" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3 sm:p-4">
                    <p className="text-xs font-semibold text-slate-900">Resumo do pedido</p>
                    <div className="flex gap-2">
                      <div className="h-8 min-w-0 flex-1 rounded-lg border border-slate-200 bg-white" />
                      <div className="shrink-0 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-[10px] font-medium text-slate-600">
                        Adicionar
                      </div>
                    </div>
                    <div className="space-y-2 text-[11px] text-slate-600">
                      <div className="flex items-center justify-between gap-2">
                        <span>Subtotal</span>
                        <span className="h-2 w-16 shrink-0 rounded bg-slate-200" aria-hidden />
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span>Frete</span>
                        <span className="h-2 w-12 shrink-0 rounded bg-slate-200" aria-hidden />
                      </div>
                      <div className="flex items-center justify-between gap-2 border-t border-slate-200 pt-2 text-xs font-semibold text-slate-900">
                        <span>Total</span>
                        <span className="h-2.5 w-20 shrink-0 rounded bg-slate-300" aria-hidden />
                      </div>
                    </div>
                    <div className="flex gap-2 border-t border-slate-200/80 pt-3">
                      <div className="h-12 w-12 shrink-0 rounded-lg border border-slate-200 bg-white shadow-sm" />
                      <div className="min-w-0 flex-1">
                        <p className={`truncate text-[11px] ${t.heroPixText}`}>PIX em segundos</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600" aria-hidden />
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-16 grid items-stretch gap-5 sm:grid-cols-3 sm:gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.k}
                variants={scaleIn}
                whileHover={
                  reduce ? undefined : { y: -4, borderColor: t.statHoverBorder, boxShadow: "0 12px 40px -12px rgba(15,23,42,0.08)" }
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
        </section>

        <section id="produto" className={t.sectionProduct}>
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-x-16 lg:gap-y-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={fadeUp}
              className="min-w-0 lg:max-w-xl lg:justify-self-start"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={t.productIconBox} aria-hidden>
                  <IconLayers className="h-5 w-5" />
                </div>
                <span className={t.productKicker}>Produto</span>
              </div>
              <h2 className={t.sectionTitle}>Checkout que conversa com o seu stack — sem trocar de adquirente</h2>
              <p className={t.productLead}>
                Monte páginas de pagamento com identidade da sua marca, conecte o gateway que já contratou e use
                integrações nativas com os principais processadores do Brasil. Para loja virtual, infoproduto, LMS ou
                ERP, a Payle fica na camada de checkout e entrega de conteúdo — você continua dono da liquidação.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: reduce ? 0 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={ease}
              className="relative flex justify-center lg:sticky lg:top-28 lg:justify-end"
            >
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center blur-3xl">
                <HeroGlowOrb gradientId={orbIdB} palette={t.heroPalette} className="h-52 w-52 opacity-45" />
              </div>
              <motion.svg
                viewBox="0 0 320 240"
                className={t.productSvg}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={ease}
              >
                <defs>
                  <linearGradient id={`${orbIdB}-panel`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
                    <stop offset="100%" stopColor="#f8fafc" stopOpacity="1" />
                  </linearGradient>
                  <filter id={`${orbIdB}-soft`} x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#1e3a8a" floodOpacity="0.12" />
                  </filter>
                </defs>
                <rect
                  x="14"
                  y="16"
                  width="292"
                  height="208"
                  rx="18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill={`url(#${orbIdB}-panel)`}
                  filter={`url(#${orbIdB}-soft)`}
                  opacity="0.95"
                />
                <rect x="14" y="16" width="292" height="36" rx="18" fill="currentColor" opacity="0.06" />
                <rect x="28" y="28" width="44" height="12" rx="4" fill="currentColor" opacity="0.2" />
                <rect x="248" y="30" width="44" height="8" rx="3" fill="currentColor" opacity="0.12" />
                <line x1="30" y1="62" x2="290" y2="62" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
                <rect x="32" y="74" width="128" height="9" rx="3" fill="currentColor" opacity="0.22" />
                <rect x="32" y="92" width="200" height="7" rx="2" fill="currentColor" opacity="0.12" />
                <rect x="32" y="108" width="168" height="7" rx="2" fill="currentColor" opacity="0.1" />
                <rect x="32" y="128" width="72" height="28" rx="6" fill="currentColor" opacity="0.06" />
                <rect x="112" y="128" width="72" height="28" rx="6" fill="currentColor" opacity="0.06" />
                <rect x="192" y="128" width="72" height="28" rx="6" fill="currentColor" opacity="0.06" />
                <motion.circle
                  cx="252"
                  cy="118"
                  r="22"
                  stroke={t.svg.productCircle}
                  strokeWidth="2"
                  fill="none"
                  animate={reduce ? undefined : { strokeDashoffset: [138, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                  style={{ strokeDasharray: 138 }}
                />
                <path
                  d="M240 118l8 8 16-16"
                  stroke={t.svg.productCheck}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <rect x="32" y="168" width="96" height="38" rx="10" fill={t.svg.productBtn} opacity="0.95" />
                <text
                  x="48"
                  y="193"
                  fill={t.svg.productBtnText}
                  fontSize="13"
                  fontWeight="700"
                  fontFamily="system-ui, sans-serif"
                >
                  Pagar
                </text>
                <rect x="200" y="176" width="88" height="22" rx="6" fill="currentColor" opacity="0.05" />
                <rect x="208" y="183" width="52" height="8" rx="2" fill="currentColor" opacity="0.12" />
              </motion.svg>
            </motion.div>
          </div>
        </section>

        <section id="integracoes" className={t.sectionIntegrations}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={ease}
              className="max-w-3xl"
            >
              <h2 className={t.sectionTitle}>Integrações nativas e ecossistema</h2>
              <p className={`mt-3 ${t.bodyMuted}`}>
                Conecte adquirentes, canais de venda e sistemas de gestão sem middleware improvisado. A lista abaixo
                reflete o que já conversa nativamente com a Payle hoje.
              </p>
            </motion.div>
            <div className="mt-10">
              <p className={t.integrationSubhead}>Adquirentes</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {psps.map((name) => (
                  <span key={name} className={t.integrationPill}>
                    {name}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 sm:gap-8">
              {integrationGroups.map((g) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={ease}
                  className={t.integrationCard}
                >
                  <h3 className="text-base font-semibold leading-snug tracking-tight text-slate-900">{g.title}</h3>
                  <p className={`mt-2 flex-1 text-sm leading-relaxed text-slate-600`}>{g.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="recursos" className={t.sectionRecursos}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <h2 className={t.sectionTitle}>Recursos</h2>
              <p className={t.recursosLead}>{t.copy.recursosTagline}</p>
            </div>
            <IconBolt className={t.recursosBolt} />
          </motion.div>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {features.map((f) => (
              <motion.li
                key={f.title}
                variants={fadeUp}
                whileHover={reduce ? undefined : { y: -6, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                className={t.featureCard}
              >
                <motion.div
                  className={t.featureGlow}
                  initial={{ opacity: 0.4, scale: 0.8 }}
                  whileHover={{ opacity: 0.85, scale: 1.1 }}
                />
                <div className={t.featureIconBox}>
                  <f.Icon className="h-6 w-6" />
                </div>
                <h3 className={t.featureTitle}>{f.title}</h3>
                <p className={t.featureBody}>{f.body}</p>
              </motion.li>
            ))}
          </motion.ul>
          </div>
        </section>

        <section id="checkout" className={t.sectionApi}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: reduce ? 0 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={ease}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={t.productIconBox} aria-hidden>
                    <IconTerminal className="h-5 w-5" />
                  </div>
                </div>
                <h2 className={t.sectionTitle}>Marketing e performance dentro do checkout</h2>
                <p className={`mt-3 ${t.bodyMuted}`}>
                  Além de processar pagamentos com o seu gateway, a Payle concentra os gatilhos de conversão na mesma
                  página: pixels avançados, supertracking e superrecuperação de carrinho trabalhando juntos.
                </p>
                <ul className={t.apiList}>
                  {[
                    "Pixels e tags configuráveis com granularidade avançada",
                    "Supertracking para acompanhar jornadas e atribuição com mais precisão",
                    "Superrecuperação de carrinho com automações focadas em retomar a compra"
                  ].map((text) => (
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
            </div>
          </div>
        </section>

        <section id="planos" className={t.sectionPlans}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="text-center"
          >
            <h2 className={t.sectionTitle}>Planos</h2>
            <p className={t.planLead}>
              Planos por estágio de maturidade do seu checkout. Valores e limites são alinhados com o time comercial
              conforme volume, integrações e necessidade de suporte.
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-12 grid items-stretch gap-6 lg:grid-cols-3"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={scaleIn}
                whileHover={reduce ? undefined : { y: -6 }}
                className={plan.highlight ? t.planCardHi : t.planCard}
              >
                {plan.highlight && (
                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-30"
                    animate={reduce ? undefined : { backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                    style={{
                      backgroundImage: t.planHiShimmer,
                      backgroundSize: "200% 200%"
                    }}
                  />
                )}
                <div className={t.planIconBox}>
                  <plan.Icon className="h-5 w-5" />
                </div>
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
                  Escolher {plan.name}
                  <IconArrowRight className="h-4 w-4 opacity-80" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </section>

        <section id="duvidas" className={t.sectionFaq}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={ease}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className={t.sectionTitle}>Dúvidas frequentes</h2>
              <p className={t.faqLead}>
                Respostas objetivas com base no que a Payle oferece hoje — gateway seu, checkout nosso, integrações
                nativas e performance no funil.
              </p>
            </motion.div>
            <div className="mx-auto mt-10 max-w-3xl">
              {faqs.map((item) => (
                <details key={item.q} className={t.faqDetails}>
                  <summary className={t.faqSummary}>
                    <span>{item.q}</span>
                    <IconArrowRight
                      className="h-4 w-4 shrink-0 text-blue-600 transition-transform duration-200 group-open:rotate-90"
                      aria-hidden
                    />
                  </summary>
                  <p className={t.faqAnswer}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className={t.sectionContact}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="mx-auto max-w-3xl px-4 text-center sm:px-6"
          >
            <motion.div
              className={t.contactIconBox}
              animate={
                reduce
                  ? undefined
                  : {
                      boxShadow: [t.contactPulse[0], t.contactPulse[1], t.contactPulse[2]]
                    }
              }
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <IconMail className="h-7 w-7" />
            </motion.div>
            <h2 className={t.sectionTitle}>Pronto para receber com a Payle?</h2>
            <p className={t.contactLead}>
              Deixe seu e-mail corporativo e retornamos com acesso ao sandbox e proposta comercial.
            </p>
            <motion.form
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
              onSubmit={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...ease, delay: reduce ? 0 : 0.1 }}
            >
              <motion.input
                type="email"
                required
                placeholder="voce@suaempresa.com.br"
                className={t.input}
                whileFocus={reduce ? undefined : { scale: 1.02 }}
              />
              <motion.button
                type="submit"
                className={t.submit}
                whileHover={reduce ? undefined : { scale: 1.04 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
              >
                Quero testar
                <IconArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.form>
            <p className={t.disclaimer}>Ao enviar, você concorda em receber contato da Payle sobre produtos e serviços.</p>
          </motion.div>
        </section>
      </main>

      <footer className={t.footer}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={ease}
          className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16"
        >
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2">
                <span className={`flex h-9 w-9 items-center justify-center rounded-md ${t.footerLogo}`}>
                  <IconPayleMark className="h-5 w-5" />
                </span>
                <span className={`text-lg ${t.footerBrand}`}>
                  pay<span className={t.footerAccent}>le</span>
                </span>
              </div>
              <p className={t.footerTagline}>
                Checkout conectado ao seu gateway — integrações nativas, tracking e recuperação no mesmo funil.
              </p>
            </div>
            <div>
              <p className={t.footerColTitle}>Mapa do site</p>
              <nav className="mt-4 flex flex-col gap-2.5" aria-label="Mapa do site">
                {nav.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={t.footerLink}
                    whileHover={reduce ? undefined : { x: 3 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>
            <div>
              <p className={t.footerColTitle}>Contato</p>
              <nav className="mt-4 flex flex-col gap-2.5" aria-label="Contato">
                <motion.a href="#contato" className={t.footerLink} whileHover={reduce ? undefined : { x: 3 }}>
                  Falar com vendas
                </motion.a>
                <motion.a href="#contato" className={t.footerLink} whileHover={reduce ? undefined : { x: 3 }}>
                  Criar conta / Sandbox
                </motion.a>
                <motion.a href="#planos" className={t.footerLink} whileHover={reduce ? undefined : { x: 3 }}>
                  Ver planos
                </motion.a>
              </nav>
            </div>
            <div>
              <p className={t.footerColTitle}>Legal</p>
              <nav className="mt-4 flex flex-col gap-2.5" aria-label="Legal">
                <motion.a href="#" className={t.footerLink} whileHover={reduce ? undefined : { x: 3 }}>
                  Termos
                </motion.a>
                <motion.a href="#" className={t.footerLink} whileHover={reduce ? undefined : { x: 3 }}>
                  Privacidade
                </motion.a>
                <motion.a href="#" className={t.footerLink} whileHover={reduce ? undefined : { x: 3 }}>
                  Status
                </motion.a>
              </nav>
            </div>
          </div>
          <div
            className={`mt-12 flex flex-col gap-3 border-t border-slate-200/80 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between ${t.footerCopy}`}
          >
            <span>© {new Date().getFullYear()} Payle. Todos os direitos reservados.</span>
            <span className="text-xs sm:text-sm">Checkout, integrações e rastreamento — você mantém seu adquirente.</span>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
