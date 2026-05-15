"use client";

import { motion, useReducedMotion } from "framer-motion";
import { payleTheme } from "./payleTheme";
import { PayleSiteChrome } from "./PayleSiteChrome";
import { IconArrowRight } from "./PayleIcons";

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

export function PayleDuvidasPage() {
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
            <h1 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">Dúvidas</h1>
            <span
              className="mt-3 block h-[3px] w-[calc(100%+1.5rem)] max-w-[12rem] rounded-full bg-blue-600"
              aria-hidden
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ease, delay: reduce ? 0 : 0.08 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            As dúvidas que mais aparecem quando alguém já opera checkout e gateway no dia a dia — em linguagem direta,
            alinhada ao que a Payle entrega hoje.
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

      <section className={t.sectionFaq}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="mx-auto max-w-2xl text-center"
          >
            <p className={t.productKicker}>FAQ</p>
            <h2 className={`mt-3 ${t.sectionTitle}`}>Dúvidas frequentes</h2>
            <p className={t.faqLead}>
              Abra cada item para ver a resposta. Se precisar de algo fora do roteiro, o time comercial ajuda no contato.
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

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: reduce ? 0 : 0.06 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-slate-200/80 pt-10"
          >
            <motion.a
              href="/planos"
              className={`inline-flex items-center gap-2 text-sm font-semibold ${t.accent}`}
              whileHover={reduce ? undefined : { x: 3 }}
            >
              Ver planos
              <IconArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="/integracoes"
              className={`inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700`}
              whileHover={reduce ? undefined : { x: 3 }}
            >
              Integrações
              <IconArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </PayleSiteChrome>
  );
}
