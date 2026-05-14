export type HeroPalette = "white-blue";

export interface PayleTheme {
  id: "branco-azul";
  homePath: string;
  heroPalette: HeroPalette;
  /** Classes Tailwind */
  shell: string;
  fixedRadial: string;
  fixedGrid: string;
  headerIdle: string;
  headerScrolled: string;
  logoMark: string;
  logoWord: string;
  logoAccent: string;
  navLink: string;
  navUnderline: string;
  navGhost: string;
  navPrimary: string;
  navPrimaryHoverShadow: string;
  mobileBtnBorder: string;
  mobileBurger: string;
  mobilePanel: string;
  mobileLink: string;
  mobileCta: string;
  heroMaxWidth: string;
  /** Moldura externa do mockup de checkout no hero */
  heroMockFrame: string;
  heroPixText: string;
  badge: string;
  badgeSpark: string;
  h1: string;
  h1Pix: string;
  heroLead: string;
  btnPrimary: string;
  btnSecondary: string;
  btnSecondaryHoverBorder: string;
  statCard: string;
  statHoverBorder: string;
  statLabel: string;
  statValue: string;
  statDesc: string;
  sectionProduct: string;
  sectionIntegrations: string;
  integrationPill: string;
  integrationSubhead: string;
  productKicker: string;
  sectionTitle: string;
  productLead: string;
  bodyMuted: string;
  apiList: string;
  productSvg: string;
  productPanelFill: string;
  recursosLead: string;
  recursosBolt: string;
  featureCard: string;
  featureGlow: string;
  featureIconBox: string;
  featureTitle: string;
  featureBody: string;
  sectionApi: string;
  planLead: string;
  planCard: string;
  planCardHi: string;
  planHiShimmer: string;
  planTitle: string;
  planPrice: string;
  planDesc: string;
  planCtaHi: string;
  planCtaLo: string;
  sectionContact: string;
  contactIconBox: string;
  contactPulse: [string, string, string];
  contactLead: string;
  input: string;
  submit: string;
  disclaimer: string;
  footer: string;
  footerLogo: string;
  footerBrand: string;
  footerAccent: string;
  footerCopy: string;
  footerLink: string;
  /** Ícones e destaques em cor de marca */
  accent: string;
  /** SVG / motion */
  svg: {
    heroRing: string;
    heroCheck: string;
    productCircle: string;
    productCheck: string;
    productBtn: string;
    productBtnText: string;
  };
  copy: {
    recursosTagline: string;
  };
}

