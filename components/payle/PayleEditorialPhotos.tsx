"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePayleMotion } from "./PayleVisuals";

export type EditorialPhotoItem = {
  src: string;
  alt: string;
  caption: string;
};

function gridClass(columns: 2 | 3 | 4): string {
  switch (columns) {
    case 4:
      return "sm:grid-cols-2 lg:grid-cols-4";
    case 3:
      return "sm:grid-cols-2 lg:grid-cols-3";
    default:
      return "sm:grid-cols-2";
  }
}

export function PayleEditorialGallery({
  photos,
  columns = 3,
  className = "",
  showCredit = true
}: {
  photos: EditorialPhotoItem[];
  columns?: 2 | 3 | 4;
  className?: string;
  showCredit?: boolean;
}) {
  const { reduce, viewport } = usePayleMotion();
  const cols = photos.length <= 2 ? 2 : columns;

  return (
    <div className={className}>
      <div className={`grid gap-5 ${gridClass(cols)}`}>
        {photos.map((item, i) => (
          <motion.figure
            key={item.src}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: reduce ? 0 : i * 0.06, duration: 0.45 }}
            whileHover={reduce ? undefined : { y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-slate-900/[0.03]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[4/5]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/15 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/20 bg-white/12 px-3 py-2 backdrop-blur-md">
                <p className="text-xs font-semibold text-white">{item.caption}</p>
              </div>
            </div>
          </motion.figure>
        ))}
      </div>
      {showCredit ? <PayleEditorialCredit centered className="mt-4 sm:mt-6" /> : null}
    </div>
  );
}

export function PayleEditorialBanner({
  src,
  alt,
  caption,
  className = "",
  showCredit = true
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  showCredit?: boolean;
}) {
  const { ease, viewport } = usePayleMotion();

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={ease}
        className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-[0_24px_64px_-24px_rgba(15,23,42,0.14)] ring-1 ring-slate-900/[0.03]"
      >
        <div className="relative aspect-[21/10] min-h-[180px] w-full sm:aspect-[2.35/1]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority={false}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/25 to-slate-900/10"
            aria-hidden
          />
          <div className="absolute bottom-4 left-4 right-4 max-w-xl rounded-xl border border-white/20 bg-white/12 px-4 py-3 backdrop-blur-md sm:left-8 sm:bottom-8">
            <p className="text-sm font-semibold leading-snug text-white">{caption}</p>
          </div>
        </div>
      </motion.div>
      {showCredit ? <PayleEditorialCredit centered className="mt-4" /> : null}
    </div>
  );
}

export function PayleEditorialCredit({
  className = "",
  centered = false
}: {
  className?: string;
  centered?: boolean;
}) {
  return (
    <p className={`text-[11px] text-slate-400 ${centered ? "text-center" : ""} ${className}`}>
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
  );
}
