"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { payleTheme } from "./payleTheme";
import { IconArrowRight, IconPayleMark } from "./PayleIcons";
import { PayleHeroIllustration } from "./PaylePageIllustrations";
import { payleNav } from "./payleNavConfig";

export function PayleSiteChrome({
  children,
  tone = "default"
}: {
  children: ReactNode;
  /** Tom neutro institucional (ex.: página de planos); reduz elementos “tech” azuis no fundo. */
  tone?: "default" | "ink";
}) {
  const t = payleTheme;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  const spring = reduce ? { duration: 0.01 } : { type: "spring" as const, stiffness: 380, damping: 28 };

  const inkShell =
    "relative isolate min-h-screen bg-[#f4f3ef] text-neutral-900 antialiased [background-image:radial-gradient(rgba(120,113,105,0.07)_1px,transparent_1px)] [background-size:26px_26px]";
  const inkRadial =
    "pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_118%_75%_at_50%_-12%,rgba(16,185,129,0.052),transparent_56%),radial-gradient(ellipse_52%_45%_at_94%_-2%,rgba(0,0,0,0.042),transparent_52%)] max-md:opacity-95";
  const inkGrid =
    "pointer-events-none fixed inset-0 z-0 bg-[length:62px_62px] bg-[position:0_0] bg-[linear-gradient(rgba(0,0,0,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.026)_1px,transparent_1px)] opacity-[0.28] max-md:opacity-[0.16]";

  const shellClass = tone === "ink" ? inkShell : t.shell;
  const radialLayer = tone === "ink" ? inkRadial : t.fixedRadial;
  const gridLayer = tone === "ink" ? inkGrid : t.fixedGrid;
  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  const footerShell =
    tone === "ink"
      ? "overflow-hidden border-t border-neutral-200/85 bg-[linear-gradient(180deg,#e8e6e1_0%,#efeee9_58%,rgba(236,253,245,0.22)_100%)]"
      : t.footer;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={shellClass}>
      <div className={radialLayer} aria-hidden />
      <div className={gridLayer} aria-hidden />
      {tone === "default" && (
        <>
          <div
            className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_120%,rgba(59,130,246,0.07),transparent_58%),radial-gradient(ellipse_50%_40%_at_90%_15%,rgba(34,197,94,0.05),transparent_60%)] max-md:opacity-90"
            aria-hidden
          />
          <div
            className="pointer-events-none fixed bottom-0 left-6 top-[4.25rem] z-0 hidden w-px bg-gradient-to-b from-transparent via-blue-500/12 to-transparent md:block lg:left-10"
            aria-hidden
          />
          <div
            className="pointer-events-none fixed bottom-0 right-6 top-[4.25rem] z-0 hidden w-px bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent md:block lg:right-10"
            aria-hidden
          />
        </>
      )}
      {tone === "ink" && (
        <div
          className="pointer-events-none fixed bottom-0 left-6 top-[4.25rem] z-0 hidden w-px bg-gradient-to-b from-transparent via-neutral-900/[0.08] to-transparent md:block lg:left-10"
          aria-hidden
        />
      )}
      {tone === "ink" && (
        <div
          className="pointer-events-none fixed bottom-0 right-6 top-[4.25rem] z-0 hidden w-px bg-gradient-to-b from-transparent via-emerald-950/[0.12] to-transparent md:block lg:right-10"
          aria-hidden
        />
      )}
      <div
        className={`pointer-events-none fixed inset-0 z-0 payle-shell-diagonal max-md:opacity-[0.26] ${tone === "ink" ? "opacity-[0.14]" : "opacity-[0.42]"}`}
        aria-hidden
      />

      <motion.header
        className={`sticky top-0 z-50 border-b transition-[background,box-shadow,border-color] duration-500 ${
          scrolled ? t.headerScrolled : t.headerIdle
        }`}
        initial={false}
        animate={
          reduce
            ? undefined
            : {
                boxShadow: scrolled
                  ? "0 20px 50px -24px rgba(15,23,42,0.12)"
                  : "0 0 0 0 rgba(15,23,42,0)"
              }
        }
      >
        <div className="mx-auto flex h-[3.5rem] w-full min-w-0 max-w-7xl items-center gap-2 ps-[max(8px,env(safe-area-inset-left))] pe-[max(2px,env(safe-area-inset-right))] sm:h-[4.25rem] sm:gap-4 sm:px-6 lg:gap-6 lg:px-8">
          <motion.a
            href={t.homePath}
            className={`group flex min-w-0 shrink-0 items-center gap-2 font-semibold tracking-tight sm:gap-2.5 ${t.logoWord}`}
            whileHover={reduce ? undefined : { scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            <motion.span
              className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl sm:h-9 sm:w-9 ${t.logoMark}`}
              whileHover={reduce ? undefined : { rotate: [0, -4, 4, 0] }}
              transition={{ duration: 0.4 }}
            >
              <IconPayleMark className="h-[1.05rem] w-[1.05rem] sm:h-5 sm:w-5" />
              <span
                className="pointer-events-none absolute inset-0 rounded-xl bg-emerald-400/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
            </motion.span>
            <span className="truncate text-base sm:text-lg">
              pay<span className={t.logoAccent}>le</span>
            </span>
          </motion.a>

          {/* Mobile: ocupa o meio e empurra CTA + menu para o canto direito (mais previsível que justify-between com 2 filhos) */}
          <div className="min-w-0 flex-1 md:hidden" aria-hidden />

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 md:flex"
            aria-label="Principal"
          >
            {payleNav.map((item) => (
              <div key={item.id} className="group relative">
                <motion.a
                  href={item.href}
                  className={`relative ${t.navLink}`}
                  whileHover={reduce ? undefined : { y: -1 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-1 left-3 right-3 h-0.5 origin-center scale-x-0 rounded-full opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100 ${t.navUnderline}`}
                  />
                </motion.a>
                <div
                  className="pointer-events-none invisible absolute left-1/2 top-full z-[60] w-[15.75rem] -translate-x-1/2 -translate-y-1 pt-3 opacity-0 transition-[opacity,visibility] duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100"
                  role="presentation"
                >
                  <div className="rounded-2xl border border-slate-200/90 bg-white/96 p-3 shadow-[0_28px_55px_-22px_rgba(15,23,42,0.22)] ring-1 ring-slate-900/[0.04] backdrop-blur-xl">
                    <div className="overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/60 ring-1 ring-slate-200/60">
                      <PayleHeroIllustration variant={item.id} compact />
                    </div>
                    <p className="mt-2.5 px-0.5 text-[13px] leading-snug text-slate-600">{item.menuLead}</p>
                    <p className="mt-2 px-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-600">
                      Saiba mais
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-3">
            <motion.a
              href="/#contato"
              className={`hidden items-center gap-1 sm:inline-flex ${t.navGhost}`}
              whileHover={reduce ? undefined : { x: 2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Falar com o comercial
              <IconArrowRight className="h-3.5 w-3.5 opacity-60" />
            </motion.a>
            <motion.a
              href="/#contato"
              className={`relative inline-flex items-center gap-1 overflow-hidden md:gap-1.5 ${t.navPrimary}`}
              whileHover={reduce ? undefined : { scale: 1.02, y: -1 }}
              whileTap={reduce ? undefined : { scale: 0.96 }}
              transition={{ type: "spring", stiffness: 520, damping: 28 }}
            >
              {!reduce && (
                <motion.span
                  className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-transparent via-white/25 to-transparent md:block"
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
                  aria-hidden
                />
              )}
              <span className="relative whitespace-nowrap">Abrir conta</span>
              <IconArrowRight className="relative h-3 w-3 shrink-0 opacity-90 md:h-3.5 md:w-3.5" />
            </motion.a>

            <button
              type="button"
              className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-white/90 backdrop-blur-sm transition-[transform,background-color,box-shadow,border-color] duration-200 ease-out hover:border-slate-300 hover:bg-white active:scale-[0.94] md:hidden ${t.mobileBtnBorder}`}
              aria-expanded={open}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="flex flex-col gap-1.5">
                <motion.span
                  className={`block h-0.5 w-[1.15rem] rounded-full ${t.mobileBurger}`}
                  animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={spring}
                />
                <motion.span
                  className={`block h-0.5 w-[1.15rem] rounded-full ${t.mobileBurger}`}
                  animate={open ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className={`block h-0.5 w-[1.15rem] rounded-full ${t.mobileBurger}`}
                  animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={spring}
                />
              </span>
            </button>
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
              className={`${t.mobilePanel}`}
            >
              <nav className="flex flex-col gap-1 px-[max(12px,env(safe-area-inset-left))] pb-3 pe-[max(12px,env(safe-area-inset-right))] pt-3">
                {payleNav.map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className={`flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm ${t.mobileLink}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => setOpen(false)}
                  >
                    <span className="mt-0.5 shrink-0 overflow-hidden rounded-xl border border-slate-200/70 bg-gradient-to-br from-slate-50 to-blue-50/50 p-1 ring-1 ring-white/80">
                      <PayleHeroIllustration variant={item.id} compact />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold text-slate-900">{item.label}</span>
                      <span className="mt-0.5 block text-xs font-normal leading-snug text-slate-500">
                        {item.menuLead}
                      </span>
                    </span>
                  </motion.a>
                ))}
                <motion.a
                  href="/#contato"
                  className="mt-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-800 shadow-sm transition-colors duration-200 hover:border-blue-200 hover:bg-slate-50 hover:text-blue-700 active:scale-[0.99]"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 }}
                  onClick={() => setOpen(false)}
                >
                  Falar com o comercial
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="relative z-[1]">{children}</main>

      <footer className={`relative z-[1] ${footerShell}`}>
        <div
          className={
            tone === "ink"
              ? "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%-30%,rgba(16,185,129,0.06),transparent),radial-gradient(ellipse_42%_32%_at_96%_92%,rgba(0,0,0,0.04),transparent)]"
              : "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_42%_at_50%_-30%,rgba(59,130,246,0.07),transparent),radial-gradient(ellipse_46%_38%_at_96%_92%,rgba(34,197,94,0.05),transparent)]"
          }
          aria-hidden
        />
        <div
          className="payle-ambient-dots pointer-events-none absolute inset-0 opacity-[0.22] md:opacity-[0.28]"
          aria-hidden
        />
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
            tone === "ink"
              ? "bg-gradient-to-r from-transparent via-neutral-400/25 to-transparent"
              : "bg-gradient-to-r from-transparent via-blue-400/35 to-transparent"
          }`}
          aria-hidden
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={ease}
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20"
        >
          <motion.div
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="lg:col-span-1">
              <motion.div className="flex items-center gap-2" whileHover={reduce ? undefined : { x: 2 }}>
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${t.footerLogo}`}>
                  <IconPayleMark className="h-5 w-5" />
                </span>
                <span className={`text-lg ${t.footerBrand}`}>
                  pay<span className={t.footerAccent}>le</span>
                </span>
              </motion.div>
              <p className={t.footerTagline}>
                Você mantém o relacionamento com o adquirente; a Payle orquestra a página de pagamento, integrações e
                recursos de performance onde a conversão acontece.
              </p>
            </motion.div>
            {[
              { title: "Mapa do site", links: payleNav.map((item) => ({ href: item.href, label: item.label })) },
              {
                title: "Contato",
                links: [
                  { href: "/#contato", label: "Falar com o comercial" },
                  { href: "/#contato", label: "Abrir conta / sandbox" },
                  { href: "/planos", label: "Ver planos" }
                ]
              },
              {
                title: "Legal",
                links: [
                  { href: "#", label: "Termos" },
                  { href: "#", label: "Privacidade" },
                  { href: "#", label: "Status" }
                ]
              }
            ].map((col) => (
              <motion.div key={col.title} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                <p className={t.footerColTitle}>{col.title}</p>
                <nav className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className={t.footerLink}
                      whileHover={reduce ? undefined : { x: 3 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            ))}
          </motion.div>
          <div
            className={`mt-12 flex flex-col gap-3 border-t border-slate-200/80 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between ${t.footerCopy}`}
          >
            <span>© {new Date().getFullYear()} Payle. Todos os direitos reservados.</span>
            <span className="text-xs sm:text-sm">
              Checkout, integrações e rastreamento. Seu adquirente permanece sob sua gestão.
            </span>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
