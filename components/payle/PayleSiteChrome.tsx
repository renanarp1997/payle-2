"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { payleTheme } from "./payleTheme";
import { IconArrowRight, IconPayleMark } from "./PayleIcons";
import { payleNav } from "./payleNavConfig";

export function PayleSiteChrome({ children }: { children: ReactNode }) {
  const t = payleTheme;
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const spring = reduce ? { duration: 0.01 } : { type: "spring" as const, stiffness: 380, damping: 28 };
  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const threshold = 12;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={t.shell}>
      <div className={t.fixedRadial} aria-hidden />
      <div className={t.fixedGrid} aria-hidden />

      {/* Sem motion/layout no header: evita conflitos com Fast Refresh ao editar payleNavConfig */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
          scrolled ? t.headerScrolled : t.headerIdle
        }`}
      >
        <div className="mx-auto grid h-16 max-w-6xl grid-cols-[auto_1fr] items-center gap-2 px-4 sm:gap-3 sm:px-6 md:grid-cols-[auto_1fr_auto]">
          <a
            href={t.homePath}
            className={`flex min-w-0 items-center gap-2 justify-self-start font-semibold tracking-tight transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${t.logoWord}`}
          >
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${t.logoMark}`}>
              <IconPayleMark className="h-5 w-5" />
            </span>
            <span className="text-lg">
              pay<span className={t.logoAccent}>le</span>
            </span>
          </a>

          <nav className="hidden min-w-0 justify-self-center md:col-start-2 md:flex md:flex-wrap md:justify-center md:gap-0.5">
            {payleNav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`group relative px-2.5 py-2 transition-transform duration-200 hover:-translate-y-px sm:px-3 ${t.navLink}`}
              >
                {item.label}
                <span
                  className={`absolute bottom-1 left-2.5 right-2.5 h-px origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100 sm:left-3 sm:right-3 ${t.navUnderline}`}
                />
              </a>
            ))}
          </nav>

          <div className="col-start-2 flex items-center justify-end gap-2 md:col-start-3 md:gap-3">
            <div className="hidden items-center gap-2 md:flex md:gap-3">
              <a
                href="/#contato"
                className={`inline-flex items-center gap-1 transition-transform duration-200 hover:translate-x-0.5 ${t.navGhost}`}
              >
                Falar com vendas
                <IconArrowRight className="h-4 w-4 opacity-70" />
              </a>
              <a
                href="/#contato"
                className={`inline-flex items-center gap-1.5 rounded-full shadow-md transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(59,130,246,0.45)] active:scale-[0.97] ${t.navPrimary}`}
              >
                Criar conta
                <IconArrowRight className="h-3.5 w-3.5 opacity-90" />
              </a>
            </div>

            <button
              type="button"
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-transform active:scale-95 md:hidden ${t.mobileBtnBorder}`}
              aria-expanded={open}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
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
              className={t.mobilePanel}
            >
              <nav className="flex flex-col gap-1 px-4 py-4">
                {payleNav.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`rounded-lg px-3 py-2.5 text-sm ${t.mobileLink}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/#contato"
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 ${t.mobileLink}`}
                  onClick={() => setOpen(false)}
                >
                  Falar com vendas
                </a>
                <a
                  href="/#contato"
                  className={`mt-3 block text-center ${t.mobileCta}`}
                  onClick={() => setOpen(false)}
                >
                  Criar conta
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>{children}</main>

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
                Seu adquirente, nossa página de pagamento: integrações nativas, tracking e recuperação onde a venda
                acontece.
              </p>
            </div>
            <div>
              <p className={t.footerColTitle}>Mapa do site</p>
              <nav className="mt-4 flex flex-col gap-2.5" aria-label="Mapa do site">
                {payleNav.map((item) => (
                  <motion.a
                    key={item.id}
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
                <motion.a href="/#contato" className={t.footerLink} whileHover={reduce ? undefined : { x: 3 }}>
                  Falar com vendas
                </motion.a>
                <motion.a href="/#contato" className={t.footerLink} whileHover={reduce ? undefined : { x: 3 }}>
                  Criar conta / Sandbox
                </motion.a>
                <motion.a href="/planos" className={t.footerLink} whileHover={reduce ? undefined : { x: 3 }}>
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
