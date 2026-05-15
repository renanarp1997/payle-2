/** Contato comercial via WhatsApp — único ponto para CTAs nas páginas de conversão. */
export const PAYLE_WHATSAPP_E164_DIGITS = "5511999999999";

export function payleCommercialWhatsAppUrl(message: string) {
  return `https://wa.me/${PAYLE_WHATSAPP_E164_DIGITS}?text=${encodeURIComponent(message)}`;
}