const brancoAzul: PayleTheme = {
  id: "branco-azul",
  homePath: "/",
  heroPalette: "white-blue",
  shell: "min-h-screen bg-slate-50 text-slate-900",
  fixedRadial:
    "pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-10%,rgba(59,130,246,0.12),transparent_55%)] motion-safe:animate-payle-pulse-glow",
  fixedGrid:
    "pointer-events-none fixed inset-0 bg-[length:64px_64px] bg-[position:0_0] bg-[linear-gradient(rgba(59,130,246,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.07)_1px,transparent_1px)] opacity-60 motion-safe:animate-payle-grid-drift",
  headerIdle: "border-slate-200/90 bg-white/80",
  headerScrolled: "border-slate-200 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.08)]",
  logoMark:
    "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-[0_0_20px_rgba(37,99,235,0.35)]",
  logoWord: "text-lg text-slate-900",
  logoAccent: "text-blue-600",
  navLink: "text-sm text-slate-600 transition-colors hover:text-blue-600",
  navUnderline: "bg-blue-600",
  navGhost: "text-sm text-slate-600 transition hover:text-slate-900",
  navPrimary:
    "rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(37,99,235,0.25)]",
  navPrimaryHoverShadow: "0 0 28px rgba(59,130,246,0.45)",
  mobileBtnBorder: "border-slate-200",
  mobileBurger: "bg-slate-700",
  mobilePanel: "overflow-hidden border-t border-slate-200 bg-white md:hidden",
  mobileLink: "text-sm text-slate-800 hover:bg-slate-100",
  mobileCta: "rounded-full bg-blue-600 py-2.5 text-center text-sm font-medium text-white",
  heroMaxWidth: "relative z-10 w-full max-w-3xl lg:max-w-xl xl:max-w-2xl",
  heroMockFrame:
    "relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100/35 p-2 shadow-[0_24px_64px_-20px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.03] sm:p-3",
  heroPixText: "text-xs font-semibold text-slate-900",
  badge:
    "mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700",
  badgeSpark: "text-blue-600",
  h1: "text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl",
  h1Pix: "bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent",
  heroLead: "mt-6 max-w-xl text-lg text-slate-600",
  btnPrimary: "inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white",
  btnSecondary:
    "inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 hover:border-blue-400 hover:text-blue-700",
  btnSecondaryHoverBorder: "rgba(59,130,246,0.45)",
  statCard:
    "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors",
  statHoverBorder: "rgba(59,130,246,0.4)",
  statLabel: "text-xs uppercase tracking-wider text-blue-600",
  statValue: "mt-2 font-mono text-2xl font-semibold text-slate-900",
  statDesc: "mt-1 text-sm text-slate-500",
  sectionProduct: "border-y border-slate-200 bg-white py-20",
  sectionIntegrations: "border-y border-slate-200 bg-slate-50 py-20",
  integrationPill:
    "rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm",
  integrationSubhead: "text-sm font-semibold uppercase tracking-wider text-blue-600",
  productKicker: "mb-3 inline-flex items-center gap-2 text-blue-600",
  sectionTitle: "text-2xl font-semibold text-slate-900 sm:text-3xl",
  productLead: "mt-3 max-w-xl text-slate-600",
  bodyMuted: "text-slate-600",
  apiList: "mt-6 space-y-3 text-sm text-slate-600",
  productSvg: "relative z-[1] w-full max-w-md text-blue-500",
  productPanelFill: "rgba(255,255,255,0.92)",
  recursosLead: "mt-2 max-w-lg text-slate-600",
  recursosBolt: "hidden h-14 w-14 text-blue-200 sm:block",
  featureCard:
    "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-blue-300",
  featureGlow: "pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-400/15 blur-2xl",
  featureIconBox:
    "relative flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition group-hover:border-blue-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  featureTitle: "relative mt-4 font-semibold text-slate-900",
  featureBody: "relative mt-2 text-sm leading-relaxed text-slate-600",
  sectionApi: "border-y border-slate-200 bg-slate-100/80 py-20",
  planLead: "mx-auto mt-3 max-w-xl text-slate-600",
  planCard: "relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm",
  planCardHi:
    "relative flex flex-col overflow-hidden rounded-2xl border border-blue-400 bg-gradient-to-b from-blue-50 to-white p-8 shadow-[0_0_36px_rgba(37,99,235,0.12)]",
  planHiShimmer: "linear-gradient(120deg, transparent 40%, rgba(59,130,246,0.12) 50%, transparent 60%)",
  planTitle: "relative mt-4 text-lg font-semibold text-slate-900",
  planPrice: "relative mt-4 font-mono text-xl text-blue-600",
  planDesc: "relative mt-2 flex-1 text-sm text-slate-600",
  planCtaHi: "bg-blue-600 text-white hover:bg-blue-500",
  planCtaLo: "border border-slate-300 text-slate-900 hover:border-blue-400",
  sectionContact: "border-t border-slate-200 bg-gradient-to-b from-blue-50 to-slate-50 py-20",
  contactIconBox:
    "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-600 shadow-sm",
  contactPulse: [
    "0 0 0 0 rgba(59,130,246,0.35)",
    "0 0 0 16px rgba(59,130,246,0)",
    "0 0 0 0 rgba(59,130,246,0)"
  ],
  contactLead: "mt-3 text-slate-600",
  input:
    "w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 outline-none ring-blue-500/25 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 sm:max-w-xs",
  submit: "inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white",
  disclaimer: "mt-4 text-xs text-slate-500",
  footer: "border-t border-slate-200 py-12",
  footerLogo: "flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white",
  footerBrand: "font-semibold text-slate-900",
  footerAccent: "text-blue-600",
  footerCopy: "text-slate-500",
  footerLink: "hover:text-blue-600",
  accent: "text-blue-600",
  svg: {
    heroRing: "#2563eb",
    heroCheck: "#38bdf8",
    productCircle: "#2563eb",
    productCheck: "#38bdf8",
    productBtn: "#2563eb",
    productBtnText: "#ffffff"
  },
  copy: {
    recursosTagline:
      "Checkout com identidade Payle: conversão, integrações e rastreamento — branco e azul para transmitir clareza e confiança ao comprador."
  }
};

export const payleTheme: PayleTheme = brancoAzul;
