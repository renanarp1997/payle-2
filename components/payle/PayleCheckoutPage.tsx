"use client";

import { motion, useReducedMotion } from "framer-motion";
import { payleTheme } from "./payleTheme";
import { PayleSiteChrome } from "./PayleSiteChrome";
import {
  IconActivity,
  IconArrowRight,
  IconCheck,
  IconLayers,
  IconSpark,
  IconTerminal
} from "./PayleIcons";

const checkoutBullets = [
  "Pixels e tags configuráveis com granularidade avançada",
  "Supertracking para acompanhar jornadas e atribuição com mais precisão",
  "Superrecuperação de carrinho com automações focadas em retomar a compra"
] as const;

export function PayleCheckoutPage() {
  const t = payleTheme;
  const reduce = useReducedMotion();
  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };
  const viewport = { once: true, margin: "-60px" as const };

  return (
    <PayleSiteChrome>
      <section className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-14 text-center sm:px-6 sm:pb-20 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={ease}
            className="inline-flex flex-col items-center"
          >
            <h1 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">Checkout</h1>
            <span
              className="mt-3 block h-[3px] w-[calc(100%+1.5rem)] max-w-[13rem] rounded-full bg-blue-600"
              aria-hidden
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ease, delay: reduce ? 0 : 0.08 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Pagamento com o seu gateway, na mesma página em que você mede funil, dispara pixels e recupera carrinho —
            marketing e operação conversando sem solução paralela.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ease, delay: reduce ? 0 : 0.14 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="/#contato"
              className={t.btnPrimary}
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
            >
              Falar com vendas
              <IconArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="/"
              className={t.btnSecondary}
              whileHover={reduce ? undefined : { scale: 1.02, borderColor: t.btnSecondaryHoverBorder }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              Voltar ao início
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className={t.sectionApi}>
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
                <span className={t.integrationSubhead}>Performance no funil</span>
              </div>
              <h2 className={t.sectionTitle}>Marketing e performance dentro do checkout</h2>
              <p className={`mt-3 ${t.bodyMuted}`}>
                Além de processar pagamentos com o seu gateway, a Payle concentra os gatilhos de conversão na mesma
                página: pixels avançados, supertracking e superrecuperação de carrinho trabalhando juntos.
              </p>
              <ul className={t.apiList}>
                {checkoutBullets.map((text) => (
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: reduce ? 0 : 0.08 }}
            className="mx-auto mt-16 max-w-3xl rounded-2xl border border-slate-200/90 bg-white/80 p-6 shadow-sm ring-1 ring-slate-900/[0.02] sm:p-8"
          >
            <h3 className="text-base font-semibold tracking-tight text-slate-900">Em uma frase</h3>
            <p className={`mt-3 text-sm leading-relaxed sm:text-base ${t.bodyMuted}`}>
              O checkout deixa de ser só “a página do cartão”: vira o ponto em que comprador, adquirente, campanha e
              recuperação se encontram — com rastreio e automação no mesmo fluxo.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600">
              <span className="inline-flex items-center gap-1.5">
                <IconActivity className="h-4 w-4" aria-hidden />
                Tracking
              </span>
              <span className="inline-flex items-center gap-1.5">
                <IconSpark className="h-4 w-4" aria-hidden />
                Recuperação
              </span>
              <span className="inline-flex items-center gap-1.5">
                <IconLayers className="h-4 w-4" aria-hidden />
                Conversão
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: reduce ? 0 : 0.1 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            <motion.a
              href="/recursos"
              className={`inline-flex items-center gap-2 text-sm font-semibold ${t.accent}`}
              whileHover={reduce ? undefined : { x: 3 }}
            >
              Ver todos os recursos
              <IconArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="/planos"
              className={`inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700`}
              whileHover={reduce ? undefined : { x: 3 }}
            >
              Planos
              <IconArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </PayleSiteChrome>
  );
}
