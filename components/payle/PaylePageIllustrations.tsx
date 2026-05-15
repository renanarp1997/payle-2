import type { PayleNavVisualId } from "./payleNavConfig";
import { useId } from "react";

type Props = {
  variant: PayleNavVisualId;
  /** Preview no menu (altura fixa) */
  compact?: boolean;
  className?: string;
};

/** Ilustrações leves e editoriais — combinam com o tema azul/esmeralda da Payle */
export function PayleHeroIllustration({ variant, compact, className = "" }: Props) {
  const uid = useId().replace(/:/g, "");
  const ga = `payle-ill-a-${uid}`;
  const gb = `payle-ill-b-${uid}`;
  const box = compact ? "h-[5.5rem] w-full" : "aspect-[5/4] w-full max-h-[min(52vw,320px)] sm:max-h-[340px] lg:max-h-none";

  return (
    <div className={`relative overflow-hidden rounded-2xl ${box} ${className}`} aria-hidden>
      {!compact && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.1),transparent_45%)]" />
      )}
      <svg
        viewBox="0 0 400 320"
        className="relative h-full w-full text-slate-800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={ga} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#bfdbfe" />
            <stop offset="100%" stopColor="#a7f3d0" />
          </linearGradient>
          <linearGradient id={gb} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>

        {variant === "produto" && (
          <>
            <ellipse cx="200" cy="268" rx="140" ry="28" fill="#cbd5e1" fillOpacity="0.35" />
            <rect x="72" y="56" width="256" height="176" rx="20" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="96" y="84" width="208" height="112" rx="12" fill={`url(#${ga})`} fillOpacity="0.65" />
            <path d="M120 156 L176 124 L232 148 L288 108" stroke={`url(#${gb})`} strokeWidth="4" strokeLinecap="round" />
            <circle cx="176" cy="124" r="6" fill="#3b82f6" />
            <circle cx="232" cy="148" r="6" fill="#22c55e" />
            <rect x="148" y="188" width="104" height="28" rx="8" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="1.5" />
            <circle cx="310" cy="200" r="36" fill="#fde68a" fillOpacity="0.55" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="304" cy="192" r="8" fill="#334155" />
            <path d="M286 214 Q304 228 322 214" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          </>
        )}

        {variant === "operacao" && (
          <>
            <ellipse cx="200" cy="268" rx="140" ry="28" fill="#cbd5e1" fillOpacity="0.35" />
            <rect x="88" y="72" width="224" height="168" rx="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="112" y="100" width="72" height="48" rx="10" fill="#dbeafe" />
            <rect x="200" y="100" width="88" height="48" rx="10" fill="#d1fae5" />
            <rect x="112" y="162" width="176" height="12" rx="4" fill="#e2e8f0" />
            <rect x="112" y="184" width="136" height="12" rx="4" fill="#e2e8f0" />
            <rect x="112" y="206" width="156" height="12" rx="4" fill="#e2e8f0" />
            <circle cx="314" cy="118" r="42" fill="#fce7f3" fillOpacity="0.7" stroke="#f472b6" strokeWidth="2" />
            <circle cx="306" cy="108" r="7" fill="#475569" />
            <path d="M292 128 Q306 138 320 128" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
            <rect x="268" y="146" width="44" height="52" rx="14" fill="#93c5fd" />
          </>
        )}

        {variant === "integracoes" && (
          <>
            <ellipse cx="200" cy="268" rx="140" ry="28" fill="#cbd5e1" fillOpacity="0.35" />
            <circle cx="200" cy="156" r="44" fill="#eff6ff" stroke={`url(#${gb})`} strokeWidth="3" />
            <circle cx="108" cy="120" r="28" fill="#ffffff" stroke="#93c5fd" strokeWidth="2" />
            <circle cx="292" cy="120" r="28" fill="#ffffff" stroke="#86efac" strokeWidth="2" />
            <circle cx="124" cy="214" r="28" fill="#ffffff" stroke="#93c5fd" strokeWidth="2" />
            <circle cx="276" cy="214" r="28" fill="#ffffff" stroke="#86efac" strokeWidth="2" />
            <path d="M136 128 L168 142" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M264 128 L232 142" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M144 200 L176 178" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M256 200 L224 178" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M200 112 L200 128" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
          </>
        )}

        {variant === "recursos" && (
          <>
            <ellipse cx="200" cy="268" rx="140" ry="28" fill="#cbd5e1" fillOpacity="0.35" />
            <rect x="76" y="84" width="248" height="148" rx="16" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="100" y="112" width="56" height="56" rx="14" fill="#dbeafe" />
            <path d="M118 148 L128 158 L148 132" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="172" y="112" width="56" height="56" rx="14" fill="#ecfccb" />
            <path d="M188 144 L200 132 L212 152 L228 124" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="244" y="112" width="56" height="56" rx="14" fill="#fef3c7" />
            <circle cx="272" cy="140" r="10" fill="#f59e0b" fillOpacity="0.35" stroke="#f59e0b" strokeWidth="2" />
            <rect x="100" y="182" width="200" height="10" rx="3" fill="#e2e8f0" />
            <rect x="100" y="200" width="160" height="10" rx="3" fill="#e2e8f0" />
            <SparkleDots />
          </>
        )}

        {variant === "checkout" && (
          <>
            <ellipse cx="200" cy="268" rx="140" ry="28" fill="#cbd5e1" fillOpacity="0.35" />
            <rect x="92" y="68" width="216" height="168" rx="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="116" y="96" width="168" height="40" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect x="116" y="148" width="168" height="40" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect x="116" y="200" width="104" height="14" rx="4" fill="#e2e8f0" />
            <circle cx="292" cy="116" r="22" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
            <path d="M284 116 L290 122 L302 108" stroke="#15803d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="248" y="184" width="48" height="36" rx="10" fill="#3b82f6" fillOpacity="0.9" />
            <path d="M262 196 L268 208 L282 188" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}

        {variant === "planos" && (
          <>
            <ellipse cx="200" cy="268" rx="140" ry="28" fill="#cbd5e1" fillOpacity="0.35" />
            <rect x="104" y="200" width="64" height="72" rx="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <rect x="168" y="168" width="64" height="104" rx="12" fill="#cffafe" stroke="#06b6d4" strokeWidth="2" />
            <rect x="232" y="136" width="64" height="136" rx="12" fill="#d1fae5" stroke="#22c55e" strokeWidth="2" />
            <path d="M136 176 L200 132 L264 96" stroke={`url(#${gb})`} strokeWidth="3" strokeLinecap="round" strokeDasharray="6 8" />
            <circle cx="352" cy="96" r="26" fill="#fef08a" fillOpacity="0.65" stroke="#eab308" strokeWidth="2" />
            <path d="M344 96 L350 102 L362 90" stroke="#854d0e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}

        {variant === "duvidas" && (
          <>
            <ellipse cx="200" cy="268" rx="140" ry="28" fill="#cbd5e1" fillOpacity="0.35" />
            <circle cx="148" cy="148" r="52" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="138" cy="138" r="6" fill="#475569" />
            <circle cx="158" cy="138" r="6" fill="#475569" />
            <path d="M132 162 Q148 176 164 162" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
            <path d="M194 108 H292 Q308 108 308 124 V168 Q308 184 292 184 H260" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
            <text x="218" y="152" fill="#1e40af" fontSize="28" fontWeight="700" fontFamily="system-ui, sans-serif">
              ?
            </text>
            <rect x="228" y="196" width="120" height="56" rx="16" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
            <path d="M248 212 H328 M248 228 H300 M248 244 H316" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
          </>
        )}
      </svg>
    </div>
  );
}

/** Pontos decorativos no canto da grade de recursos */
function SparkleDots() {
  return (
    <>
      <circle cx="352" cy="92" r="4" fill="#38bdf8" />
      <circle cx="364" cy="108" r="3" fill="#22c55e" />
      <circle cx="344" cy="108" r="2.5" fill="#f472b6" />
      <path d="M60 96 L64 104 L72 100 L64 112 L60 120 L56 112 L48 116 L56 104 Z" fill="#fde047" fillOpacity="0.85" />
    </>
  );
}
