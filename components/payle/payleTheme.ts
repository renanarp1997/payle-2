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
  sectionRecursos: string;
  sectionPlans: string;
  sectionIntegrations: string;
  integrationPill: string;
  integrationSubhead: string;
  integrationCard: string;
  productKicker: string;
  productIconBox: string;
  sectionTitle: string;
  productLead: string;
  bodyMuted: string;
  apiList: string;
  productSvg: string;
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
  planIconBox: string;
  planTitle: string;
  planPrice: string;
  planDesc: string;
  planCtaHi: string;
  planCtaLo: string;
  sectionFaq: string;
  faqLead: string;
  faqDetails: string;
  faqSummary: string;
  faqAnswer: string;
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
  footerColTitle: string;
  footerTagline: string;
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
  shell: "min-h-screen bg-[#f8fafc] text-slate-900 antialiased",
  fixedRadial:
    "pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-12%,rgba(59,130,246,0.14),transparent_55%),radial-gradient(ellipse_60%_50%_at_100%_0%,rgba(34,197,94,0.08),transparent_50%)] motion-safe:animate-payle-pulse-glow",
  fixedGrid:
    "pointer-events-none fixed inset-0 bg-[length:72px_72px] bg-[position:0_0] bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] opacity-40 motion-safe:animate-payle-grid-drift",
  headerIdle:
    "border-white/60 bg-white/55 shadow-[0_1px_0_0_rgba(255,255,255,0.8)_inset] backdrop-blur-2xl backdrop-saturate-150",
  headerScrolled:
    "border-slate-200/70 bg-white/80 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.12),0_1px_0_0_rgba(255,255,255,0.9)_inset] backdrop-blur-2xl backdrop-saturate-150",
  logoMark:
    "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-[0_0_20px_rgba(37,99,235,0.35)]",
  logoWord: "text-lg text-slate-900",
  logoAccent: "text-blue-600",
  navLink:
    "rounded-lg px-3 py-2 text-[13px] font-medium text-slate-600 transition-all duration-200 hover:bg-slate-900/[0.04] hover:text-slate-900",
  navUnderline: "bg-gradient-to-r from-blue-600 to-emerald-500",
  navGhost:
    "rounded-lg px-3 py-2 text-[13px] font-medium text-slate-600 transition-all duration-200 hover:bg-slate-900/[0.04] hover:text-slate-900",
  navPrimary:
    "rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_20px_-4px_rgba(37,99,235,0.55),0_0_0_1px_rgba(255,255,255,0.12)_inset] transition-all duration-300 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 hover:shadow-[0_8px_32px_-6px_rgba(37,99,235,0.55),0_0_24px_-4px_rgba(34,197,94,0.35)]",
  navPrimaryHoverShadow: "0 0 28px rgba(59,130,246,0.45)",
  mobileBtnBorder: "border-slate-200",
  mobileBurger: "bg-slate-700",
  mobilePanel: "overflow-hidden border-t border-slate-200 bg-white shadow-inner md:hidden",
  mobileLink:
    "rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50",
  mobileCta:
    "rounded-full bg-blue-600 py-3 text-center text-sm font-semibold text-white shadow-md shadow-blue-600/20",
  heroMaxWidth: "relative z-10 w-full max-w-3xl lg:max-w-xl xl:max-w-2xl",
  heroMockFrame:
    "relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100/35 p-2 shadow-[0_24px_64px_-20px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.03] sm:p-3",
  heroPixText: "text-xs font-semibold text-slate-900",
  badge:
    "mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700",
  badgeSpark: "text-blue-600",
  h1: "text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.06] xl:text-6xl",
  h1Pix: "bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent",
  heroLead: "mt-6 max-w-xl text-lg leading-relaxed text-slate-600",
  btnPrimary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-200 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30",
  btnSecondary:
    "inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/90 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:border-blue-300 hover:bg-slate-50/80 hover:text-blue-700",
  btnSecondaryHoverBorder: "rgba(59,130,246,0.45)",
  statCard:
    "flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-slate-900/[0.02] transition-all duration-200 sm:p-6",
  statHoverBorder: "rgba(59,130,246,0.45)",
  statLabel: "text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600",
  statValue: "mt-2.5 font-mono text-3xl font-semibold tabular-nums tracking-tight text-slate-900",
  statDesc: "mt-3 flex-1 text-sm leading-relaxed text-slate-500",
  sectionProduct: "border-y border-slate-200/60 bg-gradient-to-b from-white via-slate-50/40 to-white py-24 sm:py-32",
  sectionIntegrations:
    "border-y border-slate-200/60 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 py-24 sm:py-32",
  integrationPill:
    "rounded-full border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50/60 hover:text-slate-900",
  integrationSubhead: "text-xs font-semibold uppercase tracking-[0.14em] text-blue-600",
  integrationCard:
    "flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-slate-900/[0.02] transition-all duration-200 hover:border-blue-200/80 hover:shadow-md",
  productKicker: "text-xs font-semibold uppercase tracking-[0.14em] text-blue-600",
  productIconBox:
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm",
  sectionTitle:
    "text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.12]",
  productLead: "mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg",
  bodyMuted: "text-slate-600 leading-relaxed",
  apiList: "mt-6 space-y-4 text-sm leading-relaxed text-slate-600",
  productSvg:
    "relative z-[1] w-full max-w-[min(100%,22rem)] text-blue-500 drop-shadow-[0_20px_50px_-12px_rgba(37,99,235,0.18)] sm:max-w-md",
  sectionRecursos: "border-y border-slate-200/60 bg-white py-24 sm:py-32",
  sectionPlans: "border-y border-slate-200/60 bg-gradient-to-b from-slate-50/90 to-white py-24 sm:py-32",
  recursosLead: "mt-3 max-w-2xl text-base leading-relaxed text-slate-600",
  recursosBolt: "hidden h-14 w-14 text-blue-200 sm:block",
  featureCard:
    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-slate-900/[0.02] transition-all duration-200 hover:border-blue-200/90 hover:shadow-md",
  featureGlow: "pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-400/15 blur-2xl",
  featureIconBox:
    "relative flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition group-hover:border-blue-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  featureTitle: "relative mt-4 text-base font-semibold leading-snug tracking-tight text-slate-900",
  featureBody: "relative mt-2 flex-1 text-sm leading-relaxed text-slate-600",
  sectionApi:
    "border-y border-slate-200/60 bg-gradient-to-b from-blue-50/40 via-white to-emerald-50/30 py-24 sm:py-32",
  planLead: "mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600",
  planCard:
    "relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-8 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-slate-900/[0.02] transition-all duration-200 hover:border-slate-300 hover:shadow-lg",
  planCardHi:
    "relative flex h-full flex-col overflow-hidden rounded-2xl border border-blue-400/90 bg-gradient-to-b from-blue-50 to-white p-8 text-left shadow-[0_8px_40px_-12px_rgba(37,99,235,0.18)] ring-1 ring-blue-500/10 transition-all duration-200 hover:shadow-xl",
  planHiShimmer: "linear-gradient(120deg, transparent 40%, rgba(59,130,246,0.12) 50%, transparent 60%)",
  planIconBox:
    "relative mb-1 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600",
  planTitle: "relative mt-3 text-lg font-semibold tracking-tight text-slate-900",
  planPrice: "relative mt-3 font-mono text-xl font-semibold tabular-nums text-blue-600",
  planDesc: "relative mt-3 flex-1 text-sm leading-relaxed text-slate-600",
  planCtaHi:
    "w-full rounded-full bg-blue-600 px-4 py-2.5 text-white shadow-md shadow-blue-600/20 transition-colors hover:bg-blue-500",
  planCtaLo:
    "w-full rounded-full border border-slate-300 bg-white px-4 py-2.5 text-slate-900 shadow-sm transition-colors hover:border-blue-300 hover:bg-slate-50",
  sectionFaq: "border-y border-slate-200/60 bg-slate-50/40 py-24 sm:py-32",
  faqLead: "mt-3 max-w-2xl text-base leading-relaxed text-slate-600",
  faqDetails:
    "group mb-3 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-slate-900/[0.02] transition-shadow last:mb-0 open:shadow-md open:ring-blue-100/60 sm:mb-4 sm:last:mb-0",
  faqSummary:
    "flex w-full cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold text-slate-900 outline-none transition-colors hover:bg-slate-50/80 sm:px-5 sm:text-[15px] [&::-webkit-details-marker]:hidden",
  faqAnswer: "border-t border-slate-100 px-4 pb-5 pt-3 text-sm leading-relaxed text-slate-600 sm:px-5",
  sectionContact:
    "border-t border-slate-200/60 bg-gradient-to-b from-blue-50/50 via-white to-emerald-50/20 py-24 sm:py-32",
  contactIconBox:
    "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-600 shadow-sm",
  contactPulse: [
    "0 0 0 0 rgba(59,130,246,0.35)",
    "0 0 0 16px rgba(59,130,246,0)",
    "0 0 0 0 rgba(59,130,246,0)"
  ],
  contactLead: "mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-600",
  input:
    "w-full rounded-full border border-slate-300/90 bg-white px-5 py-3.5 text-sm text-slate-900 shadow-sm outline-none transition-shadow placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:max-w-xs",
  submit:
    "inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all hover:bg-blue-500 hover:shadow-lg",
  disclaimer: "mt-5 text-xs leading-relaxed text-slate-500",
  footer: "border-t border-slate-200/80 bg-white",
  footerLogo: "flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white",
  footerBrand: "font-semibold text-slate-900",
  footerAccent: "text-blue-600",
  footerCopy: "text-slate-500",
  footerLink: "text-sm font-medium text-slate-600 transition-colors hover:text-blue-600",
  footerColTitle: "text-xs font-semibold uppercase tracking-[0.14em] text-slate-900",
  footerTagline: "mt-3 max-w-sm text-sm leading-relaxed text-slate-500",
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
      "Experiência de checkout com a identidade visual da sua marca, integrações nativas e medição de desempenho — conversão e operação no mesmo lugar."
  }
};

export const payleTheme: PayleTheme = brancoAzul;
